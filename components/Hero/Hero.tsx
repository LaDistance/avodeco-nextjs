import Button from "components/Button/Button";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.title}>AV&apos;O DÉCO</h1>
        <p className={styles.subtitle}>
          <span>
            Chez AV&apos;O DÉCO, notre principale préoccupation c&apos;est{" "}
            <span className={styles.you}>
              <b>vous</b>
            </span>
            .
          </span>
        </p>
        <Link href="/prestations">
          <Button>Consultez nos services →</Button>
        </Link>
      </div>
      <div className={styles.rightSide}>
        <Image
          src="/amelie_et_vincent.png"
          alt="Amélie et Vincent"
          width={480}
          height={600}
        />
      </div>
    </div>
  );
};
export default Hero;
