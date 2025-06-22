import type { FC } from 'react';
import { useReportStore } from '../../store/useReportStore';
import { renderGenerate } from './utils/renderGenerate';
import cls from './Generate.module.css';

interface GenerateProps {
  onClick?: () => void;
}
export const Generate: FC<GenerateProps> = ({ onClick }) => {
  const { status, reset } = useReportStore();

  const handleClear = () => {
    reset();
  };

  return (
    <div className={cls.container}>
      <p className={cls.paragraph}>
        Сгенерируйте готовый csv-файл нажатием одной кнопки
      </p>
      <div className={cls.btn}>{renderGenerate(status, onClick, handleClear)}</div>
    </div>
  );
};
