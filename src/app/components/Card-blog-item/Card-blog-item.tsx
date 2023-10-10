import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

function CardBlogItem() {
  return (
    <div className={styles.cardWrapper}>
      <Image
        src={'/blog-thumbnail.svg'}
        width={360}
        height={240}
        alt=""
        objectFit="cover"
      />
      <div className={styles.cardContent}>
        <div className={styles.cardType}>Technology</div>
        <div className={styles.cardDescription}>
          The Impact of Technology on the Workplace: How Technology is Changing
        </div>
        <div className={styles.cardFooter}>
          <Image
            src={'/profile.svg'}
            width={36}
            height={36}
            alt=""
            objectFit="cover"
            className={styles.profileImage}
          />
          <span className={styles.profileName}>Tracey Wilson</span>
          <span className={styles.createdAt}>August 20, 2022</span>
        </div>
      </div>
    </div>
  );
}

export default CardBlogItem;
