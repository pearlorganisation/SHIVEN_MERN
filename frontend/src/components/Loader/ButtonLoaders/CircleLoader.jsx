import React from "react";
import { Circles } from "react-loader-spinner";

const CircleLoader = () => {
  return (
    <div>
      <Circles
        height="30"
        width="30"
        color="white"
        ariaLabel="circles-loading"
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default CircleLoader;
