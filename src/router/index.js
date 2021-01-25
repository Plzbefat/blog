import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Head, Home } from "../pages";
function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    let pathname = location.pathname.slice(1);
    document.title = "Plzbecute" + (pathname === "" ? "" : " - " + pathname);
  }, [location]);
}
const App = () => {
  usePageViews();
  return (
    <>
      <Head />
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
