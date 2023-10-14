import Image from "next/image";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className='hidden xl:flex items-start gap-6 pr-5'>
          <div className='flex gap-2'>
            <li className='text-[#202227] font-unbounded text-[14px] font-semibold leading-[22px] tracking-[0.07px]'>Місто</li>
            <Image src='/arrow.svg' alt='nav_arrow_svg' width={11} height={6.5}/>
          </div>
          <li className='text-[#202227] font-unbounded text-[14px] font-semibold leading-[22px] tracking-[0.07px]'>Артист</li>
          <li className='text-[#202227] font-unbounded text-[14px] font-semibold leading-[22px] tracking-[0.07px]'>Для бізнесів</li>
          <li className='text-[#202227] font-unbounded text-[14px] font-semibold leading-[22px] tracking-[0.07px]'>Про нас</li>
          <li className='text-[#202227] font-unbounded text-[14px] font-semibold leading-[22px] tracking-[0.07px]'>Контакти</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;