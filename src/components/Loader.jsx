 import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <TailSpin
        height={50}
        width={50}
        color="#4fa94d"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
