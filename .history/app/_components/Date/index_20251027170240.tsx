import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  date: string;
};

export default function Category({ category }: Props) {
  return <span className={styles.tag}>{category.name}</span>;
}
