import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import store from "@/store";
import { Provider } from "react-redux";
import AuthModal from "../components/auth";
import client from "../graphql";
import MainLayout from "@/layouts";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </ApolloProvider>
  );
}
