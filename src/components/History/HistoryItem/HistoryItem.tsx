import cls from './HistoryList.module.css';

interface HistoryItemProps {
  filename: string;
  date: string;
}

export const HistoryItem = ({ filename, date }: HistoryItemProps) => {
  return (
    <div className={cls.HistoryItem}>
      <h3>{filename}</h3>
      <p>{date}</p>
      <div>
        <span>Обработан успешно</span>
        <span>Не удалось обработать</span>
      </div>
    </div>
  );
};
