import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainLayouts from "./MainLayouts/MainLayouts";
import Home from "./pages/Home";
import Store from "./pages/Store";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/OnlineStore" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="store" element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
