import React from "react";
import Footer from "../components/Footer/FooterComponent";
import styles from "./MainLayout.module.css"

import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.mainStyle}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;