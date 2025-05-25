"use client";
// Utils
import { IAuthProviderProps } from "@/utils";

// Core
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

// Hooks
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AuthContext = createContext({} as IAuthProviderProps);

export default function AuthProvider({ children }: { children: ReactNode }) {
  // Constants
  let loadingToastId = "";

  // States
  const [userId, setUserId] = useState("");

  // Hooks
  const router = useRouter();

  // Handlers
  const handleLogin = async (email: string, name: string) => {
    console.log("🚀 ~ handleLogin ~ email:", email);
    try {
      loadingToastId = toast.loading("Please wait while we log you in");
      console.log("🚀 ~ handleLogin ~ loadingToastId:", loadingToastId);
      const resp = await fetch(
        "http://localhost:8080/auth/password-less-entry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name }),
        },
      );
      const response = await resp.json();
      localStorage.setItem("userId", response._id);
      localStorage.setItem("email", response.email);
      toast.remove(loadingToastId);
      toast.success("Logged in successfully");
      if (response?._id) {
        router.push("/verify-otp");
      }
    } catch (error) {
      toast.remove(loadingToastId);
      toast.error("An error occured while loggin in");
      console.log(error);
    }
  };

  const handleLogout = () => {
    try {
      loadingToastId = toast.loading("Please wait while we log you out");
      localStorage.clear();
      router.replace("/login");
      toast.remove(loadingToastId);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.remove(loadingToastId);
      toast.error("An error occured while loggin out");
      console.log(error);
    }
  };

  const handleVerifyOtp = () => {
    try {
    } catch (error) {
      toast.remove(loadingToastId);
      toast.error("An error occured while verifying OTP");
      console.log(error);
    }
  };

  // UseEffects
  useEffect(() => {
    const user_id = localStorage.getItem("userId");
    if (user_id) {
      setUserId(user_id);
    }
  }, [userId]);
  return (
    <AuthContext.Provider value={{ userId, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
