import Image from "next/image";

const GooglePlayButton = () => {
  return (
    <div>
      <button>
        <Image src='/googlePlay.svg' alt='google_png' width={145} height={49.2}/>
      </button>
    </div>
  );
};

export default GooglePlayButton;