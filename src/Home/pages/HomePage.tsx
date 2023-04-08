import MainHero from "@/main/components/MainHero";
import MainWishList from "@/main/components/MainWishList";
import Layout from "@/shared/components/Layout";
import Page from "@/shared/components/Page";
import Spacing from "@/shared/components/Spacing";
import { LOGIN_COOKIE_KEY } from "@/shared/constants";
import { getCookie } from "@/shared/utils/cookie";
import { useNavigate } from "react-router";

const HomePage = () => {
  const isLogin = getCookie(LOGIN_COOKIE_KEY);
  const navigate = useNavigate();
  if (!isLogin) navigate("/login");

  return (
    <Layout>
      <Spacing size={1.25} />
      <MainHero />
      <MainWishList />
    </Layout>
  );
};
export default HomePage;
