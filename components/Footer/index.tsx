import styles from "./styles.module.css";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineYoutube,
} from "react-icons/ai";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={styles.containerImageAndLinkElements}>
        <Image
          src="/images/logo-associacao-768x282.png"
          alt="logo da associação"
          width={120}
          height={50}
        />
        <div className={styles.containerLinkElements}>
          <a
            className={styles.textLink}
            onClick={() => router.push("/about-us")}
          >
            Quem Somos
          </a>
          <a
            className={styles.textLink}
            onClick={() => router.push("/regulation")}
          >
            Regulamento
          </a>
        </div>
      </div>
      <div className={styles.containerSocialLinks}>
        <a
          href="https://www.instagram.com/bola10solidario/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
          rel="noreferrer"
          className={styles.socialContainer}
        >
          <AiOutlineInstagram size="20" />
          <p className={styles.socialLink}>Instagram</p>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className={styles.socialContainer}
        >
          <AiOutlineWhatsApp size="20" />
          <p className={styles.socialLink}>WhatsApp</p>
        </a>
        <a
          href="https://pt-br.facebook.com/people/Associa%C3%A7%C3%A3o-Nossa-Senhora-Aparecida/100085310482679/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialContainer}
        >
          <AiOutlineFacebook size="20" />
          <p className={styles.socialLink}>Facebook</p>
        </a>
        <a
          href="https://www.youtube.com/@tvportodegalinhas9165"
          target="_blank"
          rel="noreferrer"
          className={styles.socialContainer}
        >
          <AiOutlineYoutube size="20" />
          <p className={styles.socialLink}>YouTube</p>
        </a>
      </div>
    </footer>
  );
}
