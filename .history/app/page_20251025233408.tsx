import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
      <p className={styles.description}>私たちは市場を</p>
    </>
  );
}
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);