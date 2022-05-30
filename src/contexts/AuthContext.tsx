import { createContext, useContext, useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";

const AuthContext = createContext({
  authStatus: false,
  authLoading: false,
  authToggle: () => {},
});

// What we need:
// Non-flickering, loading screen assisted route guards
// Redirection from /home to /login and vice-versa based on auth status
// Site wide access to auth state and helper funcitons
// Managing authorization states???

function AuthProvider({ children }: ChildrenProps) {
  const [jwt, setJwt] = useState<Jwt>({ token: "", validity: 0 });

  const [authStatus, setAuthStatus] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(true);
  const router: NextRouter = useRouter();

  function authToggle() {
    setAuthStatus(!authStatus);
  }

  function checkAuth() {
    setJwt({ token: "abc", validity: 3600 });
  }

  useEffect(
    () => {
      setTimeout(() => {
        setAuthLoading(false);
      }, 3600);
      // validateJWT
      // check localStorage
      // JWT is valid
    },
    // authStatus depends on JWT
    [authStatus]
  );

  return (
    <AuthContext.Provider
      value={{
        authStatus,
        authLoading,
        authToggle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "Authentication context is to be used in components nested within AuthProvider."
    );
  }
  return context;
}

type Jwt = {
  token: string;
  validity: number;
};

type ChildrenProps = {
  children: React.ReactNode;
};

export { AuthProvider, useAuth };
