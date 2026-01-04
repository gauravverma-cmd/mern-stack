import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.hdr}>
      <h1 className={styles.logo}>CodeM</h1>
      <button className={styles.loginBtn}>Login</button>
    </header>
  )
}

export default Header
