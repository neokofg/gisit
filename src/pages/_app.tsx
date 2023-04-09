import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import store from "@/store";
import { Provider } from "react-redux";
import AuthModal from "../components/auth";
import client from "../graphql";
import MainLayout from "@/layouts";
import AuthLayout from "@/layouts/auth";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AuthLayout>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </AuthLayout>
      </Provider>
    </ApolloProvider>
  );
}
