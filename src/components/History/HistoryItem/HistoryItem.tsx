import type { AnalysisData } from '../../../api/types/types';
import { Button } from '../../Button';

import cls from './HistoryList.module.css';

interface HistoryItemProps {
  filename: string;
  date: AnalysisData;
}

export const HistoryItem = ({ filename, date }: HistoryItemProps) => {
  return (
    <div className={cls.HistoryItem}>
      <h3>{filename}</h3>
      <p>{}</p>
      <div>
        <span>Обработан успешно</span>
        <span>Не удалось обработать</span>
      </div>
      <Button></Button>
    </div>
  );
};


