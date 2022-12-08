import NextApp from "next/app";

import { SiteContext, useSiteContext } from "hooks/use-site";
import { SearchProvider } from "hooks/use-search";

import { getSiteMetadata } from "lib/site";
import { getRecentPosts } from "lib/posts";
import { getCategories } from "lib/categories";
import NextNProgress from "nextjs-progressbar";
import { getAllMenus } from "lib/menus";

import "styles/globals.scss";
import variables from "styles/_variables.module.scss";

function App({ Component, pageProps = {}, metadata }) {
  const site = useSiteContext({
    metadata,
  });

  return (
    <SiteContext.Provider value={site}>
      <SearchProvider>
        <NextNProgress height={4} color={variables.progressbarColor} />
        <Component {...pageProps} />
      </SearchProvider>
    </SiteContext.Provider>
  );
}

App.getInitialProps = async function (appContext) {
  const appProps = await NextApp.getInitialProps(appContext);
  const metadata = await getSiteMetadata();

  return {
    ...appProps,
    metadata,
  };
};

export default App;
