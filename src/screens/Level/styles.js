import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: "#15202B",
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  subt: {
    fontSize: 16,
    color: "#8E8E8E",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  img: {
    alignSelf: "center",
  },
  imageUpIcon: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  btn: {
    backgroundColor: "#FF7300",
    padding: 10,
    borderRadius: 15,
    width: "50%",
    marginTop: 55,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  bText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    alignSelf: "center",
  },
  plus: {
    height: 50,
    width: 50,
    resizeMode: "cover",
    margin: 20,
  },
  btns: {
    flexDirection: "row",
    margin: 10,
    padding: 20,
    justifyContent: "space-between",
    width: "100%",
    height: 200,
  },
  lbox: {
    backgroundColor: "#DADADA",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
    padding: 8,
    margin: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
  fbox: {
    backgroundColor: "#FF7300",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
    padding: 8,
    margin: 10,
    alignSelf: "center",
    borderRadius: 10,
  },
  ltext: {
    fontSize: 17,
    marginLeft: 10,
  },
  txt: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
