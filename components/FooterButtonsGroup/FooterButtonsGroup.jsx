import React from 'react';

const FooterButtonsGroup = () => {
  return (
    <div className='flex items-start content-start self-stretch flex-wrap'>
        <button className='flex font-semibold font-unbounded py-[7px] px-[8px] justify-center items-center gap-[8px]'>
          <label>Місто</label>
        </button>
        <button className='flex font-semibold font-unbounded py-[7px] px-[8px] justify-center items-center gap-[8px]'>
          <label>Артист</label>
        </button>
        <button className='flex font-semibold font-unbounded py-[7px] px-[8px] justify-center items-center gap-[8px]'>
          <label>Для бізнесів</label>
        </button>
        <button className='flex font-semibold font-unbounded py-[7px] px-[8px] justify-center items-center gap-[8px]'>
          <label>Про нас</label>
        </button>
        <button className='flex font-semibold font-unbounded py-[7px] px-[8px] justify-center items-center gap-[8px]'>
          <label>Контакти</label>
        </button>
    </div>
  );
};

export default FooterButtonsGroup;