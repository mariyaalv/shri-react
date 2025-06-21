import cls from './Tooltip.module.css';
import classnames from 'classnames';

interface TooltipProps {
  children: string;
  error?: boolean;
}

export const Tooltip = ({ children, error }: TooltipProps) => {
  return (
    <div className={classnames(cls.Tooltip, { [cls.error]: error })}>
      {children}
    </div>
  );
};
