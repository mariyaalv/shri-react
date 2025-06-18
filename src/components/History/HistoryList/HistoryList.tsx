import { HistoryItem } from '../HistoryItem/HistoryItem';
import cls from './HistoryList.module.css';

interface HistoryListProps {
  items: any[];
}

export const HistoryList = ({ items }: HistoryListProps) => {
  return (
    <div className={cls.HistoryList}>
      {items.map((item, index) => (
        <HistoryItem key={index} {...item} />
      ))}
    </div>
  );
};
