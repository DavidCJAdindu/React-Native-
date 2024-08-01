import { Chess } from "chess.js";
import React, { useCallback } from "react";
import { StyleSheet, Image } from "react-native";
import { PanGestureHandler, Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { Vector } from "react-native-redash";
import { toTranslation, SIZE, toPosition } from "./Notation";

const styles = StyleSheet.create({
  piece: {
    width: SIZE,
    height: SIZE,
  },
});

// Define the available pieces with their respective images
export const PIECES = {
  br: require("../assets/img-pieces/br.png"),
  bp: require("../assets/img-pieces/bp.png"),
  bn: require("../assets/img-pieces/bn.png"),
  bb: require("../assets/img-pieces/bb.png"),
  bq: require("../assets/img-pieces/bq.png"),
  bk: require("../assets/img-pieces/bk.png"),
  wr: require("../assets/img-pieces/wr.png"),
  wn: require("../assets/img-pieces/wn.png"),
  wb: require("../assets/img-pieces/wb.png"),
  wq: require("../assets/img-pieces/wq.png"),
  wk: require("../assets/img-pieces/wk.png"),
  wp: require("../assets/img-pieces/wp.png"),
};

const Piece = ({ id, startPosition, chess, onTurn, enabled }) => {
  const isGestureActive = useSharedValue(false);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const translateX = useSharedValue(startPosition.x * SIZE);
  const translateY = useSharedValue(startPosition.y * SIZE);

  const movePiece = useCallback(
    (to) => {
      const moves = chess.moves({ verbose: true });
      const from = toPosition({ x: offsetX.value, y: offsetY.value });
      const move = moves.find((m) => m.from === from && m.to === to);
      const { x, y } = toTranslation(move ? move.to : from);
      translateX.value = withTiming(x, {}, () => (offsetX.value = translateX.value));
      translateY.value = withTiming(y, {}, () => {
        offsetY.value = translateY.value;
        isGestureActive.value = false;
      });
      if (move) {
        chess.move({ from, to });
        onTurn();
      }
    },
    [chess, isGestureActive, offsetX, offsetY, onTurn, translateX, translateY]
  );

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      offsetX.value = translateX.value;
      offsetY.value = translateY.value;
      isGestureActive.value = true;
    })
    .onUpdate(({ translationX, translationY }) => {
      translateX.value = offsetX.value + translationX;
      translateY.value = offsetY.value + translationY;
    })
    .onEnd(() => {
      runOnJS(movePiece)(toPosition({ x: translateX.value, y: translateY.value }));
    });

  const style = useAnimatedStyle(() => ({
    position: "absolute",
    zIndex: isGestureActive.value ? 100 : 10,
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  const original = useAnimatedStyle(() => ({
    position: "absolute",
    width: SIZE,
    height: SIZE,
    zIndex: 0,
    backgroundColor: isGestureActive.value
      ? "rgba(255, 255, 0, 0.5)"
      : "transparent",
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
    ],
  }));

  const underlay = useAnimatedStyle(() => {
    const position = toPosition({ x: translateX.value, y: translateY.value });
    const translation = toTranslation(position);
    return {
      position: "absolute",
      width: SIZE,
      height: SIZE,
      zIndex: 0,
      backgroundColor: isGestureActive.value
        ? "rgba(255, 255, 0, 0.5)"
        : "transparent",
      transform: [
        { translateX: translation.x },
        { translateY: translation.y },
      ],
    };
  });

  return (
    <>
      <Animated.View style={original} />
      <Animated.View style={underlay} />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={style}>
          <Image source={PIECES[id]} style={styles.piece} />
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export default Piece;
