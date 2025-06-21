import { Link } from 'react-router-dom';
import cls from './NavLink.module.css';

interface NavLinkProps {
  to: string;
  icon: string;
  text: string;
  isActive?: boolean;
  alt?: string;
}

export const NavLink = ({ to, icon, text, isActive, alt }: NavLinkProps) => {
  return (
    <Link to={to} className={`${cls.link} ${isActive ? cls.active : ''}`}>
      <img src={icon} className={cls.icon} alt={alt} />
      <p>{text}</p>
    </Link>
  );
};
