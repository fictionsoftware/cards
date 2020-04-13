import React, { FC } from 'react';
import { animated as a, useSpring } from 'react-spring';

import CSS from 'csstype';
import { RotationType } from '../../models';
import clsx from 'clsx';
import styles from './index.module.scss';

interface Props {
    flipped: boolean;
    direction: RotationType;
    style?: CSS.Properties;
    className?: string;
}

export const Flippable: FC<Props> = ({ flipped, direction, style, className, children }) => {
    const axis = direction === RotationType.HORIZONTAL ? 'Y' : 'X';
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(300px) rotate${axis}(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
      });

    const resolveClassName = clsx(styles.outer, className !== undefined && className);

    return (
        <div className={ resolveClassName } style={{...style}}>
            <a.div
                className={styles.flippable}
                style={{ zIndex: flipped ? 1 : 2, opacity: opacity.interpolate((o: number) => 1 - o), transform }}
            >
                {children?.[0] ?? null}
            </a.div>
            <a.div
                className={styles.flippable}
                style={{ zIndex: flipped ? 2 : 1, opacity, transform: transform.interpolate(t => `${t} rotate${axis}(180deg)`) }}
            >
                {children?.[1] ?? null}
            </a.div>
        </div>
    );
};