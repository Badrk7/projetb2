import Footer from "../footer";
import Header from "../header";
import config from "../../config/config.json";
import { plainify } from "../../lib/utils/textConverter";

import Head from "next/head";
import { useRouter } from "next/router";

const Base = ({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        </title>

        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

        {noindex && <meta name="robots" content="noindex,nofollow" />}

        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />

        <meta name="author" content={meta_author} />

        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        <meta
          property="og:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${router.asPath.replace("/", "")}`}
        />

        <meta
          name="twitter:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />

        <meta
          name="twitter:description"
          content={plainify(description ? description : meta_description)}
        />

        <meta
          property="og:image"
          content={`${base_url}${image ? image : meta_image}`}
        />

        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Base;
