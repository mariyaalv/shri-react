import { create } from 'zustand';

export type WithErrors = 'on' | 'off'

export type ReportStatus = 'success' | 'error' | 'loading';

interface ReportState {
  size: number;
  withErrors?: WithErrors;
  maxSpend?: string;
  status?: ReportStatus;
  error?: string;
  setSize: (size: number) => void;
  setWithErrors: (withErrors: WithErrors) => void;
  setMaxSpend: (maxSpend: string) => void;
  setError: (error?: string) => void;
  setStatus: (status: ReportState['status']) => void;
  reset: () => void;
}

export const useReportStore = create<ReportState>((set) => ({
  size: 0.01,
  withErrors: 'off',
  maxSpend: '1000',
  status: undefined,
  error: undefined,
  setSize: (size) => set({ size }),
  setWithErrors: (withErrors) => set({ withErrors }),
  setMaxSpend: (maxSpend) => set({ maxSpend }),
  setError: (error) => set({ error }),
  setStatus: (status) => set({ status }),
  reset: () =>
    set({
      size: 0.01,
      withErrors: 'off',
      maxSpend: '1000',
      status: undefined,
      error: undefined,
    }),
}));
