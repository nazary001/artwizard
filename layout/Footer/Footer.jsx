import AppStoreQrButton from "<app>/components/AppStoreQrButton/AppStoreQrButton";
import FooterButtonsGroup from "<app>/components/FooterButtonsGroup/FooterButtonsGroup";
import GooglePlayQrButton from "<app>/components/GooglePlayQrButton/GooglePlayQrButton";

const Footer = () => {
  return (
    <footer className='flex flex-col p-[16px] items-start gap-[24px] xl:pt-[600px]'>
      <div className='md:flex md:w-[100%] md:justify-between xl:pr-10'>
        <p className='text-base font-medium leading-8 text-[#4D525C]'>© ArtWizard 2023</p>
        <FooterButtonsGroup/>
      </div>
      <div className='flex flex-col gap-[12px] md:flex-row xl:w-[100%] xl:justify-end xl:pr-10'>
        <GooglePlayQrButton/>
        <AppStoreQrButton/>
      </div>
    </footer>
  );
};

export default Footer;