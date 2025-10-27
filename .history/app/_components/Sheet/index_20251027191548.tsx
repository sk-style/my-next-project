import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export default function Sheet({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
