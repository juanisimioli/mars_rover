import { Container } from "./Container/Container";
import Image from "../Image/Image"
import { useEffect, useState } from "react";
import { generateGetPhotosUrl } from "../helper/getUrls";


const GridImages = () => {

  const [photos, setPhotos] =useState([]);

  useEffect(()=> {
    const params= {
      rover: 'curiosity',
      sol: 1050
    }
    const url = generateGetPhotosUrl(params)
    console.log(url)

  }, [])

  return (
    <Container>
      {photos.map(({id, img_src}) => (
        <Image key={id} id={id} source={img_src} />
      ))}
    </Container>
  );
};

export default GridImages;
