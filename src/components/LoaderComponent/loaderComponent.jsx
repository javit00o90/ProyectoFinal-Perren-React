/* eslint-disable no-unused-vars */

import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';



import styles from "./loaderComponent.module.css";

const MyLoader = () => {
  const numLoaders = 4;

  return (
    <div className="row">
      {Array.from({ length: numLoaders }, (_, index) => (
        <div
          key={index} // Add a unique key to each loader
        //   className={styles.skeletonBody}
          className="col-md-2 mb-2 m-3"
          >
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={250}
            height={250}        />
            <br />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={80}
            height={15}        />
            <br />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={250}
            height={10}        />
            <br />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={250}
            height={10}        />
            <br />
          <Skeleton
            sx={{ bgcolor: 'grey.900' }}
            variant="rectangular"
            width={50}
            height={20}       />
        </div>
      ))}
    </div>
  );
}

export default MyLoader;






