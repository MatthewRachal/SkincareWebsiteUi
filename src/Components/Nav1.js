import React from 'react'
import styles from '../uistyles.module.css';
import {Link} from 'react-router-dom';

export default function Nav1() {
    return (
        <div style={{}}>
          <ul className={styles.navUl}>
                <h3 className={styles.navLogo}>Elegize</h3>
                <li className={styles.navButton}>Login</li>
                <li className={styles.navLi}>Blog</li>
                <li className={styles.navLi}>Process</li>
                <li className={styles.navLi}>Products</li>
                <li className={styles.navLi}>About</li>
          </ul>
        </div>
    )
}
