import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

type ChildrenProps = {
  children: React.ReactNode;
};

function GuardedRoute({ children }: ChildrenProps) {
  const { authStatus, authLoading } = useAuth();
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (!authStatus && !authLoading) {
      // Show modal with error message
      // Alert user that they will be directed to login page.
      router.replace("/auth/login");
    }
  }, [router, authStatus, authLoading]);

  if (authLoading || !authStatus) {
    return <CircularProgress disableShrink/>;
  }

  return <>{children}</>;
}

export { GuardedRoute as AuthGuard };
