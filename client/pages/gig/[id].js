import React from 'react'
import styles from '@/styles/Gig.module.css'
import { useQuery } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';
import { useRouter } from 'next/router';
import Reviews from '@/components/Reviews/Reviews';

const Gig = () => {

  const router = useRouter();
  const id = router.query.id;

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then(res => {
        return res.data;
      }),
      enabled: !!id,
  })

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then(res => {
        return res.data;
      }),
      enabled: !!data?.userId,
  })

  return (
    <div className={styles.gig}>
      {isLoading ? "loading..." : error ? "Something went wrong!" : <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.loc}>RetroCraft &gt; GRAPHICS & DESIGN &gt; </span>
          <h1>{data.title}</h1>
          {isLoadingUser ? "loading..." : errorUser ? "Something went wrong!" : <div className={styles.user}>
            <img className={styles.pp} src={dataUser.img || "https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350-300x300.jpg"} alt="" />
            <span className={styles.username}>{dataUser.username}</span>
            {! isNaN(data.totalStars / data.starNumber) && <div className={styles.stars}>
              {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => (
              <img src="/star.png" alt="" width={14} key={i} />
              ))}
              <span className={styles.span1}>{Math.round(data.totalStars / data.starNumber)}</span>
            </div>
            }
          </div>}
          <div className={styles.img1}>
            <img src={data.images[0]} alt="" />
          </div>
          <h2>About This Gig</h2>
          <p className={styles.p}>{data.desc}</p>
          {isLoadingUser ? "loading..." : errorUser ? "Something went wrong!" : <div className={styles.seller}>
            <h2>About The Seller</h2>
            <div className={styles.user}>
              <img className={styles.pp} src={dataUser.img || "https://www.webinarleads4you.com/wp-content/uploads/2017/02/no-avatar-350x350-300x300.jpg"} alt="" width={14} />
              <div className={styles.info}>
                <span>{dataUser.username}</span>
                {! isNaN(data.totalStars / data.starNumber) && 
                  <div className={styles.stars}>
                  {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => (
                    <img src="/star.png" alt="" width={14} key={i} />
                  ))}
                  <span className={styles.span1}>{Math.round(data.totalStars / data.starNumber)}</span>
                </div>
                }
                <button className={styles.btn}>Contact Me</button>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.items}>
                <div className={styles.item}>
                  <div className={styles.title}>From</div>
                  <div className={styles.desc}>{dataUser.country}</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>Member Since</div>
                  <div className={styles.desc}>Oct 2022</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>Avg. Response Time</div>
                  <div className={styles.desc}>4 hours</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>Last Delivery</div>
                  <div className={styles.desc}>1 day</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.title}>Languages</div>
                  <div className={styles.desc}>English, Hindi</div>
                </div>
              </div>
              <hr className={styles.hr} />
              <p className={styles.p}>{data.desc}</p>
            </div>
          </div>}
          <Reviews gigId={id}/>
        </div>
        <div className={styles.right}>
          <div className={styles.price}>
            <h3>{data.shortTitle}</h3>
            <h2>$ {data.price}</h2>
          </div>
          <p className={styles.pr}>
            {data.shortDesc}
          </p>
          <div className={styles.details}>
            <div className={styles.itemr}>
              <img src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png" alt="" height={18} />
              <span>{data.deliveryTime} Days Delivery</span>
            </div>
            <div className={styles.itemr}>
              <img src="https://cdn-icons-png.flaticon.com/128/1265/1265659.png" alt="" height={18} />
              <span>{data.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className={styles.features}>
            {data.features.map((feature) => (
              <div className={styles.itemr1} key={feature}>
                <img src="https://cdn-icons-png.flaticon.com/128/5290/5290076.png" alt="" width={10} />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <button className={styles.btn2}>Continue</button>
        </div>
      </div>}
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  const response = await newRequest.get(`/gigs/single/${id}`);
  const data = response.data;

  return {
    props: { data },
  };
};

export default Gig