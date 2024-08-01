/* eslint-disable prefer-destructuring */
import { Position } from "chess.js";
import { Dimensions } from "react-native";
import { Vector } from "react-native-redash";

const { width } = Dimensions.get("window");
export const SIZE = width / 8;

// Converts a chess position (e.g., "e4") to translation coordinates
export const toTranslation = (to) => {
  "worklet";
  // Worklet doesn't support destructuring yet
  const tokens = to.split("");
  const col = tokens[0];
  const row = tokens[1];
  if (!col || !row) {
    throw new Error("Invalid notation: " + to);
  }
  const indexes = {
    x: col.charCodeAt(0) - "a".charCodeAt(0),
    y: parseInt(row, 10) - 1,
  };
  return {
    x: indexes.x * SIZE,
    y: 7 * SIZE - indexes.y * SIZE,
  };
};

// Converts translation coordinates to a chess position (e.g., { x: 0, y: 0 } to "a1")
export const toPosition = ({ x, y }) => {
  "worklet";
  const col = String.fromCharCode(97 + Math.round(x / SIZE));
  const row = `${8 - Math.round(y / SIZE)}`;
  return `${col}${row}`;
};
