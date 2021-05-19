import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { Routes } from "./src/routes";
import { FavoriteUserProvider } from "./src/contexts/FavoriteUser.context";

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent />
      <ThemeProvider theme={theme}>
        <FavoriteUserProvider>
          <Routes />
        </FavoriteUserProvider>
      </ThemeProvider>
    </>
  );
}
