import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import News from "./pages/News";
import Jobs from "./pages/Jobs";
import Files from "./pages/Files";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wrapper */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/files" element={<Files />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
