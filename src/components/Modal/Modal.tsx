import { createPortal } from 'react-dom';
import cls from './Modal.module.css';
import { type FC, type MouseEvent, type ReactNode } from 'react';

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
      <div className={cls.modalContent}>{children}</div>
    </div>,
    document.body
  );
};
