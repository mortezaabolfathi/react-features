import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseDeferredValueTutorial from "./pages/useDeferred-tutorial/index.jsx";
import RouteLits from "./routes/index.js";
import Header from "./layout/index.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route path="*" element={<App />} />
        <Route
          path={RouteLits?.useDeferredValue}
          element={<UseDeferredValueTutorial />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
