import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../DEFAULTS';

interface ButtonProps {
  type: string;
}

const Button:React.FC<ButtonProps> = ({ type }) => {

  const onLogin = () => {
    alert("Awaiting Login Implementations");
  }

  return (
    <Pressable 
      style={styles.btn}
      onPress={() => {
        if(type === "login") {
          onLogin();
        } 
      }}>
      <Text style={styles.btnTxt}>{type === "login" ? "Login" : type === 'register' ? 'Sign Up' : type === 'code' ? 'Send Code' : type === 'verify' ? "Verify" : ""}</Text>
    </Pressable>
  )
}

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryBg,
    borderRadius: 12
  },
  btnTxt: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    fontStyle: "normal"
  }
});