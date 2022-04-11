import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.not_found__container}>
            <h2 className={styles.not_found__h}>404 Error !</h2>
            <p className={styles.not_found__para}>Your desire link not found.</p>
        </div>
    )
}

export default NotFound