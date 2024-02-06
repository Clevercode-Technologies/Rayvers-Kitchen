import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../DEFAULTS';

interface ButtonProps {
  type: string;
  loading?: boolean;
  onPress?: () => Promise<void>;
}

const Button:React.FC<ButtonProps> = ({ type, loading, onPress }) => {


  return (
    <Pressable 
      style={[{ backgroundColor: loading ? '#A0A5BA' : colors.primaryBg }, styles.btn]}
      onPress={onPress}
      disabled={loading}
      >
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