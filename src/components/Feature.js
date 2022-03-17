import nico from '../nico.jpg'
import React from 'react'
import styles from '../styles/Feature.module.css'

function Feature() {
  return (
    <div className={styles.feature}>
        <div className={styles.body}>
            <div className={styles.heading}>
                <p className={styles.p}>featured</p>
                <p className={styles.p}><span className={styles.p2}>projects</span></p>
            </div>
        </div>
        <div className={styles.catalog}>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.wordings}>
                        <div className={styles.header}>
                            Lorem
                        </div>
                        <div className={styles.itemBody}>
                            <h3>
                                Rapidiously redefine ubiquitous strategic theme areas.
                            </h3>
                        </div>
                        <div className={styles.tag}>
                            <h4 className={styles.tagword}>
                                development, product, branding, design 
                            </h4>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={nico} alt="images" />
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.wordings}>
                        <div className={styles.header}>
                            Lorem
                        </div>
                        <div className={styles.itemBody}>
                            <h3>
                                Rapidiously redefine ubiquitous strategic theme areas.
                            </h3>
                        </div>
                        <div className={styles.tag}>
                            <h4 className={styles.tagword}>
                                development, product, branding, design 
                            </h4>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={nico} alt="images" />
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.wordings}>
                        <div className={styles.header}>
                            Lorem
                        </div>
                        <div className={styles.itemBody}>
                            <h3>
                                Rapidiously redefine ubiquitous strategic theme areas.
                            </h3>
                        </div>
                        <div className={styles.tag}>
                            <h4 className={styles.tagword}>
                                development, product, branding, design 
                            </h4>
                        </div>
                    </div>
                    <div className={styles.image}>
                        <img src={nico} alt="images" />
                    </div>
                </div>
            </div>
            <button className={styles.view}>View all projects</button>
        </div>
    </div>
  )
}

export default Feature