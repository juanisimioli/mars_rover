import { Container } from "./Container/Container";
import Image from "../Image/Image";
import { useContext } from "react";
import { Context } from "../../store/Store";
import CircularProgress from "@mui/material/CircularProgress";
import { UPDATE_CURRENT_PAGE } from "../../reducer/constants";

const GridImages = () => {
  const [state, dispatch] = useContext(Context);
  const { photos } = state;

  const handleLoadMore = () => {
    if (
      state.photos.length % 25 === 0 &&
      state.photos.length < state.currentRover.totalPhotos
    ) {
      dispatch({
        type: UPDATE_CURRENT_PAGE,
      });
    }
  };

  return (
    <>
      <div>{`PAGE: ${state.currentRover.currentPage}`}</div>
      <div>{`CURRENT PHOTOS: ${state.photos.length}`}</div>
      <div>{`TOTAL PHOTOS: ${state.currentRover.totalPhotos}`}</div>
      <button onClick={handleLoadMore}>+</button>
      <Container>
        {state.isLoadingPhotos ? (
          <CircularProgress />
        ) : (
          photos.map(({ id, img_src }) => (
            <Image key={id} id={id} source={img_src} />
          ))
        )}
      </Container>
    </>
  );
};

export default GridImages;
