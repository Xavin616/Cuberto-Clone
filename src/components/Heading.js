import React from 'react'
import styles from '../styles/Heading.module.css'

function Heading() {
  return (
      <>
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h2 className={styles.cube}>cuberto</h2>
                </div>
                <div className={styles.menu}>
                    <div className={styles.menuItem}>
                        <span className={styles.menuword}>
                            our showreel
                        </span>
                    </div>
                    <div className={styles.menuItem}>
                        <span className={styles.menuword}>
                            menu
                        </span>
                    </div>
                    <div className={styles.menuItem}>
                        <span className={styles.menuword}>
                            icon
                        </span>
                    </div>
                </div>
            </nav>
        </header>
        <div className={styles.body}>
            <span className={styles.happen}>We make it happen</span>
            <div className={styles.main}>
                <h3 className={styles.word}>
                    Websites
                </h3>
                <h3 className={styles.word}>
                    Apps
                </h3>
                <h3 className={styles.word}>
                    Branding
                </h3>
            </div>
        </div>
        <div className={styles.body}>
            <p className={styles.essay}>
            Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
            </p>
        </div>
      </>
  )
}

export default Heading