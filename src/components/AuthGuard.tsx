import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

type ChildrenProps = {
  children: React.ReactNode;
};

function AuthGuard({ children }: ChildrenProps) {
  const { authenticated, toggle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated) {
      // Show modal with error message
      // Alert user that they will be directed to login page.
      router.replace("/login");
    }
  },[authenticated]);

  return (
    <>
      {children}
    </>
  );
}

export { AuthGuard };
