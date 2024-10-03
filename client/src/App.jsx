import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import HomePage from "./pages/home";
import CardsPage from "./pages/cards";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="h-screen">
      <Routes>
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* {isLoading && <ScreenLoader />} */}
      <ToastContainer />
    </main>
  );
}

export default App;
