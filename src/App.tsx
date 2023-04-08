import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Home/pages/HomePage";
import LoginPage from "./login/pages/LoginPage";
import WishPage from "./wish/pages/WishPage";
import ProfilePage from "./profile/pages/ProfilePage";
import WishNewPage from "./wish/pages/WishNewPage";
import OnboardPage from "./onboard/pages/OnboardPage";
import OnboardNicknamePage from "./onboard/pages/OnboardNicknamePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboard" element={<OnboardPage />} />
        <Route path="/onboard/nickname" element={<OnboardNicknamePage />} />
        <Route path="/wish/new" element={<WishNewPage />} />
        <Route path="/wish/edit" element={<WishNewPage />} />
        <Route path="/wish/:wishId" element={<WishPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
