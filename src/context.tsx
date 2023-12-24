import { createContext } from "react";
import { useSessionStorage } from "@mantine/hooks";
import { AppType } from "./interfaces";

export const AppContext = createContext<AppType>({
  filter: "",
  setFilter: () => "",
});

export default function AppProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const [filter, setFilter] = useSessionStorage({
    key: "filter",
    defaultValue: JSON.parse(sessionStorage.getItem("filter") || '""'),
  });

  return (
    <AppContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
