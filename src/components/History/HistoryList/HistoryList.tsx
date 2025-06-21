import type { HistoryItem } from '../../../store/useHistoryStore';
import { HistoryItemCard } from '../HistoryItem/HistoryItem';
import cls from './HistoryList.module.css';

interface HistoryListProps {
  items: HistoryItem[];
  onDelete?: () => void;
}

export const HistoryList = ({ items }: HistoryListProps) => {
  return (
    <div className={cls.HistoryList}>
      {items.map((item) => (
        <HistoryItemCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};
