import type { WithErrors } from "../../store/useReportStore";

export type AnalysisData = {
  total_spend_galactic: number;
  average_spend_galactic: number;
  rows_affected: number;
  big_spent_at?: number;
  big_spent_civ?: string;
  big_spent_value?: number;
  less_spent_at?: number;
  less_spent_civ?: string;
  less_spent_value?: number;
};

export type GenerateData = {
  size: number;
  withErrors?: WithErrors;
  maxSpend?: string;
};