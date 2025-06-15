import React from 'react'
import styles from './Footer.module.css'

const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.item}>
            <h2 className={styles.h2}>Categories</h2>
            <span className={styles.span}>Graphics</span>
            <span className={styles.span}>Design</span>
            <span className={styles.span}>Multimedia</span>
            <span className={styles.span}>Digital Marketing</span>
            <span className={styles.span}>Writing & Translation</span>
            <span className={styles.span}>Animation</span>
            <span className={styles.span}>Music & Audio</span>
            <span className={styles.span}>Data</span>
            <span className={styles.span}>Business</span>
            <span className={styles.span}>Photography</span>
            <span className={styles.span}>Support</span>
          </div>
          <div className={styles.item}>
            <h2 className={styles.h2}>About</h2>
            <span className={styles.span}>Careers</span>
            <span className={styles.span}>Press & News</span>
            <span className={styles.span}>Partnerships</span>
            <span className={styles.span}>Privacy Policy</span>
            <span className={styles.span}>Terms of Service</span>
            <span className={styles.span}>Intellectual Property Claims</span>
            <span className={styles.span}>Investor Relations</span>
          </div>
          <div className={styles.item}>
            <h2 className={styles.h2}>Support & Education</h2>
            <span className={styles.span}>Help & Support</span>
            <span className={styles.span}>Trust & Safety</span>
            <span className={styles.span}>Hiring</span>
            <span className={styles.span}>RetroCraft Guides</span>
            <span className={styles.span}>Retrocraft Workspace</span>
            <span className={styles.span}>Learn</span>
          </div>
          <div className={styles.item}>
            <h2 className={styles.h2}>Community</h2>
            <span className={styles.span}>Customer Success Stories</span>
            <span className={styles.span}>Community Hub</span>
            <span className={styles.span}>Forum</span>
            <span className={styles.span}>Events</span>
            <span className={styles.span}>Blog</span>
            <span className={styles.span}>Influencers</span>
            <span className={styles.span}>Affiliates</span>
            <span className={styles.span}>Podcast</span>
            <span className={styles.span}>Invite a Friend</span>
            <span className={styles.span}>FAQ</span>
            <span className={styles.span}>Community Standards</span>
          </div>
          <div className={styles.item}>
            <h2 className={styles.h2}>Business</h2>
            <span className={styles.span}>About Business</span>
            <span className={styles.span}>RetroCraft Business</span>
            <span className={styles.span}>Certified</span>
            <span className={styles.span}>ClearVoice</span>
            <span className={styles.span}>Working Not Working</span>
            <span className={styles.span}>Contact Sales</span>
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <h2>RetroCraft.</h2>
            <span className={styles.lspan}>© RetroCraft International Lid. 2025</span>
          </div>
          <div className={styles.right}>
            <div className={styles.social}>
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="insta" />
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="twitter" />
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="facebook" />
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="linkedin" />
            </div>
            <div className={styles.link}>
              <img className={styles.img} src="https://cdn-icons-png.flaticon.com/128/10867/10867773.png" alt="language" />
              <span>English</span>
            </div>
            <div className={styles.link}>
              <img src="https://cdn-icons-png.flaticon.com/128/10567/10567311.png" alt="coin" height={17} />
              <span>INR</span>
            </div>
            <img src="https://cdn-icons-png.flaticon.com/128/668/668274.png" alt="accessibilty" height={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer