import { CircularProgress } from "@mui/material";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

type ChildrenProps = {
  children: React.ReactNode;
};

function UnguardedRoute({ children }: ChildrenProps) {
  const { authStatus, authLoading } = useAuth();
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (authStatus) {
      router.replace("/");
    }
  }, [router, authStatus, authLoading]);

  if (authLoading || authStatus) {
    return <CircularProgress disableShrink color="secondary"/>;
  }

  return <>{children}</>;
}

export { UnguardedRoute };
