"use client";

// Hooks
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// React OTP Input
import OtpInput from "react-otp-input";

export default function VerifyOtpMain() {
    // Local Storage
    const email = localStorage.getItem("email")
  // States
  const [otp, setOtp] = useState("");

  // Hooks

  const router = useRouter();

  useEffect(() => {
    if (!email) {
      return router.replace("/login");
    }
  }, [email]);
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-4">
      <p className="text-base text-gray-700 dark:text-gray-200 text-center mb-4">
        Enter your one time password sent at:&nbsp;
        <span className="underline underline-offset-4 decoration-blue-400 text-md font-semibold text-blue-600 dark:text-blue-300">
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
    </div>
  );
}
