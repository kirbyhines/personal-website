/** @format */

import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

function Logo() {
  const router = useRouter();
  return (
    <div className="absolute top-3 left-5 cursor-pointer">
      <Image
        width={50}
        height={50}
        src="/icons/logo.jpg"
        alt=" "
        onClick={() => router.push('/')}
      />
    </div>
  );
}

export default Logo;
