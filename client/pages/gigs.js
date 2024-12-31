import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Gigs.module.css'
import GigCard from '@/components/GigCard/gigCard';
// import { gigsdata } from './api/data';
import { useQuery } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';
import { useRouter } from 'next/router';
import queryString from 'query-string';
// import { useLocation } from 'react-router-dom';

const Gigs = () => {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const router = useRouter();
  const { query } = router;

  const queryStringified = "?" + queryString.stringify(query);

  console.log(queryStringified);
  // const location = useLocation();

  console.log(router.query);

  // const queryString = `?min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      newRequest.get(`/gigs`).then(res => {
        return res.data;
      })
  })

  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className={styles.gigs}>
      <div className={styles.container}>
        <span className={styles.loc}>RetroCraft &gt; GRAPHICS & DESIGN &gt; </span>
        <h1>AI Artists</h1>
        <p className={styles.p}>
          Explore the boundaries of Art and Technology with RetroCraft's AI Artists
        </p>
        <div className={styles.menu}>
          <div className={styles.left}>
            <span>Budget</span>
            <input className={styles.input} ref={minRef} type="text" placeholder="min" />
            <input className={styles.input} ref={maxRef} type="text" placeholder="max" />
            <button className={styles.btn} onClick={apply}>Apply</button>
          </div>
          <div className={styles.right}>
            <span className={styles.sortBy}>Sort By:</span>
            <span className={styles.sortType}>{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img className={styles.downImg} src="https://cdn-icons-png.flaticon.com/128/2951/2951226.png" alt="down" onClick={() => setOpen(!open)} />
            {open && <div className={styles.rightMenu}>
              {sort === "sales" ? (
                <span className={styles.opt} onClick={() => reSort("createdAt")}>Newest</span>
              ) : (
                <span className={styles.opt} onClick={() => reSort("sales")}>Best Selling</span>
              )}
            </div>}
          </div>
        </div>
        <div className={styles.cards}>
          {isLoading ? "loading" : error ? "Something went wrong!" : data.map(gig => (
            <GigCard key={gig._id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs