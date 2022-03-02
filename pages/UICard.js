import styles from '../styles/ui_card.module.css'
import Image from 'next/image'
import UIbutton from './UIButton'
import React, {useState} from 'react'

const UICard = ({data}) => {

const [bkcolor, setBk] = useState("rgba(255, 255, 255, 0.04)");
const style = {backgroundColor: bkcolor};


/*const data = {
    heading: "Heading 4",
    card_content: "Comes from the database (sanity). Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    card_img_url: "/images/Caravan-White-R.png",
    card_img_alt: "caravan",
    button_text: "Button Text",
    button_url: "https://www.figma.com/file/LhnryomUO90RbKvvHvBekz/Dev-Project?node-id=1%3A1663",
}*/




  return (
    <div>
        <div className={styles.cardImageDiv}>
            <Image
                className={styles.cardImage}
                src={data.card_img_url}
                height={192}
                width={421}
                alt={data.card_img_alt}
            />
        </div>

        <div className={styles.cardContainer} style={style}>
            <div className={styles.cardData}>
                
                    <h4 className={styles.heading4}>{data.heading}</h4>
                    <div><p className={styles.content}>{data.card_content}</p></div>
                    <div onMouseOver ={()=>setBk('#C4EBF8')} onMouseOut={()=>setBk("rgba(255, 255, 255, 0.04)")}><UIbutton url={data.button_url} text={data.button_text}/></div>
            
            </div>
        </div>
        
    
    </div>
  )
}

export default UICard