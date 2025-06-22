import type { GenerateData } from '../types/types';

const baseURL = 'http://localhost:3000/report?';

export const fetchGenerateReport = async (
  data: GenerateData = {
    size: 0.01,
    withErrors: 'off',
    maxSpend: '1000',
  }
): Promise<Blob> => {
  const { size, withErrors, maxSpend } = data;

  const params: Record<string, string> = {
    size: size.toString(),
  };

  if (withErrors !== undefined) {
    params.withErrors = withErrors;
  }

  if (maxSpend !== undefined) {
    params.maxSpend = maxSpend;
  }

  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${baseURL}${query}`);
  if (!response.ok) throw new Error('Ошибка при загрузке файла');
  return await response.blob();
};
