'use client'
import styles from "../page.module.css"

export default function Button2(prop:any){
    return(
        <button className={styles.button}>
            {prop.name}
        </button>
    )
}