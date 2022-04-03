import { Container } from "./Container/Container";
import Image from "../Image/Image";
import { useContext } from "react";
import { Context } from "../../store/Store";
import { UPDATE_CURRENT_PAGE } from "../../reducer/constants";

import InfiniteScroll from "react-infinite-scroll-component";

const GridImages = () => {
  const [state, dispatch] = useContext(Context);
  const { photos } = state;

  const {
    filters: { rover: roverSelected },
    pagination: { hasMorePhotos },
  } = state;

  const handleLoadMore = () => {
    if (hasMorePhotos) {
      dispatch({
        type: UPDATE_CURRENT_PAGE,
      });
    }
  };

  return (
    <>
      <div>{`PAGE: ${state.pagination.currentPage}`}</div>
      <div>{`CURRENT PHOTOS: ${state.photos.length}`}</div>
      <div>{`TOTAL PHOTOS: ${state.pagination.totalPhotos}`}</div>
      <button onClick={handleLoadMore}>+</button>
      {roverSelected && (
        <InfiniteScroll
          dataLength={state.photos.length}
          next={handleLoadMore}
          hasMore={hasMorePhotos}
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all!</b>
            </p>
          }
        >
          <Container>
            {photos.map(({ id, img_src }) => (
              <Image key={id} id={id} source={img_src} />
            ))}
          </Container>
        </InfiniteScroll>
      )}
    </>
  );
};

export default GridImages;
