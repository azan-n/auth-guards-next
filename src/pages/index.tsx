import type { NextPage } from "next";
import Link from "next/link";
import { AuthGuard } from "../components/AuthGuard";
import { useAuth } from "../contexts/AuthContext";

const HomePage: NextPage = () => {
  const { authenticated, toggle } = useAuth();

  return (
    <AuthGuard>
      <h1>Hello App!</h1>
      <h6>Authenticated: {authenticated.toString()}</h6>
      <button
        style={{ display: "block" }}
        onClick={() => {
          toggle();
        }}
      >
        Toggle authentication.
      </button>
      <Link href={"/login"}>
        <a>Go to Login Page</a>
      </Link>
    </AuthGuard>
  );
};

export default HomePage;
