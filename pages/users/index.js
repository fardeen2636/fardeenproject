import React from "react"
import styles from "./user.module.css"
export default function Button() {

  return (

    <>
      <button className={styles.bgRed}>Failure</button>
      <button className={styles.bgGreen}>Success</button>
      <button className={styles.bgOrange}>Alert</button>
      <button className={styles.bgYellow}>Warning</button>

    </>
  )
}           
