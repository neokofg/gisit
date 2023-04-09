import Head from "next/head";
import { useAppSelector } from "@/hooks";
import { Manrope } from "next/font/google";
import type { FC, ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Modal from "@/components/modal/index";
const manrope = Manrope({ subsets: ["cyrillic"] });
type Layout = {
  children: ReactNode;
};
const MainLayout: FC<Layout> = ({ children }) => {
  const modal = useAppSelector((state) => state.modal.active);
  return (
    <>
      <Head>
        <title>ЯПрогноз</title>
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <main
        style={{
          overflow: modal ? "hidden" : "auto",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className={manrope.className}
      >
        <Header></Header>
        <div>{children}</div>
        <Footer></Footer>
      </main>
      <Modal />
    </>
  );
};
export default MainLayout;
