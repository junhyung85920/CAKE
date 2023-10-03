import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" exact={true} element={<Auth />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
