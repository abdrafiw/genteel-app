import { useState } from "react";
import { View } from "react-native";

import Credentials from "./Credentials";
import ExcitementReasons from "./ExcitementReasons";
import ShowOffWhenWearing from "./ShowOffWhenWearing";
import Submitting from "./Submitting";

type SignupStep =
  | "credentials"
  | "excitementReasons"
  | "showOffWhenWearing"
  | "submitting";

export type PersonalizationData = {
  excitementReasons: string[];
  showOffWhenWearing: string[];
};

function SignupScreen() {
  const [step, setStep] = useState<SignupStep>("credentials");
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("0000");
  const [personalization, setPersonalization] = useState<PersonalizationData>({
    excitementReasons: [],
    showOffWhenWearing: [],
  });

  const handleContinue = () => {
    if (email && password && step === "credentials") {
      setStep("excitementReasons");
    }

    if (
      step === "excitementReasons" &&
      personalization.excitementReasons.length > 0
    ) {
      setStep("showOffWhenWearing");
    }

    if (
      step === "showOffWhenWearing" &&
      personalization.showOffWhenWearing.length > 0
    ) {
      setStep("submitting");
    }
  };

  const toggleSelection = (
    category: keyof PersonalizationData,
    value: string
  ) => {
    setPersonalization((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <View className="relative flex-1">
      {step === "credentials" && (
        <Credentials
          onContinue={handleContinue}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          email={email}
          password={password}
        />
      )}

      {step === "excitementReasons" && (
        <ExcitementReasons
          onContinue={handleContinue}
          toggleSelection={toggleSelection}
          personalization={personalization}
        />
      )}

      {step === "showOffWhenWearing" && (
        <ShowOffWhenWearing
          toggleSelection={toggleSelection}
          personalization={personalization}
          onContinue={handleContinue}
        />
      )}

      {step === "submitting" && <Submitting />}
    </View>
  );
}

export default SignupScreen;
