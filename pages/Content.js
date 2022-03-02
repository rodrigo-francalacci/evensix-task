import styles from '../styles/content.module.css'
import UICard from './UICard'
import Image from 'next/image'

const Content = () => {


    const contentSec = {
        labelText: 'Why so popular?',
        heading2: "Hand made with unrivaled quality. It's no surprise we're the market leaders",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien. Luctus habitasse tincidunt at gravida imperdiet scelerisque. Elementum quis nibh risus suspendisse blandit tortor. Quis est tempus molestie sapien.",
        bkImg: {backgroundImage: "url(" + "./images/content-img.png" + ")",},
        card1: {
            heading: 'Jack',
            card_content: "Comes from the database (sanity). Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            card_img_url: "/images/Caravan-White-R.png",
            card_img_alt: "caravan",
            button_text: "Button Text",
            button_url: "https://www.figma.com/file/LhnryomUO90RbKvvHvBekz/Dev-Project?node-id=1%3A1663",
        },
        card2: {
            heading: "Heading 4 - 2",
            card_content: "Comes from the database (sanity). Text 02",
            card_img_url: "/images/Caravan-Red-R.png",
            card_img_alt: "caravan",
            button_text: "Button Text",
            button_url: "https://www.figma.com/file/LhnryomUO90RbKvvHvBekz/Dev-Project?node-id=1%3A1663",
        },
    }





  return (
    <div className={styles.contentContainer}>

        <h3 className={styles.heading3}>How will you use yours?</h3>

        <div className={styles.cardsContainer}>
            <div className={styles.cardsItem} ><UICard data={contentSec.card1}/></div>
            <div className={styles.cardsItem} ><UICard data={contentSec.card2}/></div>
        </div>

        <div className={styles.textContainer}>
            <div>
                <p className={styles.label}>{contentSec.labelText}</p>
                <h2 className={styles.heading2}>{contentSec.heading2}</h2>
            </div>
            <div><p className={styles.paragraph}>{contentSec.paragraph}</p></div>
        </div>

        <div className={styles.imageContainer} style={contentSec.bkImg}>
            
        </div>

    </div>
  )
}

export default Content