import { ReactNode } from "react";
import styles from "./ImageSection.module.scss";

interface ImageSectionProps {
  background?: string;
  children?: ReactNode;
}

export default function ImageSection({
  background,
  children,
}: ImageSectionProps) {
  return (
    <section
      className={styles.image}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {children}
    </section>
  );
}
