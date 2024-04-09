import { StyleSheet } from "react-native";
const sliderstyle = StyleSheet.create({
  topellipse_image: {
    width: 220,
    height: 150,
    left: -58,
  },
  skip_button: {
    color: "#00539C",
    fontWeight: "600",
    fontSize: 18,
    justifyContent: "center",
    marginRight: 22,
  },
  sliderone_image: {
    width: 280,
    height: 280,
  },
  sliderthree_image: {
    width: 240,
    height: 260,
  },
  slider_heading: {
    color: "#1F2587",
    fontWeight: "700",
    fontSize: 22,
  },
  sliderthree_heading: {
    color: "#1F2587",
    fontWeight: "700",
    fontSize: 24,
    marginTop: 10,
  },
  slider_text: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
  slidercontainer: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
  },
  activeslide: {
    width: 20,
    height: 3,
    backgroundColor: "#1F2587",
    borderRadius: 15,
  },
  inactiveslide: {
    width: 20,
    height: 3,
    backgroundColor: "#D9D9D9",
    borderRadius: 15,
  },
  bottomellipse_image: {
    width: 220,
    height: 150,
    right: -58,
  },
  rightarrow_container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 45,
    height: 45,
    backgroundColor: "white",
    borderRadius: 25,
    bottom: 40,
    right: 20,
  },
});

export default sliderstyle;
