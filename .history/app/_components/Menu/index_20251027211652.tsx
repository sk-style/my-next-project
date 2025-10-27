import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <div>
      
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
      </button>
    </div>
  );
}