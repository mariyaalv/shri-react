import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AnalysisData } from '../api/types/types';

interface HistoryItem {
  id: string;
  timestamp: string;
  fileName: string;
  date: AnalysisData | null;
  status: 'success' | 'error';
  error?: string;
}

interface HistoryState {
  items: HistoryItem[];
  addToHistory: (item: HistoryItem) => void;
  removeFromHistory: (id: string) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      items: [],
      addToHistory: (item) =>
        set((state) => ({ items: [item, ...state.items] })),
      removeFromHistory: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearHistory: () => set({ items: [] }),
    }),
    {
      name: 'history-store',
    }
  )
);
