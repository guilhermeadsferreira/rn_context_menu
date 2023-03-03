import "react-native-gesture-handler";

import { StatusBar } from "react-native";

import { Home } from "./src/screens/Home";
import { HoldMenuProvider } from "react-native-hold-menu";

import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <>
      <HoldMenuProvider theme="dark" iconComponent={Feather}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Home />
      </HoldMenuProvider>
    </>
  );
}
