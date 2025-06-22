import { Link, useLocation } from 'react-router-dom';
import cls from './NavLink.module.css';

interface NavLinkProps {
  to: string;
  icon: string;
  text: string;
  alt?: string;
}

export const NavLink = ({ to, icon, text, alt }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className={`${cls.link} ${isActive ? cls.active : ''}`}>
      <img src={icon} className={cls.icon} alt={alt} />
      <p>{text}</p>
    </Link>
  );
};
