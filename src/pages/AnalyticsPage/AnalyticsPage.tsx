import type { FC } from 'react';
import cls from './AnalyticsPage.module.css';
import { Highlights } from '../../components/Highlights/Highlights';
import { DragDropCsvFile } from '../../components/DragDropCsvFile/DragDropCsvFile';
import { useFileStore } from '../../store';
import { Button, ButtonDefaultTheme } from '../../components/Button/Button';
import { fetchAggregate } from '../../api/aggregate/aggregate';
import { useHistoryStore } from '../../store/useHistoryStore';
import type { AnalysisData } from '../../api/types/types';

export const AnalyticsPage: FC = () => {
  const { file, status, data, setError, setStatus, setData } = useFileStore();

  const { addToHistory } = useHistoryStore.getState();

  const handleSubmit = async (file: File) => {
    if (status !== 'success' || !file) return;
    setStatus('parsing');
    setError(undefined);

    try {
      let finalData: AnalysisData | null = null;
      await fetchAggregate(file, 10000, (chunk) => {
        setData(chunk);
        finalData = chunk;
      });
      setStatus('done');
      addToHistory({
        id: new Date().toString(),
        timestamp: new Date().toISOString(),
        fileName: file.name,
        date: finalData,
        status: 'success',
      });
      console.log(useHistoryStore.getState());
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Ошибка при обработке файла';
      setError(errorMessage);
      setStatus('error');
      addToHistory({
        id: new Date().toString(),
        timestamp: new Date().toISOString(),
        fileName: file.name,
        date: null,
        status: 'error',
        error: errorMessage,
      });
    }
  };

  return (
    <main className={cls.AnalyticsPage}>
      <DragDropCsvFile />
      {status !== 'error' && status !== 'parsing' && status !== 'done' && (
        <Button
          disabled={status !== 'success'}
          onClick={() => handleSubmit(file!)}
          className={cls.btn}
          theme={
            status === 'success'
              ? ButtonDefaultTheme.ACTIVE
              : ButtonDefaultTheme.UNACTIVE
          }
        >
          Отправить
        </Button>
      )}
      <Highlights data={data!} />
    </main>
  );
};
