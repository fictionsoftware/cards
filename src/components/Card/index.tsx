import React, { FC } from "react";

import CSS from "csstype";
import { Size } from "../../models";
import clsx from "clsx";
import styles from "./index.module.scss";

interface Props {
  size: Size | number;
  imgUrl?: string;
  imgPosition?: string;
  onImgClick?: () => void;
  imgAlt?: string;
  shadow?: boolean;
  rounded?: boolean;
  style?: CSS.Properties;
  className?: string;
}

export const Card: FC<Props> = ({
  imgUrl,
  imgPosition,
  onImgClick,
  imgAlt,
  size,
  shadow,
  rounded,
  style,
  className,
  children
}) => {
  const resolveClassName = clsx(
    { [styles.shadow]: shadow, [styles.rounded]: rounded },
    styles.Card,
    className !== undefined && className
  );
  const imageStyles = clsx({
    [styles.image__rounded]: rounded,
    [styles.image]: !rounded
  });

  return (
    <div
      className={resolveClassName}
      style={{ ...style, width: size, height: size * 1.5 }}
    >
      {imgUrl ? (
        <div className={imageStyles}>
          <img
            onClick={onImgClick}
            src={imgUrl}
            alt={imgAlt ?? ""}
            style={{
              maxHeight: (size * 1.5) / 2,
              objectPosition: imgPosition ?? "center top"
            }}
          />
        </div>
      ) : null}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
