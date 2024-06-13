import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="Class Connect" className={styles.logo} width="145" height="41"/>
      <p> Building community &#10084;</p>
      <div className={styles.text}>
      
        <p> &copy; 2024 Class Connect</p>
      </div>
    </div>
  );
};

export default Footer;