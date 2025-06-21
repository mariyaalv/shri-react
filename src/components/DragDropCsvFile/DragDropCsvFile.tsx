import {
  useRef,
  useState,
  type ChangeEvent,
  type DragEvent,
  type FC,
} from 'react';
import classnames from 'classnames';
import { useFileStore } from '../../store';
import cls from './DragDropCsvFile.module.css';

import { renderUploadButton } from './utils/renderUpload';

export const DragDropCsvFile: FC = () => {
  const { file, status, setError, setFile, setStatus } = useFileStore();
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const processFile = (file: File | undefined) => {
    if (!file) return;

    if (file.type === 'text/csv') {
      setError(undefined);
      setFile(file);
      setStatus('success');
    } else {
      setError('упс, не то...');
      setFile(file);
      setStatus('error');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const handleDrag = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setIsDragOver(true);
    } else if (event.type === 'dragleave') {
      setIsDragOver(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
    const file = event.dataTransfer.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const handleClear = () => {
    setFile(undefined);
    setError(undefined);
    setStatus(undefined);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={cls.CsvUploader}>
      <p className={cls.description}>
        Загрузите <span className={cls.accent}>csv</span> файл и получите
        <span className={cls.accent}> полную информацию</span> о нём за
        сверхнизкое время
      </p>

      <div
        className={classnames(cls.DragDropArea, {
          [cls.dragOver]: isDragOver,
          [cls.success]: status === 'success',
          [cls.error]: status === 'error',
        })}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".csv"
          className={cls.input}
        />
        {renderUploadButton(status, file, handleButtonClick, handleClear)}
      </div>
    </div>
  );
};
