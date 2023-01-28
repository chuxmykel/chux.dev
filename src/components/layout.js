import * as React from "react";

import { ThemeProvider } from "../context/theme.context";
import { Nav } from "./nav";
import { Footer } from "./footer";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="/#"]');
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-75 flex justify-center items-center box-content bg-slate-100 dark:bg-slate-900">
        <div className="w-full md:w-[1140px] min-h-screen">
          <div className="px-2 pt-10 pb-12 font-source-code-pro">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

function somethingForTheHackers() {
  // TODO Fill function with amazing stuff for the nerdy.
  console.log(`
  ========================================================================================
  =  ====  =========  ==  ==============  ====  ================  =====================  =
  =  ====  =========  ==  ==============  ====  ================  =====================  =
  =  ====  =========  ==  ==============  ====  ================  =====================  =
  =  ====  ===   ===  ==  ===   ========  ====  ===   ====   ===  =  ===   ===  =   ===  =
  =        ==  =  ==  ==  ==     =======        ==  =  ==  =  ==    ===  =  ==    =  ==  =
  =  ====  ==     ==  ==  ==  =  =======  ====  =====  ==  =====   ====     ==  =======  =
  =  ====  ==  =====  ==  ==  =  =======  ====  ===    ==  =====    ===  =====  ==========
  =  ====  ==  =  ==  ==  ==  =  =======  ====  ==  =  ==  =  ==  =  ==  =  ==  =======  =
  =  ====  ===   ===  ==  ===   ========  ====  ===    ===   ===  =  ===   ===  =======  =
  ========================================================================================
`);

  console.log(
    "You can find the code for this website on https://github.com/chuxmykel/chux.dev"
  );
}

somethingForTheHackers();
