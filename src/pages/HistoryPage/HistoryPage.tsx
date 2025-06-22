import type { FC } from 'react';
import cls from './HistoryPage.module.css';
import { useHistoryStore } from '../../store/useHistoryStore';
import { HistoryList } from '../../components/History/HistoryList/HistoryList';
import { Button } from '../../components/Button';
import { ButtonDefaultTheme } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const HistoryPage: FC = () => {
  const navigate = useNavigate();
  const items = useHistoryStore((state) => state?.items || []);
  const removeFromHistory = useHistoryStore((state) => state.removeFromHistory);
  const clearHistory = useHistoryStore((state) => state.clearHistory);

  return (
    <main className={cls.HistoryPage}>
      {items.length > 0 && (
        <HistoryList items={items} onRemove={removeFromHistory} />
      )}
      <div className={cls.btns}>
        <Button onClick={() => navigate('/generate')} className={cls.generate}>
          Сгенерировать больше
        </Button>
        {items.length > 0 && (
          <Button
            onClick={() => clearHistory()}
            theme={ButtonDefaultTheme.CLEAR}
          >
            Очистить все
          </Button>
        )}
      </div>
    </main>
  );
};
