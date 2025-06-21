import type { FC } from 'react';
import type { AnalysisData } from '../../../api/types/types';
import cls from './Row.module.css';
import {
  getFormattedValue,
  type FormatData,
} from '../../../helpers/formatedValue';

export type HighlightItem = {
  id: keyof AnalysisData;
  label: string;
  format: FormatData;
};

interface RowProps {
  analysisData: HighlightItem[];
  data: AnalysisData;
}

export const Row: FC<RowProps> = ({ analysisData, data }) => {
  return (
    <div className={cls.container}>
      {analysisData && analysisData.map((item) => {
        if (!(item.id in data)) return null;
        const value = data[item.id];
        const formattedValue = getFormattedValue(value, item.format);
        return (
          <div key={item.id} className={cls.row}>
            <span className={cls.value}>{formattedValue}</span>
            <span className={cls.label}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
};
