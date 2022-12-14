import { ReactNode } from 'react';
import styles from './ImageSection.module.scss';

interface ImageSectionProps {
  background?: string;
  children?: ReactNode;
  overlay?: boolean;
  full?: boolean;
  invert?: boolean;
}

export default function ImageSection({
  background,
  children,
  overlay,
  full,
  invert,
}: ImageSectionProps) {
  return (
    <section
      className={`${styles.image} ${full && styles.full} ${
        invert && styles.invert
      }`}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {overlay && <div className={styles.blackOverlay}></div>}
      <div className={styles.textContainer}>{children}</div>
    </section>
  );
}
