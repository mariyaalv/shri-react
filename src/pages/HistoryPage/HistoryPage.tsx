import type { FC } from 'react';
import cls from './HistoryPage.module.css';
import { useHistoryStore } from '../../store/useHistoryStore';
import { HistoryList } from '../../components/History/HistoryList/HistoryList';
import { Button } from '../../components/Button';

export const HistoryPage: FC = () => {
  const items = useHistoryStore((state) => state?.items || []);

  return (
    <main className={cls.HistoryPage}>
      {items.length > 0 && <HistoryList items={items} />}
      <Button></Button>
    </main>
  );
};
