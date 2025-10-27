import Image from "next/image";
import styles from "./index.module.css";

export default function Header({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
