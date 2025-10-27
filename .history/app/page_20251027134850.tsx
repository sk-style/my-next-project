import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.top}>
      <div>
        <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
        <p className={styles.description}>私たちは市場を</p>
      </div>
      <Image
        className={styles.bgimg}
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
      />
    </section>
    <section className={styles.news}>
                    <h2 className={styles.newsTitle}>News</h2>
                    <NewsLink news={data.contents} />
                    <div className={styles.newsLink}>
                        <ButtonLink href="/news">もっとみる</ButtonLink>
                    </div>
                </section>
  );
}
