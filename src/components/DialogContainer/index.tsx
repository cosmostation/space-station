import './DialogContainer.css';

import { Dialog } from '@headlessui/react';
import useTheme from 'hooks/use-theme';
import React, { useCallback } from 'react';

type DialogContainerProps = {
  children?: JSX.Element | JSX.Element[] | string;
  open: boolean;
  close: () => void;
}

const DialogContainer: React.FC<DialogContainerProps> = ({ open, children, close }) => {
  const theme = useTheme();

  const onClose = useCallback(() => {
    close();
  }, [close]);

  return (
    <Dialog open={open} onClose={onClose} className={theme}>
      <Dialog.Overlay className="dialog-overlay">
        {children}
      </Dialog.Overlay>
    </Dialog>
  );
};

export default DialogContainer;
