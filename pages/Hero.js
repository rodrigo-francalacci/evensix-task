import styles from '../styles/hero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import UIbutton from './UIButton'
import UIPrice from './UIPrice'
import { useEffect, useState } from 'react'


const Hero = () => {

    const heroSec = {
        
        heading1: "50's Americana",
        paragraph: "Paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus sed tempus molestie sapien.",
        button_url: "",
        button_text: "Create your own",
        scroll: {
            item1: {
                img_url: "/images/Caravan-Red-R.png",
                img_alt: "Red Caravan",
                name: "Planet 23",
                price: "from £26,950"
            },
            item2: {
                img_url: "/images/Caravan-White-R.png",
                img_alt: "White Caravan",
                name: "Planet 24",
                price: "from £66,950"
            },
            item3: {
                img_url: "/images/Caravan-Orange-R.png",
                img_alt: "Orange Caravan",
                name: "Planet 31",
                price: "from £166,950"
            },
            item4: {
                img_url: "/images/Caravan-Orange-R.png",
                img_alt: "Orange Caravan",
                name: "Planet 31",
                price: "from £166,950"
            },
            item5: {
                img_url: "/images/Caravan-Red-R.png",
                img_alt: "Red Caravan",
                name: "Planet 23",
                price: "from £26,950"
            },
        }
   
    }

    const [items, setItems] = useState([]);

    useEffect(() => {
          function fetchItems() {
          const fetchedItems = [];
          Object.values(heroSec.scroll).forEach(val => fetchedItems.push(val))
          setItems(fetchedItems);
        }
        fetchItems();
        
      }, []);




      
  return (

    <div className={styles.heroContainer}>

        <div className={styles.heroTextContainer}>
            <div className={styles.heroTextItems}>
                <div><h1 className={styles.heading1}>{heroSec.heading1}</h1></div>
                <div className={styles.heroContent}><p>{heroSec.paragraph}</p></div>
                <div className={styles.heroButton}><UIbutton url={heroSec.button_url} text={heroSec.button_text}/></div>
            </div> 
        </div>

        <div className={styles.heroImagesContainer}>
            
            <div className={styles.carouselDiv} id="dragMe">

               {items.map(item => (
                        <div className={styles.carouselItem}>
                            <Image
                                src={item.img_url}
                                height={342}
                                width={749}
                                alt={item.img_alt}
                            />
                            <div className={styles.carouselPrice}><UIPrice name={item.name} price={item.price}/></div>
                    </div>
                ))}


            </div>
           
            
        </div>






       

    </div>



  )
}

export default Hero