import React from "react";
import CustomBox from "./CustomBox";
import loader from "../assets/images/loader.svg";

const Loader = () => {
  return (
    <CustomBox>
      <img src={loader} alt="loader" width="250px" />
    </CustomBox>
  );
};

export default Loader;
