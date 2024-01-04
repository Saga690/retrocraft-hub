import React from 'react'
import styles from '@/styles/Add.module.css'

const Add = () => {
  return (
    <div className={styles.add}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Add New Gig</h1>
        <div className={styles.sections}>
          <div className={styles.left}>
            <label className={styles.label} htmlFor="">Title</label>
            <input className={styles.input} type="text" placeholder='e.g. I will do something I am really good at' required />
            <label className={styles.label} htmlFor="">Category</label>
            <select className={styles.select} name="categories" id="cats">
              <option value="design">Movie Website Development</option>
              <option value="webd">Modelling</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label className={styles.label} htmlFor="">Cover Image</label>
            <input className={styles.input} type="file" />
            <label className={styles.label} htmlFor="">Upload Images</label>
            <input className={styles.input} type="file" multiple />
            <label className={styles.label} htmlFor="">Description</label>
            <textarea className={styles.textarea} name="" id="" cols="30" rows="16" placeholder='Brief description to introduce your service to customers' required></textarea>
            <button className={styles.btn}>Create</button>
          </div>
          <div className={styles.right}>
            <label className={styles.label} htmlFor="">Service Title</label>
            <input className={styles.input} type="text" placeholder='e.g. One-page web design' required />
            <label className={styles.label} htmlFor="">Short Description</label>
            <textarea className={styles.textarea} name="" id="" cols="30" rows="10" placeholder='Short description of your Service' required></textarea>
            <label className={styles.label} htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input className={styles.input} type="number" min={1} />
            <label className={styles.label} htmlFor="">Revision Number</label>
            <input className={styles.input} type="number" min={1} />
            <label className={styles.label} htmlFor="">Add Features</label>
            <input className={styles.input} type="text" placeholder='e.g. Page Design' />
            <input className={styles.input} type="text" placeholder='e.g. File Uploading' />
            <input className={styles.input} type="text" placeholder='e.g. Setting Up a Domain' />
            <input className={styles.input} type="text" placeholder='e.g. Hosting' />
            <label className={styles.label} htmlFor="">Price</label>
            <input className={styles.input} type="number" min={1} required />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add