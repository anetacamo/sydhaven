import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  children: React.ReactNode;
}

export default function Paragraph({ children }: ParagraphProps) {
  return <p className={styles.paragraph}>{children}</p>;
}