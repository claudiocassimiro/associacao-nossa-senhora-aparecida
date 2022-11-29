import Image from "next/image";
import BuyYourCardButton from "../components/BuyYourCardButton";
import styles from "../styles/about-us.module.css";
import { useWindowSize } from "../utils/helpers";
import AboutUsSection from "../components/AboutUsSection";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

export default function AboutUs() {
  const { isDesktop } = useWindowSize();
  const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.AboutUsAssociationLogoContainer}>
        <Image
          src="/images/logo-associacao-768x282.png"
          alt="logo da associação"
          width={isDesktop ? 768 : 300}
          height={isDesktop ? 282 : 143}
        />
      </div>
      <AboutUsSection />
      <div className={styles.AboutUsHeroContainer}>
        <h1 className={styles.AboutUsHeroTitle}>
          Venha Participar do Nosso Bingo Beneficente!
        </h1>
        <BuyYourCardButton />
        <div className={styles.AboutUsContainerBackButton}>
          <BiArrowBack size={20} />
          <a
            className={styles.AboutUsBackButton}
            onClick={() => router.push("/")}
          >
            Voltar para pagina inicial
          </a>
        </div>
      </div>
    </main>
  );
}
