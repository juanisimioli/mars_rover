import { useContext } from "react";
import { Context } from "../../store/Store";
import { ContainerMessage } from "./ContainerMessage";

const ErrorMessage = () => {
  const [state, ] = useContext(Context);
  const { errorMessage } = state;

  return errorMessage ? (
    <ContainerMessage>{errorMessage}</ContainerMessage>
  ) : null;
};

export default ErrorMessage;
