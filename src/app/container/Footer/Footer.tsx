import React from 'react';
import { FunctionComponent } from 'react';
import styles from './styles.module.css';



const Footer: FunctionComponent = () => {
  return (
      <div className={styles.Footer}>
          <div className={styles.content}>
              <div className={styles.info}>
                  <div className={styles.about}>
                      <div className={styles.about1}>About</div>
                      <div className={styles.desciption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                  </div>
                  <div className={styles.contact}>
                      <div className={styles.email}>
                          <span className={styles.email1}>{`Email : `}</span>
                          <span className={styles.infojstemplatenet}>info@jstemplate.net</span>
                      </div>
                      <div className={styles.email}>
                          <span className={styles.email1}>{`Phone : `}</span>
                          <span className={styles.infojstemplatenet}>880 123 456 789</span>
                      </div>
                  </div>
              </div>
              <div className={styles.link}>
                  <div className={styles.quickLink}>
                      <div className={styles.about1}>Quick Link</div>
                      <div className={styles.linkList}>
                          <div className={styles.email}>Home</div>
                          <div className={styles.email}>About</div>
                          <div className={styles.email}>Blog</div>
                          <div className={styles.email}>Archived</div>
                          <div className={styles.email}>Author</div>
                          <div className={styles.email}>Contact</div>
                      </div>
                  </div>
                  <div className={styles.quickLink}>
                      <div className={styles.about1}>Category</div>
                      <div className={styles.linkList}>
                          <div className={styles.email}>Lifestyle</div>
                          <div className={styles.email}>Technology</div>
                          <div className={styles.email}>Travel</div>
                          <div className={styles.email}>Business</div>
                          <div className={styles.email}>Economy</div>
                          <div className={styles.email}>Sports</div>
                      </div>
                  </div>
              </div>
              <div className={styles.mNewsletter}>
                  <div className={styles.heading}>
                      <div className={styles.weeklyNewsletter}>Weekly Newsletter</div>
                      <div className={styles.getBlogArticles1}>Get blog articles and offers via email</div>
                  </div>
                  <div className={styles.form}>
                      <div className={styles.aInput}>
                          <div className={styles.input}>
                              <div className={styles.placeholder}>Your Email</div>
                              <img className={styles.mailIcon1} alt="" src="mail.svg" />
                          </div>
                      </div>
                      <div className={styles.aButton}>
                          <div className={styles.button}>Subscribe</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={styles.copyright}>
              <div className={styles.copyrightInfo}>
                  <img className={styles.logoIcon1} alt="" src="Logo.svg" />
                  <div className={styles.text}>
                      <div className={styles.metablog}>
                          <span>Meta</span>
                          <span className={styles.blog1}>Blog</span>
                      </div>
                      <div className={styles.jsTemplate2023Container}>
                          <span>{`© `}</span>
                          <span className={styles.jsTemplate}>JS Template</span>
                          <span> 2023. All Rights Reserved.</span>
                      </div>
                  </div>
              </div>
              <div className={styles.link1}>
                  <div className={styles.email}>Terms of Use</div>
                  <div className={styles.divider2} />
                  <div className={styles.email}>Privacy Policy</div>
                  <div className={styles.divider2} />
                  <div className={styles.email}>Cookie Policy</div>
              </div>
          </div>
      </div>);
};


export default Footer;
