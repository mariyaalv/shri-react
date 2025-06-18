import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
}

export const Modal = ({isOpen}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div></div>,
    document.body
  )
}