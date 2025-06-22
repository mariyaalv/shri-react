import type { ReactNode } from 'react';
import type { ReportStatus } from '../../../store/useReportStore';
import { Button } from '../../Button';
import cls from './renderGenerate.module.css';
import { Loader } from '../../Loader/Loader';
import { ButtonDefaultTheme, ButtonUploadTheme } from '../../Button/Button';
import { Tooltip } from '../../Tooltip/Tooltip';
import ClearIcon from '../../../assets/icons/iconClear.svg';

export const renderGenerate = (
  status?: ReportStatus,
  onClick?: () => void,
  handleClear?: () => void
): ReactNode => {
  if (status === 'loading') {
    return (
      <>
        <Button
          className={cls.btn}
          theme={ButtonUploadTheme.PARSING}
          mode="upload"
        >
          <Loader />
        </Button>
        <Tooltip>идёт процесс генерации</Tooltip>
      </>
    );
  }
  if (status === 'success') {
    return (
      <>
        <div className={cls.uploadSuccessContainer}>
          <Button theme={ButtonUploadTheme.DONE} mode="upload">
            <span className={cls.uploadButtonText}>Done!</span>
          </Button>
          <Button
            theme={ButtonDefaultTheme.CLEAR}
            onClick={handleClear}
            className={cls.clear}
          >
            <img src={ClearIcon} alt={'Очистить'} />
          </Button>
        </div>
        <Tooltip>файл сгенерирован!</Tooltip>
      </>
    );
  }
  if (status === 'error') {
    return (
      <>
        <div className={cls.uploadErrorContainer}>
          <Button
            className={cls.btn}
            theme={ButtonUploadTheme.ERROR}
            mode="upload"
          >
            <span className={cls.uploadButtonText}>Ошибка</span>
          </Button>
          <Button
            theme={ButtonDefaultTheme.CLEAR}
            onClick={handleClear}
            className={cls.clear}
          >
            <img src={ClearIcon} alt={'Очистить'} />
          </Button>
        </div>
        <Tooltip error>упс, не то...</Tooltip>
      </>
    );
  }

  return (
    <>
      <Button onClick={onClick} className={cls.default}>
        Начать генерацию
      </Button>
    </>
  );
};
