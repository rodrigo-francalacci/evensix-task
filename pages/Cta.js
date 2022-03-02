import styles from '../styles/cta.module.css'
import Link from 'next/link'


const Cta = () => {


  return (
    <div className={styles.ctaContainer}>

        <div className={styles.blueCta}>

            <p className={styles.keepOn}>Keep on</p>
            <Link href="" ><a className={styles.comerical}>{"< commerical"}</a></Link>

        </div>

        <div className={styles.redCta}>

          <p className={styles.exploring}>Exploring</p>
          <Link href="" ><a className={styles.tourers}>{"tourers >"}</a></Link>

        </div>

    </div>
  )
}

export default Cta