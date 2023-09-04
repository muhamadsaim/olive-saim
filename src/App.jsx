import React, { Suspense } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import AllRoutes from "./Routes/Routes";
import Loading from "./Components/Common/Loading";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
      <AllRoutes/>
      </Router>
    </Suspense>
  );
};

export default App;
