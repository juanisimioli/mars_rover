import { Container, Img, TitleId } from "./Container/Container";

const Image = ({ id, source }) => {
  return (
    <Container>
      <a target="_blank" rel="noreferrer" href={source}>
        <Img alt={`image_${id}`} src={source} />
        <TitleId>{`Id ${id}`}</TitleId>
      </a>
    </Container>
  );
};

export default Image;
