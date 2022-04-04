import React, { useContext } from "react";
import { Context } from "../../store/Store";

import FilterRover from "./FilterRover/FilterRover";
import FilterDate from "./FilterDate/FilterDate";
import FilterCamera from "./FilterCamera/FilterCamera";
import { Container } from "./Container/Container";
import { Title } from "./Title/Title";

const Filters = () => {
  const [state] = useContext(Context);
  const {
    filters: { rover: roverSelected },
  } = state;

  return (
    <>
      <Container>
        <Title>Rover</Title>
        <FilterRover />
      </Container>

      {roverSelected && (
        <Container>
          <Title>Date</Title>
          <FilterDate />
        </Container>
      )}

      {roverSelected && (
        <Container>
          <Title>Camera</Title>
          <FilterCamera />
        </Container>
      )}
    </>
  );
};

export default Filters;
