import { AppRegistry } from "react-native";
import App from "./App";
import { Provider } from "redux";
import store from "./store";

AppRegistry.registerComponent("SafeRoute", () => (
  <Provider store={store}>
    <App />
  </Provider>
));
