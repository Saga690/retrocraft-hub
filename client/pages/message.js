import React from 'react'
import styles from '@/styles/Message.module.css'
import Link from 'next/link'

const Message = () => {
  return (
    <div className={styles.message}>
        <div className={styles.container}>
            <span className={styles.loc}><Link className={styles.link} href="/messages">MESSAGES</Link> &gt; JOHN DOE &gt;</span>
            <div className={styles.messages}>
                <div className={styles.item}>
                    <img className={styles.img} src="https://c.stocksy.com/a/XJC000/z9/47339.jpg" alt="" />
                    <p className={styles.p}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
                <div className={`${styles.item} ${styles.owner}`}>
                    <img className={styles.img} src="https://img.freepik.com/free-photo/portrait-man-smiling-city_23-2150771187.jpg?t=st=1703597269~exp=1703600869~hmac=453abc1954c0300c5d526150234b7ce4c64db74f4f2500992b43ca4a8a41dbde&w=360" alt="" />
                    <p className={`${styles.p} ${styles.op}`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.img} src="https://c.stocksy.com/a/XJC000/z9/47339.jpg" alt="" />
                    <p className={styles.p}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
                <div className={`${styles.item} ${styles.owner}`}>
                    <img className={styles.img} src="https://img.freepik.com/free-photo/portrait-man-smiling-city_23-2150771187.jpg?t=st=1703597269~exp=1703600869~hmac=453abc1954c0300c5d526150234b7ce4c64db74f4f2500992b43ca4a8a41dbde&w=360" alt="" />
                    <p className={`${styles.p} ${styles.op}`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.img} src="https://c.stocksy.com/a/XJC000/z9/47339.jpg" alt="" />
                    <p className={styles.p}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
                <div className={`${styles.item} ${styles.owner}`}>
                    <img className={styles.img} src="https://img.freepik.com/free-photo/portrait-man-smiling-city_23-2150771187.jpg?t=st=1703597269~exp=1703600869~hmac=453abc1954c0300c5d526150234b7ce4c64db74f4f2500992b43ca4a8a41dbde&w=360" alt="" />
                    <p className={`${styles.p} ${styles.op}`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.img} src="https://c.stocksy.com/a/XJC000/z9/47339.jpg" alt="" />
                    <p className={styles.p}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
                <div className={`${styles.item} ${styles.owner}`}>
                    <img className={styles.img} src="https://img.freepik.com/free-photo/portrait-man-smiling-city_23-2150771187.jpg?t=st=1703597269~exp=1703600869~hmac=453abc1954c0300c5d526150234b7ce4c64db74f4f2500992b43ca4a8a41dbde&w=360" alt="" />
                    <p className={`${styles.p} ${styles.op}`}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et iste distinctio quaerat voluptatum cum, atque odio, quas vitae ratione, soluta optio? Doloremque, quidem eos itaque ipsum aliquid eligendi ab placeat?
                    </p>
                </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.write}>
                <textarea className={styles.textarea} name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                <button className={styles.btn}>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Message