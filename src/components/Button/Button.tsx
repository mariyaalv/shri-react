import type { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.css';
import classnames from 'classnames';

export enum ButtonDefaultTheme {
  CLEAR = 'clear',
  DOWNLOAD = 'download',
  UNACTIVE = 'unactive',
  ACTIVE = 'activeDefault',
}

export enum ButtonUploadTheme {
  ERROR = 'error',
  PROCESS = 'process',
  PARSING = 'parsing',
  DONE = 'done',
  ACTIVE = 'activeUpload',
}

type ButtonMode = 'upload' | 'default';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonDefaultTheme | ButtonUploadTheme;
  mode?: ButtonMode;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    theme = ButtonDefaultTheme.ACTIVE,
    mode = 'default',
    disabled,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={classnames(cls.Button, cls[mode], cls[theme], className)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
