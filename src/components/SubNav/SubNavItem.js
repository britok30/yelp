import React from 'react';
import styles from './SubNavItem.module.css';

const SubNavItem = ({ label, icon, showRightBorder }) => {
    const borderClass = showRightBorder ? styles['right-border'] : '';
    return (
        <div className="dropdown">
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button
                        className={`button ${borderClass}`}
                        aria-haspopup="true"
                        aria-controls="dropdown-menu4"
                    >
                        <span className={`icon is-small ${styles.icon}`}>
                            <i className={`fas ${icon}`}></i>
                        </span>
                        <span className={styles.label}>{label}</span>
                        <span className={`icon is-small ${styles.icon}`}>
                            <i
                                className="fas fa-angle-down"
                                aria-hidden="true"
                            ></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <p>Findbooks {label}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNavItem;
