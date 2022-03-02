import styles from '../styles/ui_button.module.css'
import Link from 'next/link'



const UIbutton = props => {


  return (

    <Link href={props.url} >  
        <a className={styles.button}>{props.text}</a>
    </Link>

  )
}

export default UIbutton