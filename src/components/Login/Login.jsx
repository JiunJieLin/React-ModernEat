import Navigation from "../Navigation/Navigation";
import Footer from "../Footer";
import LoginForm from "./LoginForm";
import { ProductProvider } from "@/data/context";
const Login = () => {
  return (
    <ProductProvider>
      <div>
        <main className="min-h-screen mx-auto max-w-[1920px]">
          <Navigation />
          <LoginForm />
          <Footer />
        </main>
      </div>
    </ProductProvider>
  );
};

export default Login;
