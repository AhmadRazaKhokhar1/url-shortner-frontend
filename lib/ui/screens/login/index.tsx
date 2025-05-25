// Components
import LoginHeader from "../../screen-components/login/header";
import LoginMain from "../../screen-components/login/main";
import { ScreenContainer } from "../../useable-components";

export default function LoginScreen() {
  return (
    <ScreenContainer>
      <LoginHeader />
      <LoginMain />
    </ScreenContainer>
  );
}
