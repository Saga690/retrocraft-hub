import React, { useEffect, useReducer, useState } from 'react'
import styles from '@/styles/Add.module.css'
import { gigReducer, INITIAL_STATE } from '@/reducers/gigReducer'
import upload from '@/utils/upload';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '@/utils/newRequest';
import { useRouter } from 'next/router';

const Add = () => {

  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      dispatch({
        type: "CHANGE_INPUT",
        payload: { name: "userId", value: currentUser._id },
      });
    }
  }, []);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async file => {
          const url = await upload(file);
          return url;
        })
      )

      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);

  const router = useRouter();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"])
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    router.push('/mygigs');
  }

  return (
    <div className={styles.add}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Add New Gig</h1>
        <div className={styles.sections}>
          <div className={styles.left}>
            <label className={styles.label} htmlFor="">Title</label>
            <input className={styles.input} name='title' type="text" placeholder='e.g. I will do something I am really good at' onChange={handleChange} required />
            <label className={styles.label} htmlFor="">Category</label>
            <select className={styles.select} name="cat" id="cat" onChange={handleChange}>
              <option value="design">Movie Website Development</option>
              <option value="webd">Modelling</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className={styles.images}>
              <div className={styles.imagesInputs}>
                <label className={styles.label} htmlFor="">Cover Image</label>
                <input className={styles.input} type="file" onChange={e => setSingleFile(e.target.files[0])} />
                <label className={styles.label} htmlFor="">Upload Images</label>
                <input className={styles.input} type="file" multiple onChange={e => setFiles(e.target.files)} />
              </div>
              <button className={styles.btn} onClick={handleUpload}>{uploading ? "uploading..." : "Upload"}</button>
            </div>
            <label className={styles.label} htmlFor="">Description</label>
            <textarea className={styles.textarea} name="desc" id="desc" cols="30" rows="16" placeholder='Brief description to introduce your service to customers' onChange={handleChange} required></textarea>
            <button className={styles.btn} onClick={handleSubmit}>Create</button>
          </div>
          <div className={styles.right}>
            <label className={styles.label} htmlFor="">Service Title</label>
            <input className={styles.input} type="text" name='shortTitle' placeholder='e.g. One-page web design' onChange={handleChange} required />
            <label className={styles.label} htmlFor="">Short Description</label>
            <textarea className={styles.textarea} name="shortDesc" id="shortDesc" cols="30" rows="10" placeholder='Short description of your Service' onChange={handleChange} required></textarea>
            <label className={styles.label} htmlFor="">Delivery Time(e.g. 3 days)</label>
            <input className={styles.input} name='deliveryTime' type="number" min={1} onChange={handleChange} />
            <label className={styles.label} htmlFor="">Revision Number</label>
            <input className={styles.input} name='revisionNumber' type="number" min={1} onChange={handleChange} />
            <label className={styles.label} htmlFor="">Add Features</label>
            <form action="" className={styles.addfeat} onSubmit={handleFeature}>
              <input className={styles.input} type="text" placeholder='e.g. Page Design' />
              <button className={styles.btn} type='submit'>Add</button>
            </form>
            <div className={styles.addedFeatures}>
              {state?.features?.map(f => (
                <div className={styles.item} key={f}>
                  <button className={styles.featurebtn} onClick={() => dispatch({ type: "REMOVE_FEATURE", payload: f })}>
                    {f}
                    <span className={styles.delspan}>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label className={styles.label} htmlFor="">Price</label>
            <input className={styles.input} type="number" name='price' min={1} onChange={handleChange} required />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add