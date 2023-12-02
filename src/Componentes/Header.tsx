import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.contents}>
          <h1>
            Edward S. Marzal
          </h1>
          <div className={styles.buttons}>
              <h2>Software Engineer</h2>
          </div>
          <div className={styles.buttons}>
            <button> <a href="/Edward Marzal resume.pdf" download="Edward Marzal resume"> Download my resume </a> </button>
          </div>
        </div>
        <video src={require("../../public/video.mp4")} autoPlay muted loop className={styles.video} />
      </main>
    </>
  );
};

export default Header;
