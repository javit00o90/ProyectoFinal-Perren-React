import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footerStyle}>
            <footer className="bg-dark page-footer font-small blue pt-4">
                <div className="container-fluid text-center text-md-left">
                    <div>
                        <div className="text-center">
                            <h5 className="text-uppercase">Footer</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, incidunt?.</p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <Link to="/">
                        Sweet Memories
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;