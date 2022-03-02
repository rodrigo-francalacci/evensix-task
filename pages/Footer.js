import styles from '../styles/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className={styles.footerContainer}>

        <div className={styles.logoContainer}>
            <Image
                
                src="/images/logo_white.svg"
                height={33}
                width={130}
                alt="logo planet"
            />
        </div>

        <div className={styles.footerNav}>

                <p className={styles.footerNavItem}>Privacy Policy</p>
                <p className={styles.footerNavItem}>Cookie Policy</p>
                <p className={styles.footerNavItem}>@ 2022</p>

        </div>

    </div>
  )
}

export default Footer