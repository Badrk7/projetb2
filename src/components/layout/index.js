import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children, title = "Anonymous", content = "Web App" }) => {
  return (
    <>
      <Head>
        <title>{"Anonymous | Web App"}</title>
        <meta name="description" content={"Web App"} />
      </Head>
      <Header />
      <main className="bg_gray">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
