import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import BaseApp from "./_base_app";
import store from "@/store/store";

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <BaseApp {...props} />
    </Provider>
  );
}
