import { StyleSheet } from "react-native";

const homestyle = StyleSheet.create({
  container: {
    marginTop: 80,
    marginHorizontal: 16,
  },
  cardimage_container: {
    height: 140,
    position: "relative",
    backgroundColor: "#1F2587",
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  hi_text: {
    fontWeight: "700",
    fontSize: 22,
    color: "white",
  },
  card: {
    width: 300,
    height: 140,
    position: "absolute",
    top: 60,
  },
  service_heading: {
    color: "#1F2587",
    fontWeight: "600",
    fontSize: 16,
  },
  service_images: {
    width: "100%",
    height: 140,
  },
  service_text: {
    marginTop: 2,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 13,
  },
  booknow_image: {
    width: "100%",
    height: 160,
    marginTop: 10,
  },
  quick_heading: {
    fontWeight: "600",
  },
  quickaccess_cards: {
    flex: 1,
    backgroundColor: "#EAF9F9",
    width: "100%",
    height: 70,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    paddingVertical: 8,
  },
  report_card: {
    flex: 1,
    backgroundColor: "#EAF9F9",
    width: "100%",
    height: 70,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 8,
  },
  quickaccess_images: {
    width: 30,
    height: 30,
  },
  quickaccess_text: {
    color: "#1F2587",
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
  appointment_text: {
    color: "#1F2587",
    fontSize: 10,
    fontWeight: "600",
    marginTop: 5,
  },
  record_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  record_text: {
    fontWeight: "600",
    fontSize: 20,
  },
});
export default homestyle;
