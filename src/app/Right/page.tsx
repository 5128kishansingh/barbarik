import styles from '../page.module.css'
import notify from '../../../public/notification.png'
import Button2 from '../Button2/page'
import user from '../../../public/user.png'
import addpage from '../../../public/add_page.png'
import next from '../../../public/next.png'
import Image from 'next/image'
export default function Right() {
    return (
        <div className={styles.container_right}>
            <div className={styles.navbar}>


                <div className={styles.div5}>
                    <button className={styles.notify_button}>
                        <Image src={notify} alt='notify' className={styles.notify} />
                    </button>

                    <button className={styles.user_button}>
                        <Image src={user} alt='user' className={styles.user} />
                    </button>
                </div>


            </div>
            <div className={styles.main_container}>
                <div className={styles.description_div}>
                    <h2>Hello James!</h2>
                    <p className={styles.description}>I am barbarik ,your AI co-pilot for finance teams. How can I assist you today?</p>
                </div>


                <div className={styles.box_container}>
                    <div className={styles.boxes}>
                        <h4 className={styles.boxes_title}>Extract</h4>

                        <Button2 name="Invoice" className={styles.button_} />
                        <Button2 name="Receipt" className={styles.button_} />
                        <Button2 name="Transactions" className={styles.button_} />
                    </div>
                    <div className={styles.boxes}>
                        <h4 className={styles.boxes_title}>Analyze</h4>

                        <Button2 name="Income Statement" className={styles.button_} />
                        <Button2 name="Cash Flow Statement" className={styles.button_} />
                        <Button2 name="Budget Vs. Actual Report" className={styles.button_} />
                    </div>
                    <div className={styles.boxes}>
                        <h4 className={styles.boxes_title}>Inquire</h4>

                        <Button2 name="Last Quarter Revenue" className={styles.button_} />
                        <Button2 name="Top Client Profibility" className={styles.button_} />
                        <Button2 name="Expense Breakdown" className={styles.button_} />
                    </div>
                </div>

            </div>

            <div className={styles.bottom_div}>
                <input type='text' placeholder='How can I help you' className={styles.search1}></input>

                <div className={styles.search_div2}>
                    <button className={styles.button3}>
                        <Image src={addpage} alt='addpage' className={styles.addpage} />
                    </button>

                    <button className={styles.button3}>
                        <Image src={next} alt='next' className={styles.addpage} />
                    </button>
                </div>

            </div>

        </div>
    )
}