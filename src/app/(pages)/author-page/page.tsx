import { FunctionComponent } from 'react';
import styles from './OPageInfo.module.css';

const PageInfo: FunctionComponent = () => {
    return (
        <div className={styles.oPageInfo}>
            <div className={styles.content}>
                <div className={styles.pageTitle}>Page Title</div>
                <div className={styles.aBreadcrumb}>
                    <div className={styles.home}>Home</div>
                    <div className={styles.linkOne}>
                        <div className={styles.divider1} />
                        <div className={styles.home}>Link One</div>
                    </div>
                </div>
            </div>
        </div>);
};

export default PageInfo;