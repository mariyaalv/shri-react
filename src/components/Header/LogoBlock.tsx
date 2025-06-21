
import Logo from '../../assets/icons/iconLogo.svg'
import cls from './LogoBlock.module.css'

export const LogoBlock = () => {
  return (
    <div className={cls.LogoBlock}>
      <img src={Logo} alt="Логотип" />
      <p>Межгалактическая аналитика</p>
    </div>
  );
};