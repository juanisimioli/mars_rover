import { Container } from "./Container/Container";
import Image from "../Image/Image"
import { useContext } from "react";
import { Context } from "../../store/Store";


const GridImages = () => {
  const [state, dispatch] = useContext(Context);
  const {photos} = state;

  return (
    <Container>
      {photos.map(({id, img_src}) => (
        <Image key={id} id={id} source={img_src} />
      ))}
    </Container>
  );
};

export default GridImages;
