import type { AnalysisData } from '../types/types';
const baseURL = 'http://localhost:3000/aggregate';

export const fetchAggregate = async (
  file: File,
  rows = 10000,
  onPartialResult: (data: AnalysisData) => void
): Promise<AnalysisData> => {
  const url = new URL(baseURL);
  url.searchParams.append('rows', rows.toString());

  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    throw new Error(`Сетевая ошибка: ${response.status} ${errorText}`);
  }

  if (!response.body) {
    throw new Error('Получен некорректный ответ от сервера');
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let lastRes: AnalysisData | null = null;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      const parsed = safeParse(line);
      if (parsed) {
        onPartialResult(parsed);
        lastRes = parsed;
      }
    }
  }

  if (buffer.trim()) {
    const parsed = safeParse(buffer);
    if (parsed) {
      onPartialResult(parsed);
      lastRes = parsed;
    }
  }

  if (!lastRes) {
    throw new Error('Не получен валидный результат от сервера');
  }

  return lastRes;
};

function safeParse(line: string): AnalysisData | null {
  try {
    const obj = JSON.parse(line);
    return obj;
  } catch {
    return null;
  }
}
