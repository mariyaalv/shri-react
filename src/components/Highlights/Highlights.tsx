import type { FC } from 'react';
import type { AnalysisData } from '../../api/types/types';
import cls from './Highlights.module.css';
import { Row, type HighlightItem } from './Row/Row';
import { useFileStore } from '../../store';

const HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'total_spend_galactic',
    label: 'общие расходы в галактических кредитах',
    format: 'number',
  },
  {
    id: 'less_spent_civ',
    label: 'цивилизация с минимальными расходами',
    format: 'default',
  },
  {
    id: 'rows_affected',
    label: 'количество обработанных записей',
    format: 'number',
  },
  {
    id: 'big_spent_at',
    label: 'день года с максимальными расходами',
    format: 'dayOfYear',
  },
  {
    id: 'less_spent_at',
    label: 'день года с минимальными расходами',
    format: 'dayOfYear',
  },
  {
    id: 'big_spent_value',
    label: 'максимальная сумма расходов за день',
    format: 'number',
  },
  {
    id: 'big_spent_civ',
    label: 'цивилизация с максимальными расходами',
    format: 'default',
  },
  {
    id: 'average_spend_galactic',
    label: 'средние расходы в галактических кредитах',
    format: 'number',
  },
];

interface HighlightsProps {
  data: AnalysisData;
}

export const Highlights: FC<HighlightsProps> = ({data}) => {
  const { status } = useFileStore();
  
  return (
    <div className={cls.Highlights}>
      {(status === 'parsing' || status === 'done') ? (
        <Row analysisData={HIGHLIGHTS} data={data} />
      ) : (
        <p className={cls.paragraph}>
          Здесь
          <br />
          появятся хайлайты
        </p>
      )}
    </div>
  );
};
