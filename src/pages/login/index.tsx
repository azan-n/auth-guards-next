import type { NextPage } from "next";
import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";

const LoginPage: NextPage = () => {
  const { authenticated, toggle } = useAuth();
  return (
    <>
      <h1>Hello Login Page!</h1>
      <h6>Authenticated: {authenticated.toString()}</h6>
      <button
        style={{ display: "block" }}
        onClick={() => {
          toggle();
        }}
      >
        Toggle authentication.
      </button>
      <Link href={"/"}>Go to Dashboard</Link>
    </>
  );
};

export default LoginPage;
