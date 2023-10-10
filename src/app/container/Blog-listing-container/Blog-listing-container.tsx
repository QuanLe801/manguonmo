import CardBlogItem from '@/app/components/Card-blog-item/Card-blog-item';
import React from 'react';
import styles from './styles.module.css';

function BlogListingContainer() {
  return (
    <div className={styles.blogListingWrapper}>
      <CardBlogItem />
      <CardBlogItem />
      <CardBlogItem />
      <CardBlogItem />
    </div>
  );
}

export default BlogListingContainer;
