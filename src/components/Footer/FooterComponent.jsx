import styles from "./Footer.module.css";

const Footer = () => {
return(
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
        <a href="http://localhost:5173"> Sweet Memories</a>
    </div>
</footer>
</div>
);
};

export default Footer