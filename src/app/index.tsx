import GoogleFontLoader from "react-google-font-loader";
import { Provider } from "react-redux";

import Routes from "./routes";
import store from "store";
import './styles.css'

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GoogleFontLoader
        fonts={[
          {
            font: "Open Sans",
            weights: [300, 400, 800, 900],
          }
        ]}
      />
    </Provider>
  );
}

export default App;
