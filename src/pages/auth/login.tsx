import type { NextPage } from "next";
import Link from "next/link";
import { UnguardedRoute } from "../../components/UnguardedRoute";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage: NextPage = () => {
  const { authStatus, authToggle } = useAuth();
  return (
    <UnguardedRoute>
      <h1>Hello Login Page!</h1>
      <h1>Hello Login Page!</h1>
      <h6>Authenticated: {authStatus.toString()}</h6>
      <button
        style={{ display: "block" }}
        onClick={() => {
          authToggle();
        }}
      >
        Toggle authentication.
      </button>
      <Link href={"/"}>Go to Dashboard</Link>
    </UnguardedRoute>
  );
};

export default LoginPage;
