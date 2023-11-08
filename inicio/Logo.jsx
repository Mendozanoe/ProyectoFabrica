import React from 'react';
import vdeo from "../src/assets/logoVideo.mp4";

const Logo = () => {
  return (
    <div className='logol-oficial'>
      <video
        autoPlay
        loop
        muted

      >
        <source src={vdeo} type="video/mp4" />
        <h1>Fabrica de Ideas</h1>

      </video>
      <h1 className='marca'>3D FABRICA DE IDEAS</h1>
    </div>

  );
}

export default Logo;
