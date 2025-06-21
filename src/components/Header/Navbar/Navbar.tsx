import cls from './Navbar.module.css'
import UploaderIcon from '../../../assets/icons/iconUploader.svg'
import GeneratorIcon from '../../../assets/icons/iconGenerator.svg'
import HistoryIcon from '../../../assets/icons/iconHistory.svg'
import { NavLink } from './NavLink';

export const Navbar = () => {
  return (
    <nav className={cls.Navbar}>
      <NavLink to="/" text="CSV Аналитик" icon={UploaderIcon} />
      <NavLink to="/generate" text="CSV Генератор" icon={GeneratorIcon} />
      <NavLink to="/history" text="История" icon={HistoryIcon} />
    </nav>
  );
};