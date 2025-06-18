import { HistoryList } from '../../components/History/HistoryList/HistoryList';
import cls from './HistoryPage.module.css';

interface HistoryPageProps {
  items: any[];
}

export const HistoryPage = ({ items }: HistoryPageProps) => {
  // const { history, loadHistory } = useHistoryStore();

  // useEffect(() => {
  //   loadHistory();
  // }, [loadHistory]);

  return (
    <div className={cls.HistoryPage}>
      {Boolean(items.length) && <HistoryList items={items} />}
    </div>
  );
};
