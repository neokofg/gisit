import Head from "next/head";
import { useAppSelector } from "@/hooks";
import { Manrope } from "next/font/google";
import type { FC, ReactNode } from "react";
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
        }}
        className={manrope.className}
      >
        {/* <Header></Header> */}
        {children}
        {/* <Footer></Footer> */}
      </main>
      {/* <Modal /> */}
    </>
  );
};
export default MainLayout;
