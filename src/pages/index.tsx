import type { NextPage } from "next";
import Link from "next/link";
import { AuthGuard } from "../components/GuardedRoute";
import { useAuth } from "../contexts/AuthContext";

const HomePage: NextPage = () => {
  const { authStatus, authToggle } = useAuth();

  return (
    <AuthGuard>
      <h1>Hello App!</h1>
      <h6>Authenticated: {authStatus.toString()}</h6>
      <button
        style={{ display: "block" }}
        onClick={() => {
          authToggle();
        }}
      >
        Toggle authentication.
      </button>
      <Link href={"/auth/login"}>
        <a>Go to Login Page</a>
      </Link>
    </AuthGuard>
  );
};

export default HomePage;
