import { LogoBlock } from './LogoBlock';
import cls from './Header.module.css';
import { Navbar } from './Navbar/Navbar';

export const Header = () => {
  return (
    <header className={cls.Header}>
      <LogoBlock />
      <Navbar />
    </header>
  );
};
