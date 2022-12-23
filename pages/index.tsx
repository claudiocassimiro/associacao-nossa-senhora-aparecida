import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../utils/helpers";
import SwiperAboutUs from "../components/SwiperAboutUs";
import AboutEvent from "../components/AboutEvent";
import SwiperBingoPrize from "../components/SwiperBingoPrize";
import BuyYourCardButton from "../components/BuyYourCardButton";
import Head from "next/head";
import { GiPartyPopper } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { FaChild, FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Home() {
  const { isDesktop } = useWindowSize();
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Associação Nossa Senhora Aparecida - Venha Participar Do Nosso Bingo
          Beneficente!
        </title>
        <meta name="description" content="Associação para fins Beneficentes" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.HomeAssociationLogoContainer}>
          <Image
            src="/images/logo-associacao-768x282.png"
            alt="logo da associação"
            width={isDesktop ? 768 : 300}
            height={isDesktop ? 282 : 143}
          />
          <GiHamburgerMenu
            onClick={() => setShowMenu(!showMenu)}
            size={32}
            className={styles.HomeMenuButton}
          />
        </div>
        {showMenu ? (
          <div className={styles.HomeMenu}>
            <a
              className={styles.HomeMenuItem}
              onClick={() => router.push("/about-us")}
            >
              Quem Somos
            </a>
            <a
              className={styles.HomeMenuItem}
              onClick={() => router.push("/regulation")}
            >
              Regulamento
            </a>
            <a
              href="https://www.instagram.com/bola10solidario/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
              className={styles.HomeMenuItem}
            >
              <AiOutlineInstagram size="20" />
              <p className={styles.socialLink}>Instagram</p>
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=5581974002486&text=Ol%c3%a1%2c%20gostaria%20de%20informa%c3%a7%c3%b5es%20a%20respeito%20do%20bingo!`}
              target="_blank"
              rel="noreferrer"
              className={styles.HomeMenuItem}
            >
              <AiOutlineWhatsApp size="20" />
              <p className={styles.socialLink}>WhatsApp</p>
            </a>
            <a
              href="https://pt-br.facebook.com/people/Associa%C3%A7%C3%A3o-Nossa-Senhora-Aparecida/100085310482679/"
              target="_blank"
              rel="noreferrer"
              className={styles.HomeMenuItem}
            >
              <AiOutlineFacebook size="20" />
              <p className={styles.socialLink}>Facebook</p>
            </a>
            <a
              href="https://www.youtube.com/channel/UCNxEoY00hlrtkmezPDqMJxw"
              target="_blank"
              rel="noreferrer"
              className={styles.HomeMenuItem}
            >
              <AiOutlineYoutube size="20" />
              <p className={styles.socialLink}>YouTube</p>
            </a>
          </div>
        ) : null}
        <div className={styles.HomeHeroContainer}>
          <h1 className={styles.HomeHeroTitle}>
            Venha Participar do Nosso Bingo Beneficente!
          </h1>
          <BuyYourCardButton />
        </div>
        <SwiperAboutUs />
        <BuyYourCardButton />
        <AboutEvent />
        <BuyYourCardButton />
        <SwiperBingoPrize />
        <BuyYourCardButton />
        <div className={styles.HomeContainerMoreInfos}>
          <Image
            src="/images/logo-associacao-768x282.png"
            alt="logo da associação"
            width={260}
            height={120}
          />
        </div>
        <div className={styles.HomeContainerInfos}>
          <span className={styles.HomeContainerIconAndText}>
            <GiPartyPopper size="20" />
            <p className={styles.HomeInfoText}>
              Venha fazer parte da nossa festa!
            </p>
          </span>
          <span className={styles.HomeContainerIconAndText}>
            <GrStatusGood size="20" />
            <p className={styles.HomeInfoText}>Bingo Beneficente</p>
          </span>
          <span className={styles.HomeContainerIconAndText}>
            <FaChild size="20" />
            <p className={styles.HomeInfoText}>
              Festa das Crianças e Natal Solidário
            </p>
          </span>
          <span className={styles.HomeContainerIconAndText}>
            <HiLocationMarker size="20" />
            <p className={styles.HomeInfoText}>Chácara do Gaúcho</p>
          </span>
          <span className={styles.HomeContainerIconAndText}>
            <FaPhoneAlt size="15" />
            <p className={styles.HomeInfoText}>(81) 99177-5580</p>
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
