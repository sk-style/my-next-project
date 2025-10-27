import Image from "next/image";

import styles from "./index.module.css";

type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdAt: string;
};

type Props = {
  news: News[];
}

export default function NewsList({ news})