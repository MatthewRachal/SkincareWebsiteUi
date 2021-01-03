import React from 'react'
import styles from '../uistyles.module.css';
import {Link} from 'react-router-dom'
import skincare1 from './product4.jpeg';
import skincare2 from './Product2.jpg';
import skincare3 from './skincareimg2.jpg';
import skincare4 from './Product1.jpeg';
import skincare5 from './consumer1.jpeg';

//Images Come From Pexels.com
//All Images are free to use with no attribution required.
//Photo Sources:

//White and Purple Flower Plant on Brown Wooden Surface by Pixabay
//https://www.pexels.com/photo/white-and-purple-flower-plant-on-brown-wooden-surface-161599/

//Reflection Photo of Woman Smiling by Andrea Piacquadio
//https://www.pexels.com/photo/reflection-photo-of-woman-smiling-3785803/

//Black and Brown Brush on Saucer by Daria Shevtsova
//https://www.pexels.com/photo/black-and-brown-brush-on-saucer-1619488/

//Foundation Bottle Beside Pink Rose Petals by Valeriia Miller
//https://www.pexels.com/photo/foundation-bottle-beside-pink-rose-petals-3685523/

//Set of cosmetic bottle with pink rose on wooden plate by Karolina Grabowska
//https://www.pexels.com/photo/set-of-cosmetic-bottle-with-pink-rose-on-wooden-plate-4041391/


export default function Home1() {
    return (
       <div className={styles.gridContainer}>
            <div className={styles.SectionA}>
            <img className={styles.mainImage} alt="mainImage" src={skincare1}/>
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
                    <img className={styles.productImage} alt="Product" src={skincare2}/>

                </div>
                <div className={styles.SectionBItem2}>
                    <h5 className={styles.productHeader}>High Quality Ingredients</h5>
                    <div className={styles.paraHolder}>
                        <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat aliquet facilisis. In consectetur ante vitae pellentesque commodo. Ut efficitur erat sit amet lacus finibus, at dictum dui tincidunt. Vivamus porta libero eget vulputate maximus. Sed eget tempus dolor. Donec lobortis semper elementum</p>
                    </div>
                    <img className={styles.productImage} alt="Product" src={skincare3}/>

                </div>
                <div className={styles.SectionBItem3}>
                    <h5 className={styles.productHeader}>Elite Service</h5>
                    <div className={styles.paraHolder}>
                        <p className={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat aliquet facilisis. In consectetur ante vitae pellentesque commodo. Ut efficitur erat sit amet lacus finibus, at dictum dui tincidunt. Vivamus porta libero eget vulputate maximus. Sed eget tempus dolor. Donec lobortis semper elementum</p>
                    </div>
                    <img className={styles.productImage} alt="Product" src={skincare4}/>

                </div>
               
            <div className={styles.SectionC}>
            <img style={{height: "auto"}}className={styles.mainImage} alt="mainImage" src={skincare5}/>
                <div className={styles.contentAbove}> 
                
                </div>
            </div>

       </div>
    )
}
