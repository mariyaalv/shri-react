import { createPortal } from 'react-dom';
import cls from './Modal.module.css';
import CloseIcon from '../../assets/icons/iconClose.svg';
import { type FC, type MouseEvent, type ReactNode } from 'react';
import { Button } from '../Button';
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
    <div className={cls.modalOverlay} onClick={handleOverlayClick}>
      <Button
        theme={ButtonDefaultTheme.CLEAR}
        className={cls.closeButton}
        onClick={onClose}
      >
        <img src={CloseIcon} alt="Закрыть" />
      </Button>
      <div className={cls.modalContainer} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};
