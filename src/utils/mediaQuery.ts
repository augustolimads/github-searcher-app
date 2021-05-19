import React from "react";
import { Dimensions } from "react-native";

/**
 * percentage per width
 * @param value number
 * @returns width * value
 */
export function mediaQuery(value: number) {
  const width = Dimensions.get("window").width;
  return width * value;
}
