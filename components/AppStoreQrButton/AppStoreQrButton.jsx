import Image from 'next/image';

const AppStoreQrButton = () => {
  return (
    <div>
      <button>
        <Image src='appstorewithqr.svg' alt='appstore_button' width={290} height={72}/>
      </button>
    </div>
  );
};

export default AppStoreQrButton;