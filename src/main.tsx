import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

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
