import React from 'react';
import SubNavItem from './SubNavItem';

const SubNav = () => {
    return (
        <div>
            <SubNavItem label="Restaurant" icon="fa-utensils" />
            <SubNavItem label="Home Services" icon="fa-home" />
            <SubNavItem label="Auto Services" icon="fa-car" />
            <SubNavItem label="More" icon="fa-plus" showRightBorder />
        </div>
    );
};

export default SubNav;
