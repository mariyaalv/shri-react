import { createPortal } from 'react-dom';
import cls from './Modal.module.css';
import CloseIcon from '../../assets/icons/iconClose.svg';
import { type FC, type MouseEvent, type ReactNode } from 'react';
import { Button } from '../Button';
import classNames from 'classnames';
import { ButtonDefaultTheme } from '../Button/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={classNames(cls.modalOverlay, !isOpen && cls.closed)}
      onClick={handleOverlayClick}
    >
      <div className={cls.modalContainer}>
        <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
        <Button
          theme={ButtonDefaultTheme.CLEAR}
          className={cls.closeButton}
          onClick={onClose}
        >
          <img src={CloseIcon} alt="Закрыть" />
        </Button>
      </div>
    </div>,
    document.body
  );
};
