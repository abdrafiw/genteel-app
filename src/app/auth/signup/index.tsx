import { StatusBar } from "expo-status-bar";

import SignupScreen from "@/src/screens/auth/signup";

function SignupPage() {
  return (
    <>
      <StatusBar style="light" />
      <SignupScreen />
    </>
  );
}

export default SignupPage;
