import type { HistoryItem } from '../../../store/useHistoryStore';
import { HistoryItemCard } from '../HistoryItem/HistoryItem';
import cls from './HistoryList.module.css';

interface HistoryListProps {
  items: HistoryItem[];
  onRemove?: (id: string) => void;
}

export const HistoryList = ({ items, onRemove }: HistoryListProps) => {
  return (
    <div className={cls.HistoryList}>
      {items.map((item) => (
        <HistoryItemCard key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};
