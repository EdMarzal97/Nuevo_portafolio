import Header from "@/Componentes/Header";
import styles from "../styles/core.module.css"


export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.contents}>
        <h1>About me</h1>
        <h1>My projects</h1>
        <h1>Footer</h1>
      </div>
      
    </>
  )
}
