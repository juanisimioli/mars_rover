import { useEffect, useContext } from "react";
import { Context } from "../../store/Store";
import GridImages from "../GridImages/GridImages";
import { getManifests, updatePhotos } from "../helper/apiCalls";
import { checkFiltersOnLocalStorage } from "../helper/localStorage";
import Filters from "../Filters/Filters";
import { CircularProgress } from "@mui/material";
import { Container } from "./Container";
import { LoaderContainer } from "./LoaderContainer";

const NasaApp = () => {
  const [state, dispatch] = useContext(Context);
  const { isLoadingApp } = state;

  useEffect(() => {
    getManifests(dispatch);
  }, []);

  useEffect(() => {
    updatePhotos(state, dispatch);
  }, [state.filters]);

  useEffect(() => {
    checkFiltersOnLocalStorage(state, dispatch);
  }, [state.manifests]);

  useEffect(() => {
    updatePhotos(state, dispatch);
  }, [state.pagination.currentPage]);

  return (
    <Container>
      {isLoadingApp ? (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      ) : (
        <>
          <Filters />
          <GridImages />
        </>
      )}
    </Container>
  );
};

export default NasaApp;
