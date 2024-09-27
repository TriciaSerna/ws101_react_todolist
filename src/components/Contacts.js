import React from 'react';
import bg3Image from './bg3.png';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg3Image})`,
        backgroundSize: 'cover',
        height: '92vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>"NO CONTACT"</h1>
      <p>sorry..</p>
    </div>
  );
}