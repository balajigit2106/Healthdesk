import { StyleSheet } from "react-native";

const loginstyle = StyleSheet.create({
  container: {
    marginTop: 80,
  },
  loginlogo: {
    width: 120,
    height: 120,
  },
  login_heading: {
    textAlign: "center",
    color: "#1F2587",
    fontWeight: "700",
    fontSize: 18,
  },
  corporate_text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
    marginTop: 10,
  },
  welcome_text: {
    textAlign: "center",
    color: "#1F2587",
    fontSize: 14,
    marginTop: 8,
  },
  inputcontainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputicon_container: {
    height: 45,
    backgroundColor: "#E3E4E4",
    borderColor: "#E3E4E4",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  inputlabel: {
    marginBottom: 4,
    fontWeight: "500",
    marginLeft: 3,
  },
  passwordinputlabel: {
    marginBottom: 4,
    fontWeight: "500",
    marginLeft: 3,
    marginTop: 30,
  },
  eyeicon_Container: {
    marginRight: 10,
    position: "absolute",
    right: 10,
    paddingVertical: 12,
  },
  login_button: {
    width: "100%",
    marginTop: 40,
    height: 44,
    backgroundColor: "#1F2587",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 19,
    marginBottom: 20,
  },
  success_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1f2587",
  },
  success_image: {
    width: 160,
    height: 160,
  },
  success_heading: {
    fontWeight: "600",
    fontSize: 20,
    color: "white",
  },
  success_text: {
    color: "white",
    marginTop: 10,
    lineHeight: 22,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  bottomLeftImageContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  bottomLeftImage: {
    width: 235,
    height: 150,
  },
});
export default loginstyle;
