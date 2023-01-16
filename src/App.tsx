import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "./context/theme.context";

import { Nav } from "./components/Nav";
import { Home } from "./pages";
import { About } from "./pages/About";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ThankYou } from "./pages/ThankYou";

export function App() {
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center box-content bg-slate-100 dark:bg-slate-900">
        <div className="w-full md:w-[1140px] min-h-screen">
          <div className="px-2 pt-10 pb-12 font-source-code-pro">
            <Router>
              <Nav />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/thank-you">
                  <ThankYou />
                </Route>
                <Route path="*">
                  <NotFoundPage />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
