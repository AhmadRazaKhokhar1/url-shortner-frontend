"use client";

import { useAuth } from "@/lib/providers/auth.provider";
// Hooks
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// React OTP Input
import OtpInput from "react-otp-input";

// Components
import CustomButton from "../../useable-components/custom-button";

export default function VerifyOtpMain() {
  // Local Storage
  const email = localStorage.getItem("email");
  // States
  const [otp, setOtp] = useState("");

  // Hooks
  const { handleVerifyOtp } = useAuth();
  const router = useRouter();

  // Handlers
  const handleVerifyOtpLocal = async () => {
    await handleVerifyOtp(Number(otp));
  };

  // UseEffects
  useEffect(() => {
    if (!email) {
      return router.replace("/login");
    }
  }, [email]);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-4">
      <p className="text-base text-gray-700 text-center mb-4">
        Enter your one time password sent at:&nbsp;
        <span className=" text-md font-semibold text-blue-600">
          {email}
        </span>
      </p>

      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        inputStyle={{
          width: "4rem",
          height: "4rem",
          fontSize: "1.25rem",
          textAlign: "center",
          border: "1px solid #D1D5DB", // Tailwind: border-gray-300
          borderRadius: "0.75rem", // Tailwind: rounded-xl
          backgroundColor: "#FFFFFF",
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)", // Tailwind: shadow-sm
          outline: "none",
          transition: "all 0.2s ease-in-out",
        }}
        renderSeparator={
          <span className="mx-1 text-xl font-bold text-gray-500">&nbsp;</span>
        }
        renderInput={(props) => (
          <input
            {...props}
            type="number"
          />
        )}
      />

      <CustomButton
        title="Verify"
        onClick={handleVerifyOtpLocal}
      />
    </div>
  );
}
