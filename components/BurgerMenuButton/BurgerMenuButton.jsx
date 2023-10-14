import Image from "next/image";

const BurgerMenuButton = () => {
  return (
    <div>
      <button className='p-[8px] gap-[8px] rounded-[999px]'>
        <Image
          src='/group.svg'
          alt='group_svg'
          width={15}
          height={13.333}
          className='md:w-[24px] md:h-[24px] xl:hidden'
        />
      </button>
    </div>
  );
};

export default BurgerMenuButton;