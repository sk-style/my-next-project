import styles from "./index.module.css";
import Image from "next/image";
import ButtonLink from "./_components/ButtonLink";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};
