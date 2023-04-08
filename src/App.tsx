import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes } from "react-router-dom";
import MainPage from "@/main/pages/MainPage";
import HomePage from "./Home/pages/HomePage";
import LoginPage from "./login/pages/LoginPage";
import WishPage from "./wish/pages/WishPage";
import ProfilePage from "./profile/pages/ProfilePage";
import WishNewPage from "./wish/pages/WishNewPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/wish/new" element={<WishNewPage />} />
        <Route path="/wish/:wishId" element={<WishPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
