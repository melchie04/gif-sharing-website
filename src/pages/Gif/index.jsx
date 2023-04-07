import React from "react";
import { useGifContext } from "../../context/ContextProvider";
import CustomBox from "../../components/CustomBox";
import GifContainer from "./GifContainer";
import GifButtons from "./GifButtons";

const index = () => {
  const { selectedGif } = useGifContext();

  return (
    <>
      <CustomBox>
        {selectedGif.id ? (
          <>
            <GifContainer {...selectedGif} GifContainer={selectedGif} />
            <GifButtons selectedGif={selectedGif} />
          </>
        ) : null}
      </CustomBox>
    </>
  );
};

export default index;
