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
import { API_ENDPOINT } from "@/utils/constants";
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
    try {
      loadingToastId = toast.loading("Please wait while we log you in");
      const resp = await fetch(
        `${API_ENDPOINT.LOCAL.BASE_URL}/auth/password-less-entry`,
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
      toast.success(`An OTP has been sent at: ${response.email} `);
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

  const handleVerifyOtp = async (otp: number) => {
    try {
      loadingToastId = toast.loading("Please wait while we log you in");
      const localUserId = localStorage.getItem("userId");
      const currentUserId = userId || localUserId;
      if (!currentUserId) {
        router.push("/login");
      }
      const resp = await fetch(
        `${API_ENDPOINT.LOCAL.BASE_URL}/auth/otp-verification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: currentUserId,
            otp,
          }),
        },
      );
      const response = await resp.json();
      const { accessToken, refreshToken } = response;
      if (accessToken && refreshToken) {
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      }
      toast.remove(loadingToastId);
      if (response?.success) {
        toast.success(response?.message);
        router.push("/");
      } else if (!response?.success) {
        toast.error(response?.message);
        router.push("/login");
      }
    } catch (error) {
      localStorage.clear();
      toast.remove(loadingToastId);
      toast.error("An error occured while verifying OTP");
      console.error(error);
    }
  };

  // UseEffects
  useEffect(() => {
    const user_id = localStorage.getItem("userId");
    if (user_id && !userId) {
      setUserId(user_id);
    }
  }, [userId]);
  return (
    <AuthContext.Provider
      value={{ userId, handleLogin, handleLogout, handleVerifyOtp }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
