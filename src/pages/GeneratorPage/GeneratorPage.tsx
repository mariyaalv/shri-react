import type { FC } from 'react';
import cls from './GeneratorPage.module.css';
import { Generate } from '../../components/Generate/Generate';
import { useReportStore } from '../../store/useReportStore';
import { fetchGenerateReport } from '../../api/generator/generator';

export const GeneratorPage: FC = () => {
  const { size, withErrors, maxSpend, setStatus, setError } = useReportStore();

  const handleSubmit = async () => {
    setStatus('loading');
    setError(undefined);
    try {
      const blob = await fetchGenerateReport({ size, withErrors, maxSpend });
      const downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'report.csv';
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(link);
      setStatus('success');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Произошла ошибка';
      setError(errorMessage);
      setStatus('error');
    }
  };

  return (
    <main className={cls.GeneratorPage}>
      <Generate onClick={handleSubmit} />
    </main>
  );
};
