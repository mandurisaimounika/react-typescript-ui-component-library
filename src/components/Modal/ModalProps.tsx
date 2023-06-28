import { MouseEventHandler } from "react";

export interface ModalProps {
  children?: string;
  isOpen?: boolean;
  onClose?: MouseEventHandler<HTMLButtonElement>;
}
