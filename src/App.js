import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
