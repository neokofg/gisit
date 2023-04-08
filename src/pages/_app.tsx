import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import store from "@/store";
import { Provider } from "react-redux";
import AuthModal from "../components/auth";
import client from "../graphql";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <main>
          <Component {...pageProps} />
        </main>
        <AuthModal />
      </Provider>
    </ApolloProvider>
  );
}
