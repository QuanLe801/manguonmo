import Image from 'next/image';
import styles from './page.module.css';
import BlogListingContainer from './container/Blog-listing-container/Blog-listing-container';

export default function Home() {
  return (
    <div>
      <BlogListingContainer />
    </div>
  );
}
