import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type CheckoutContextValue = {
  hasAddress: boolean;
  setHasAddress: (value: boolean) => void;
  hasPaymentMethod: boolean;
  setHasPaymentMethod: (value: boolean) => void;
};

const CheckoutContext = createContext<CheckoutContextValue | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [hasAddress, setHasAddressState] = useState(false);
  const [hasPaymentMethod, setHasPaymentMethodState] = useState(false);
  const setHasAddress = useCallback((value: boolean) => {
    setHasAddressState(value);
  }, []);
  const setHasPaymentMethod = useCallback((value: boolean) => {
    setHasPaymentMethodState(value);
  }, []);

  return (
    <CheckoutContext.Provider
      value={{
        hasAddress,
        setHasAddress,
        hasPaymentMethod,
        setHasPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext);
  if (!ctx) {
    throw new Error("useCheckout must be used within CheckoutProvider");
  }
  return ctx;
}
