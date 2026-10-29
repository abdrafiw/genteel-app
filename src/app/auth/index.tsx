import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "@/src/screens/auth/welcome";

function AuthPage() {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeScreen />
    </>
  );
}

export default AuthPage;
