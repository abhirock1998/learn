import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/home";
import UsersPage from "./pages/users";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <main className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <ToastContainer />
    </main>
  );
}

export default App;
