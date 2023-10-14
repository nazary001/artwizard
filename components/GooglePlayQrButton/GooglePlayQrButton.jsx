import React from 'react';
import Image from 'next/image';

const GooglePlayQrButton = () => {
  return (
    <div>
      <button>
        <Image src='/googlewithqr.svg' alt='google_button_svg' width={312} height={72}/>
      </button>
    </div>
  );
};

export default GooglePlayQrButton;