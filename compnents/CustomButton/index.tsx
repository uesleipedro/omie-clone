import React from "react";
import styles from "./CustomButton.module.css";

type buttonProps = {
  name: string;
  color: string;
}

const colors = {
  green: "#D8FE00",
  blue: "#00E2F4"
}

const CustomButton = ({ name, color }: buttonProps) => {

  return <>
    <input
      type="button"
      className={styles.button}
      value={name}
      style={{
        backgroundColor: colors[color]
      }}
    />
  </>
}

export default CustomButton
