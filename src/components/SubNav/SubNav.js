import React from 'react';
import SubNavItem from './SubNavItem';
import styles from './SubNav.module.css';

const SubNav = () => {
    return (
        <div className={styles.container}>
            <div className={styles['sub-nav']}>
                <div>
                    <SubNavItem label="Restaurant" icon="fa-utensils" />
                    <SubNavItem label="Home Services" icon="fa-home" />
                    <SubNavItem label="Auto Services" icon="fa-car" />
                    <SubNavItem label="More" icon="fa-plus" showRightBorder />
                </div>
                <div>
                    <button className="button">
                        <span className={`icon ${styles.icon}`}>
                            <i className="fas fa-pen"></i>
                        </span>
                        <span className={styles.label}>Write a Review</span>
                    </button>
                    <button className="button">
                        <span className={`icon ${styles.icon}`}>
                            <i className="fas fa-hotel"></i>
                        </span>
                        <span className={styles.label}>For Businesses</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
