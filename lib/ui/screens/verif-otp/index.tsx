import { VerifyOtpHeader, VerifyOtpMain } from "../../screen-components";
import ScreenContainer from "../../useable-components/screen-container";

export default function VerifyOtpScreen() {
  return (
    <ScreenContainer>
      <VerifyOtpHeader />
      <VerifyOtpMain />
    </ScreenContainer>
  );
}
