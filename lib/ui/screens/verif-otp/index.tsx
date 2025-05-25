import { VerifyOtpHeader, VerifyOtpMain } from "../../screen-components";

export default function VerifyOtpScreen() {
  return (
    <div className="w-full h-full flex flex-row justify-between items-center">
      <VerifyOtpHeader />
      <VerifyOtpMain />
    </div>
  );
}
