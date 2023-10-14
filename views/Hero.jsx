import AppStoreButton from "<app>/components/AppStoreButton/AppStoreButton";
import GooglePlayButton from "<app>/components/GooglePlayButton/GooglePlayButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='flex pt-[40px] px-[24px] gap-[16px] flex-col justify-end items-start self-stretch'>
      <h1 className='self-stretch text-[#202227] font-unbounded text-[32px] not-italic	font-medium	leading-[36px] md:text-[48px] md:leading-[52px] xl:text-[96px] xl:leading-[108px] xxl:text-[124px] xxl:leading-[132px]'>Твій кишеньковий мольфар мистецтва</h1>
      <div className='flex flex-col gap-[24px]'>
        <h2 className='text-[#202227] text-[18px] font-manrope not-italic font-bold leading-[24px]'>Слідкуй за розкладом в зручному додатку</h2>
        <div className='flex flex-col gap-[8px] md:flex-row'>
          <GooglePlayButton/>
          <AppStoreButton/>
        </div>
      </div>
      <Image src='/heroImg.svg' alt='hero_png' width={349.105} height={379.688} className='md:w-[700px] md:h-[760px] xl:w-[737px] xl:h-[801px] xl:absolute xl:right-[130px] xl:top-[230px] xxl:w-[871px] xxl:h-[947px]' />
    </div>
  );
};

export default Hero;