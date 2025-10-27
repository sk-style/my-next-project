import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <nav className={st)}>
      <ul className={styles.items}>
        <li>
          <Link href="/news">ニュース</Link>
        </li>
        <li>
          <Link href="/members">メンバー</Link>
        </li>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </ul>
      <button className={cx(styles.button, styles.close)} onClick={close}>
        <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
      </button>
    </nav>
  );
}