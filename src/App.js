import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
import { Home, Browse, Signin, Signup } from "./pages";

function App() {
  // const user = { name: "John" };
  const { user } = useAuthListener();
  // console.log(user.displayName);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        exact
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
    </Router>
  );
}

export default App;
