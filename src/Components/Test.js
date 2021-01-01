import React from 'react'
import styles from '../uistyles.module.css';


export default function Test() {
    return (
        <div className={styles.myGridContainer}>
            <div className={styles.div1}>1</div>
            <div className={styles.div1}>2</div>
            <div className={styles.div1}>3</div>
            <div className={styles.div2}>4</div>
            <div className={styles.div3}>5</div>
            <div className={styles.div4}>6</div>
        </div>
    )
}
