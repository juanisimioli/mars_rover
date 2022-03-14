import { Container } from "./Container/Container";

const Image = ({ id, source }) => {
  return (
    <a target="_blank" rel="noreferrer" href={source}>
      <Container alt={`image_${id}`} loading="lazy" source={source} />
    </a>
  );
};

export default Image;
