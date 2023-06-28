import React, { Fragment, MouseEventHandler } from "react";
import Button from "../Button/Button";
import { ModalProps } from "./ModalProps";
import { StyledModal, StyledBackground } from "./ModalStyles";

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <Fragment>
      {isOpen && (
        <StyledBackground>
          <StyledModal>
            {children}
            {
              <Button
                onClick={onClose}
                label="Close"
                style={{ size: "medium" }}
              ></Button>
            }
          </StyledModal>
        </StyledBackground>
      )}
    </Fragment>
  );
};

export default Modal;
