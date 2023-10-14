import Image from "next/image";

const Logo = () => {
  return (
    <div className='flex w-[154.677px] h-[40px] pr-0 justify-center items-center gap-[11.173px] md:w-[232px] md:h-[60px]'>
      <div>
        <Image
          src='/artwizard.png'
          alt='logo_img'
          width={36.16}
          height={40}
          className='md:w-[54px] md:h-[60px]'
          />
      </div>
      <div>
        <Image
          src='/type.svg'
          alt='type_svg'
          width={106.939}
          height={13.333}
          className='md:w-[160px] md:h-[20px]'
        />
      </div>
    </div>
  );
};

export default Logo;