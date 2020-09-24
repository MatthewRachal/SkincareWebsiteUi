import React from 'react'
import styles from '../uistyles.module.css';
import {Link} from 'react-router-dom'


export default function Home1() {
    return (
       <div className={styles.gridContainer}>
            <div className={styles.SectionA}>
            <img className={styles.mainImage} alt="mainImage" src={require("./product 4.jpeg")}/>
                <div className={styles.contentAbove}>
                    <h1 className={styles.mainHead}>Flawless Elegance</h1>
                    <button className={styles.button1}>Learn More</button>
                    <button className={styles.button2}>Browse Products</button>
                </div>

            </div>

                <div className={styles.SectionBItem1}>
                    <h5 className={styles.productHeader}>Clear Long-Term Results</h5>
                    <div className={styles.paraHolder}>
                        <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat aliquet facilisis. In consectetur ante vitae pellentesque commodo. Ut efficitur erat sit amet lacus finibus, at dictum dui tincidunt. Vivamus porta libero eget vulputate maximus. Sed eget tempus dolor. Donec lobortis semper elementum</p>
                    </div>
                    <img className={styles.productImage} alt="Product" src={require("./Product 2.jpg")}/>

                </div>
                <div className={styles.SectionBItem2}>
                    <h5 className={styles.productHeader}>High Quality Ingredients</h5>
                    <div className={styles.paraHolder}>
                        <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat aliquet facilisis. In consectetur ante vitae pellentesque commodo. Ut efficitur erat sit amet lacus finibus, at dictum dui tincidunt. Vivamus porta libero eget vulputate maximus. Sed eget tempus dolor. Donec lobortis semper elementum</p>
                    </div>
                    <img className={styles.productImage} alt="Product" src={require("./ingredients.jpeg")}/>

                </div>
                <div className={styles.SectionBItem3}>
                    <h5 className={styles.productHeader}>Elite Service</h5>
                    <div className={styles.paraHolder}>
                        <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat aliquet facilisis. In consectetur ante vitae pellentesque commodo. Ut efficitur erat sit amet lacus finibus, at dictum dui tincidunt. Vivamus porta libero eget vulputate maximus. Sed eget tempus dolor. Donec lobortis semper elementum</p>
                    </div>
                    <img className={styles.productImage} alt="Product" src={require("./Product1.jpeg")}/>

                </div>
               
            <div className={styles.SectionC}>
            <img style={{height: "auto"}}className={styles.mainImage} alt="mainImage" src={require("./consumer1.jpeg")}/>
                <div className={styles.contentAbove}> 
                
                </div>
            </div>

    
        
           


       </div>
    )
}
