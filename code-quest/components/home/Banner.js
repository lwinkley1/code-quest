import { View, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import db from "../../database/db";
import useImage from "../../utils/useImage";

export default function Banner() {
  const { imageUri: testImageUri } = useImage({ path: "banner.png" });

  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{
          uri: testImageUri,
        }}
        style={styles.banner}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: Dimensions.get("window").height * 0.18,
    width: Dimensions.get("window").width * 0.92,
    resizeMode: "contain",
    borderRadius: 10,
  },
});
