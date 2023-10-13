import React from 'react';
import { FunctionComponent } from 'react';
import styles from './styles.module.css';

const Header: FunctionComponent = () => {
  return (
      <div className={styles.header}>
          <div className={styles.oNavbar}>
              <div className={styles.logoParent}>
                  <img className={styles.logoIcon} alt="" src="Logo.svg" />
                  <div className={styles.menuParent}>
                      <div className={styles.menu}>
                          <div className={styles.item}>
                              <div className={styles.home}>Home</div>
                          </div>
                          <div className={styles.item}>
                              <div className={styles.home}>Blog</div>
                          </div>
                          <div className={styles.item}>
                              <div className={styles.home}>Single Post</div>
                          </div>
                          <div className={styles.item}>
                              <div className={styles.home}>Pages</div>
                          </div>
                          <div className={styles.item}>
                              <div className={styles.home}>Contact</div>
                          </div>
                      </div>
                      <div className={styles.atomsInputParent}>
                          <div className={styles.atomsInput}>
                              <div className={styles.placeholder}>Search</div>
                              <img className={styles.searchOutlineIcon1} alt="" src="search-outline.svg" />
                          </div>
                          <div className={styles.swich}>
                              <div className={styles.swichChild} />
                              <div className={styles.sunnyWrapper}>
                                  <img className={styles.sunnyIcon1} alt="" src="sunny.svg" />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.oPageInfo}>
              <div className={styles.content}>
                  <div className={styles.pageTitle}>Page TItle</div>
                  <div className={styles.aBreadcrumb}>
                      <div className={styles.home}>Home</div>
                      <div className={styles.linkOne}>
                          <div className={styles.divider1} />
                          <div className={styles.home}>Link One</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>);
};

export default Header;
