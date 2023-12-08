import Navigation from "../Navigation/Navigation";
import Footer from "../Footer";
import LoginForm from "./LoginForm";
import { ProductProvider } from "@/data/context";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
const Login = () => {
  const router = useRouter();

  const [userProfile, setUserProfile] = useState({});
  const handleLogin = (userData) => {
    // 使用狀態更新函數來更新狀態

    setUserProfile(userData);
    // router.push("/");
  };
  // useEffect(() => {
  //   // 在這裡確保 loggedIn 的值是正確的
  //   console.log(loggedIn);
  // }, [loggedIn]);

  return (
    <ProductProvider>
      <div>
        <main className="min-h-screen mx-auto max-w-[1920px]">
          <Navigation userProfile={userProfile} />
          <LoginForm onLogin={handleLogin} />
          <Footer />
        </main>
      </div>
    </ProductProvider>
  );
};

export default Login;
