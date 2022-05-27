import { createContext, useContext, useEffect, useState } from "react";

type Jwt = {
  authenticated: boolean;
  toggle: Function;
};

type ChildrenProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<Jwt>({
  authenticated: false,
  toggle: () => {},
});

function AuthProvider({ children }: ChildrenProps) {
  const [jwt, setJwt] = useState("");
  
  const [authStatus, setAuthStatus] = useState(true);

  function toggleAuth() {
    const newAuthStatus = !authStatus;
    console.log(`Old: ${authStatus} and New: ${newAuthStatus}`);
    setAuthStatus(newAuthStatus);
  }

  useEffect(() => {
    // validateJWT
    // setAuthenticated
  }, [jwt]);

  return (
    <AuthContext.Provider value={{ authenticated: authStatus, toggle: toggleAuth }}>
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

export { AuthProvider, useAuth };
