import React from 'react';
import bgImage from './bg.png';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>"WELCOME po"</h1>
      <p>Kung sino ka man.</p>
    </div>
  );
}