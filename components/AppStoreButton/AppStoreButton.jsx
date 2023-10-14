import Image from "next/image";

const AppStoreButton = () => {
  return (
    <div>
      <button>
        <Image src='/appStore.svg' alt='apple_svg' width={145} height={49.2}/>
      </button>
    </div>
  );
};

export default AppStoreButton;