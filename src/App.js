import NasaApp from "./components/NasaApp/NasaApp";
import FormStore from "./store/Store";

function App() {
  return (
    <div className="App">
      <FormStore>
        <NasaApp />
      </FormStore>
    </div>
  );
}

export default App;
