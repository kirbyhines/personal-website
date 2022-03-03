/** @format */

import { useRouter } from 'next/router';
import React from 'react';

function Logo() {
  const router = useRouter();
  return (
    <div>
      <img
        src="/icons/logo.jpg"
        alt=" "
        className="h-16 absolute top-3 left-5 cursor-pointer"
        onClick={() => router.push('/')}
      />
    </div>
  );
}

export default Logo;
