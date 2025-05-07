import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type AvatarProps = {
  source: ImageSourcePropType;
  size: number;
  rounded?: boolean;
};

export default function Avatar({
  source,
  size = 50,
  rounded = false,
}: AvatarProps) {
  return (
    <Image
      source={source}
      style={[
        styles.base,
        { width: size, height: size, borderRadius: rounded ? size / 2 : 0 },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#ccc", // fallback caso não carregue
  },
});
