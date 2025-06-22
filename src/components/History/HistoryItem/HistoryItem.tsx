import { useState, type FC } from 'react';
import type { HistoryItem } from '../../../store/useHistoryStore';
import { getDateFormatted } from '../../../helpers/formatedValue';
import FileIcon from '../../../assets/icons/iconFile.svg';
import SmileIcon from '../../../assets/icons/iconSmile.svg';
import SadIcon from '../../../assets/icons/iconSadSmile.svg';
import SmileErrorIcon from '../../../assets/icons/iconSmileError.svg';
import SadErrorIcon from '../../../assets/icons/iconSadSmileError.svg';
import TrashIcon from '../../../assets/icons/iconTrash.svg';
import { Button } from '../../Button';
import { ButtonUploadTheme } from '../../Button/Button';
import { Modal } from '../../Modal/Modal';
import cls from './HistoryItem.module.css';
import classNames from 'classnames';
import { Row } from '../../Highlights/Row/Row';
import { HIGHLIGHTS } from '../../Highlights/Highlights';

interface HistoryItemProps {
  item: HistoryItem;
  onRemove?: (id: string) => void;
}

export const HistoryItemCard: FC<HistoryItemProps> = ({ item, onRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (item.status === 'success') {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const date = getDateFormatted(new Date(item.timestamp));
  return (
    <div className={cls.container}>
      <div
        className={classNames(cls.HistoryItem, {
          [cls['HistoryItem--clickable']]: item.status === 'success',
        })}
        onClick={item.status === 'success' ? handleCardClick : undefined}
      >
        <div className={cls.fileName}>
          <img src={FileIcon} className={cls.icon} alt={'файл'} />
          <div className={cls.fileNameText}>
            <h3>{item.fileName}</h3>
          </div>
        </div>
        <p>{date}</p>
        {item.status === 'success' && (
          <>
            <div className={cls.sucess}>
              <span>Обработан успешно</span>
              <img src={SmileIcon} className={cls.icon} alt={'успех'} />
            </div>
            <div className={cls.error}>
              <span className={cls.text}>Не удалось обработать</span>
              <img src={SadIcon} className={cls.icon} alt={'ошибка'} />
            </div>
          </>
        )}
        {item.status === 'error' && (
          <>
            <div className={cls.sucess}>
              <span className={cls.text}>Обработан успешно</span>
              <img src={SmileErrorIcon} className={cls.icon} alt={'успех'} />
            </div>
            <div className={cls.error}>
              <span>Не удалось обработать</span>
              <img src={SadErrorIcon} className={cls.icon} alt={'ошибка'} />
            </div>
          </>
        )}
      </div>
      <Button
        theme={ButtonUploadTheme.ACTIVE}
        onClick={() => onRemove?.(item.id)}
      >
        <img src={TrashIcon} className={cls.icon} alt={'удалить файл'} />
      </Button>
      {isModalOpen && item.date && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className={cls.Highlights}>
            <Row
              analysisData={HIGHLIGHTS}
              data={item.date}
              rowClassName={cls.row}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
