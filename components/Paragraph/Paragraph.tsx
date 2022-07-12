import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  children: React.ReactNode;
  level?: number;
}

export default function Paragraph({ children, level }: ParagraphProps) {
  return (
    <p className={`${styles.paragraph} ${level && "level" + level}`}>
      {children}
    </p>
  );
}
