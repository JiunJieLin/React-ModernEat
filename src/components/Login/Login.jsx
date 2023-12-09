import Navigation from "../Navigation/Navigation";
import Footer from "../Footer";
import LoginForm from "./LoginForm";
import { ProductProvider } from "@/data/context";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const Login = () => {
  const router = useRouter();

  const [userProfile, setUserProfile] = useState({});
  const handleLogin = (userData) => {
    // 使用狀態更新函數來更新狀態

    setUserProfile(userData);

    router.push("/");
  };
  useEffect(() => {
    console.log(userProfile);
  }, [userProfile]);
  return (
    <ProductProvider initialLoggedIn={false}>
      <div>
        <main className="min-h-screen mx-auto max-w-[1920px]">
          <Navigation
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
          <LoginForm onLogin={handleLogin} />
          <Footer />
        </main>
      </div>
    </ProductProvider>
  );
};

export default Login;
