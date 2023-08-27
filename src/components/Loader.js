import React from "react";
import { Audio } from 'react-loader-spinner';
import '../index.css'

const Loader = () => {
  return (
    <div className="loader_spinner"> 
      <Audio
  height="70"
  width="70"
  radius="9"
  color="lavender"
  ariaLabel="loading"
  wrapperStyle
/>
    </div>
  )
};

export default Loader;
