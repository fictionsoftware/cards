import React, { FC } from 'react';

import CSS from 'csstype';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
    numOfPages: number;
    currentPage: number;
    onPageSelect?: (index: number) => void;
    style?: CSS.Properties;
    className?: string;
}

export const PaginationDots: FC<Props> = ({ numOfPages, currentPage, onPageSelect, style, className }) => {
    const resolveStyle = (index: number) => index === currentPage ? styles.page__active : styles.page__inactive;
    const resolveClassName = clsx(styles.PaginationDots, className !== undefined && className);

    const handleClick = (index: number) => {
        if (onPageSelect) {
            onPageSelect(index);
        }
    }

    return (
        <div className={resolveClassName} style={{...style}}>
            {
                numOfPages > 1 ? 
                    Array(numOfPages).fill(null)
                        .map((_, index) => (
                            <div
                                className={resolveStyle(index)}
                                key={index}
                                onClick={() => handleClick(index)}
                            />
                        ))
                : null
            }
        </div>
    )
}