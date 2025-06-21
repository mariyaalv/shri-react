import { Loader } from '../../Loader/Loader';
import {
  Button,
  ButtonDefaultTheme,
  ButtonUploadTheme,
} from '../../Button/Button';
import { Tooltip } from '../../Tooltip/Tooltip';
import type { ReactNode } from 'react';
import type { FileStatus } from '../../../store/useFileStore';
import ClearIcon from '../../../assets/icons/iconClear.svg';
import cls from './renderUpload.module.css';

export const renderUploadButton = (
  status?: FileStatus,
  file?: File,
  onClick?: () => void,
  handleClear?: () => void
): ReactNode => {
  if (status === 'success') {
    return (
      <>
        <div className={cls.uploadSuccessContainer}>
          <Button theme={ButtonUploadTheme.PROCESS} mode="upload">
            <span className={cls.uploadButtonText}>
              {file?.name || 'Ваш файл'}
            </span> 
          </Button>
          <Button
            theme={ButtonDefaultTheme.CLEAR}
            onClick={handleClear}
            className={cls.btn}
          >
            <img src={ClearIcon} alt={'Очистить'} />
          </Button>
        </div>
        <Tooltip>файл загружен!</Tooltip>
      </>
    );
  }

  if (status === 'error') {
    return (
      <>
        <div className={cls.uploadErrorContainer}>
          <Button theme={ButtonUploadTheme.ERROR} mode="upload">
            {file?.name}
          </Button>
          <Button
            theme={ButtonDefaultTheme.CLEAR}
            onClick={handleClear}
            className={cls.btn}
          >
            <img src={ClearIcon} alt={'Очистить'} />
          </Button>
        </div>
        <Tooltip error>упс, не то...</Tooltip>
      </>
    );
  }

  if (status === 'parsing') {
    return (
      <>
        <Button theme={ButtonUploadTheme.PARSING} mode="upload">
          <Loader />
        </Button>
        <Tooltip>идёт парсинг файла</Tooltip>
      </>
    );
  }

  if (status === 'done') {
    return (
      <>
        <div className={cls.uploadDoneContainer}>
          <Button theme={ButtonUploadTheme.DONE} mode="upload">
            {file?.name || 'Ваш файл'}
          </Button>
          <Button
            theme={ButtonDefaultTheme.CLEAR}
            onClick={handleClear}
            className={cls.btn}
          >
            <img src={ClearIcon} alt={'Очистить'} />
          </Button>
        </div>
        <Tooltip>готово!</Tooltip>
      </>
    );
  }

  return (
    <>
      <Button theme={ButtonUploadTheme.ACTIVE} mode="upload" onClick={onClick}>
        Загрузить файл
      </Button>
      <Tooltip>или перетащите сюда</Tooltip>
    </>
  );
};
