import { StatusBar } from "expo-status-bar";

import SigninScreen from "@/src/screens/auth/signin";

function SigninPage() {
  return (
    <>
      <StatusBar style="light" />
      <SigninScreen />
    </>
  );
}

export default SigninPage;
