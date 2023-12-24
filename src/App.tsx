import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Header } from "./header/header";
import { Cards } from "./cards/cards";
import AppProvider from "./context";

function App() {
  return (
    <>
      <MantineProvider>
        <AppProvider>
          <Header></Header>
          <Cards></Cards>
        </AppProvider>
      </MantineProvider>
    </>
  );
}

export default App;
