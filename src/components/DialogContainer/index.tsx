import './DialogContainer.css';

import { Dialog } from '@headlessui/react';
import React, { useCallback, useEffect, useState } from 'react';
import themeStore, { ThemeType } from 'stores/theme-store';

type DialogContainerProps = {
  children?: JSX.Element | JSX.Element[] | string;
  open: boolean;
  close: () => void;
}

const DialogContainer: React.FC<DialogContainerProps> = ({ open, children, close }) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeType.Dark);

  useEffect(() => {
    const subscription = themeStore.currentTheme$.subscribe(setTheme);
    return () => subscription.unsubscribe();
  }, []);

  const onClose = useCallback(() => {
    close();
  }, [])

  return (
    <Dialog open={open} onClose={onClose} className={theme}>
      <Dialog.Overlay className="dialog-overlay">
        {children}
      </Dialog.Overlay>
    </Dialog>
  )
}

export default DialogContainer;
