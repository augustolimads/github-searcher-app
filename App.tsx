import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent />
        <Routes />
      </ThemeProvider>
    </>
  );
}
