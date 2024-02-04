'use client'
import Image from 'next/image'

import styles from '../page.module.css'
import menu from '../../../public/menu.png'
import home from '../../../public/home-icon.png'
import crm_icon from '../../../public/crm_icon.png'
import page from '../../../public/page.png'
import pilot from '../../../public/pilot.png'
import support from '../../../public/support.png'
import setting from '../../../public/setting.png'
import logo from '../../../public/logo.png'
import Button from '../Button/page'

export default function Left() {
    return (
        <div className={styles.container_left}>
            {/* <div className={styles.sub_container_left}> */}
            <div className={styles.icon}>
                <div className={styles.logo_div}>
                <Image src={logo} alt='logo' className={styles.logo}/>
                <h4 className={styles.title}>Barbarik</h4>
                </div>
                
                <button className={styles.btn}>
                    <Image src={menu} className={styles.menu} alt='menu' />
                </button>

            </div>
            <div className={styles.search_div}>
                <input type="text" name="Search" placeholder="Search..." className={styles.search} />
            </div>

            <div className={styles.btn3}>
                <Button image={home} name="Dashboard" />
            </div>
            <div className={styles.btn3}>
                <Button image={crm_icon} name="CRM" />
            </div>
            <div className={styles.btn3}>
                <Button image={page} name="Integration" />
            </div>
            <div className={styles.btn3}>
                <Button image={pilot} name="Co-Pilot" />
            </div>
            
            <div className={styles.btn4}>
                <Button image={support} name="Support" />
            </div>
            <div className={styles.btn5}>
                <Button image={setting} name="Settings" />
            </div>





            {/* </div> */}


        </div>
    )
}