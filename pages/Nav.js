import styles from '../styles/nav.module.css'
import Image from 'next/image'
import Link from 'next/link'


const Nav = () => {

    const navItens = ['comercial', 'tourers', 'our history', 'get in touch']

  return (
    <nav className={styles.nav}>


        <Link href="" ><a className={styles.navItem}>{navItens[0].toUpperCase()}</a></Link>
        <Link href="" ><a className={styles.navItem}>{navItens[1].toUpperCase()}</a></Link>

            <div className={styles.logoDiv}>

                <Image 
                    priority
                    src="/images/logo_tab.svg"
                    className={styles.logoImg}
                    height={120}
                    width={202}
                    alt="logo"
                />

            </div>
            
        <Link href="" ><a className={styles.navItem}>{navItens[2].toUpperCase()}</a></Link>
        <Link href="" ><a className={styles.navItem}>{navItens[3].toUpperCase()}</a></Link>

    </nav>
  )
}

export default Nav