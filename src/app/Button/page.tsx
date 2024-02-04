'use client'
import Image from "next/image"
import styles from "../page.module.css"

export default function Button(prop:any) {

    return (
        <button className={styles.butt}>
            <div className={styles.hi}>
               
                <Image src={prop.image} alt="img" className={styles.icon_img} />
                <div className={styles.name_div}>
                    <p className={styles.name}>{prop.name}</p>
                </div>
                
            </div>
        </button>
    )
}