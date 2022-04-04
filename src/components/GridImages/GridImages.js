import { Container } from "./Container/Container";
import Image from "../Image/Image";
import { useContext } from "react";
import { Context } from "../../store/Store";
import ScrollableArea from "./ScrollableArea";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

const GridImages = () => {
  const [state] = useContext(Context);
  const { photos } = state;

  const {
    filters: { rover: roverSelected },
  } = state;

  return (
    <>
      <ErrorMessage />
      {roverSelected && (
        <ScrollableArea>
          <Container>
            {photos.map(({ id, img_src }) => (
              <Image key={id} id={id} source={img_src} />
            ))}
          </Container>
        </ScrollableArea>
      )}
    </>
  );
};

export default GridImages;
