import type { AnalysisData } from '../api/types/types';
import { create } from 'zustand';

export type FileStatus = 'parsing' | 'success' | 'error' | 'done';

interface FileState {
  file?: File;
  data?: AnalysisData;
  status?: FileStatus;
  error?: string;
  setFile: (file?: File) => void;
  setData: (data?: AnalysisData) => void;
  setError: (error?: string) => void;
  setStatus: (status: FileState['status']) => void;
}

export const useFileStore = create<FileState>((set) => ({
  file: undefined,
  data: undefined,
  status: undefined,
  error: undefined,
  setFile: (file) => set({ file }),
  setData: (data) => set({ data }),
  setError: (error) => set({ error }),
  setStatus: (status) => set({ status }),
}));
