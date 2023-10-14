

const MobileAppButton = () => {

  return (
    <div>
      <button className='flex py-[7px] px-[20px] justify-center items-center font-unbounded gap-[8px] rounded-[999px] border-2 border-solid border-[#2A2D33] bg-[#2A2D33] shadow-custom'>
        <label className='text-white text-[14px] not-italic font-semibold leading-[22px] tracking-[0.07px] md:hidden'>Додаток</label>
        <label className='hidden text-white text-[14px] not-italic font-semibold leading-[22px] tracking-[0.07px] md:block'>У додатку краще!</label>
      </button>
    </div>
  );
};

export default MobileAppButton;