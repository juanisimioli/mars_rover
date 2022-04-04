import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Context } from "../../store/Store";
import { UPDATE_CURRENT_PAGE } from "../../reducer/constants";

const ScrollableArea = ({ children }) => {
  const [state, dispatch] = useContext(Context);
  const { isLoadingPhotos } = state;

  const {
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
    <InfiniteScroll
      dataLength={state.photos.length}
      next={handleLoadMore}
      hasMore={hasMorePhotos}
      loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
      endMessage={
        !isLoadingPhotos && (
          <p style={{ textAlign: "center" }}>
            <b>You have seen it all!</b>
          </p>
        )
      }
    >
      {children}
    </InfiniteScroll>
  );
};

export default ScrollableArea;
