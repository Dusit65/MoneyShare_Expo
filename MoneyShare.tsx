//rnfes
//rnfs
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Checkbox from "expo-checkbox";
// import Money from "./assets/shiroko1.png";
//+++++++++++++++++++++++++ End of Import ++++++++++++++++++++++++++++++++++++++

const MoneyShare = () => {
  //UseState===========================
  const [money, setMoney] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [tipStatus, setTipStatus] = useState(false);
  const [moneyShare, setMoneyShare] = useState("0.00");

  //Func Cal MoneyShare================
  const calMoneyShare = () => {
    let n = parseFloat(money);
    let p = parseInt(people);
    let t = tipStatus == true ? parseFloat(tip) : 0;
    let ms = (n + t) / p;
    //Validate TextInput
    if (money == "") {
      alert("กรุณาป้อนจํานวนเงิน");
    } else if (people == "") {
      alert("กรุณาป้อนจํานวนคน");
    } else if (tipStatus == true && tip == "") {
      alert("กรุณาป้อนจํานวนทิป");
    } else {
      setMoneyShare(ms.toFixed(2));
    }
  };
  //++++++++++++++++++++++++++++++++++++++++++++++++ UI Component ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ flex: 1, width: "100%" }}>
      <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
        {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}></TouchableWithoutFeedback> */}
        {/*  ============================ APPBAR ============================*/}
        <View style={styles.appbar}>
          <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold" }}>
            MoneyShare
          </Text>
        </View>
        <Image
          source={require("./assets/shiroko1.png")}
          style={styles.showLogo}
        />

        {/*  ====================== TEXTINPUT MONEY ========================*/}
        <TextInput
          style={styles.inputNumber}
          placeholder="ป้อนจํานวนเงิน"
          keyboardType="numeric"
          value={money}
          onChange={(e) => setMoney(e.nativeEvent.text)}
        />

        {/*  ====================== TEXTINPUT PERSON ========================*/}
        <TextInput
          style={styles.inputNumber}
          placeholder="ป้อนจํานวนคน"
          keyboardType="numeric"
          value={people}
          onChange={(e) => setPeople(e.nativeEvent.text)}
        />
        <View style={{ height: 50 }} />

        {/*  ====================== CHECKBOX ================================*/}
        <View style={{ flexDirection: "row" }}>
          <Checkbox value={tipStatus} onValueChange={setTipStatus} />
          <View style={{ width: 10 }} />
          <Text>ให้ทิปพนักงาน</Text>
        </View>

        {/*  ====================== TEXTINPUT TIP ===========================*/}
        <TextInput
          style={styles.inputNumber}
          placeholder="ป้อนจํานวนทิป"
          keyboardType="numeric"
          value={tip}
          onChange={(e) => setTip(e.nativeEvent.text)}
        />

        {/*  ====================== BTN CALCULATE ===========================*/}
        <TouchableOpacity style={styles.btnCal} onPress={calMoneyShare}>
          <Text style={{ color: "#ffffff", fontSize: 20, fontWeight: "bold" }}>
            คํานวณ
          </Text>
        </TouchableOpacity>

        {/* +++++++++++++++++++Show result ++++++++++++++++++++++++++++++++++ */}
        <View style={{ height: 30 }} />
        <View style={{flexDirection :"row"}}>
          <Text style={{ color: "#000000", fontSize: 20, fontWeight: "bold" }}>
            หารกันคนละ 
          </Text>
          <View style={{ height: 30 }} />
          <Text style={{ color: "#00Fe00", fontSize: 20, fontWeight: "bold" }}>
            {moneyShare}
          </Text>
          <Text style={{ color: "#000000", fontSize: 20, fontWeight: "bold" }}>
            บาท
          </Text>
        </View>
      </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default MoneyShare;

const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "100%",
    // borderBottomWidth: 1,
    // borderBottomColor: "black",
  },
  showLogo: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 50,
  },
  inputNumber: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  btnCal: {
    backgroundColor: "#22AA59",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 5,
  },
});
