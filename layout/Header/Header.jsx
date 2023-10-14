import BurgerMenuButton from "<app>/components/BurgerMenuButton/BurgerMenuButton";
import Logo from "<app>/components/Logo/Logo";
import MobileAppButton from "<app>/components/MobileAppButton/MobileAppButton";
import NavBar from "<app>/components/NavBar/NavBar";
import Image from "next/image";

const Header = () => {
  return (
    <header className='flex p-[16px] justify-between items-center self-stretch'>
      <Logo/>
      <div className='flex items-center gap-[8px]'>
        <NavBar/>
        <MobileAppButton/>
        <BurgerMenuButton/>
      </div>
    </header>
  );
};

export default Header;