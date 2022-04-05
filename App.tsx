import "react-native-gesture-handler";
import Root from "./navigation/Root";
import { store } from "./state/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
