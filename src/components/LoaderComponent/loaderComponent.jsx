/* eslint-disable no-unused-vars */

import React from 'react';
import { Watch } from 'react-loader-spinner';
import styles from "./loaderComponent.module.css"


const MyLoader = () => {
  return (
    <div className={styles.loaderPosition}>
      <Watch
        height="300"
        width="300"
        radius="48"
        color="#e581ee"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default MyLoader;






