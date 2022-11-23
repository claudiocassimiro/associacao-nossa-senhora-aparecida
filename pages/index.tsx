import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../utils/helpers";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Home() {
  const { isDesktop, isTablet } = useWindowSize();

  const handleImageSize = () => {
    if (isDesktop) {
      return {
        width: 1020,
        height: 660,
      };
    }

    if (isTablet) {
      return {
        width: 760,
        height: 600,
      };
    }

    return {
      width: 320,
      height: 240,
    };
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.HomeAssociationLogoContainer}>
          <Image
            src="/images/logo-associacao-768x282.png"
            alt="logo da associação"
            width={isDesktop ? 768 : 300}
            height={isDesktop ? 282 : 143}
          />
        </div>
        <div className={styles.HomeHeroContainer}>
          <h1 className={styles.HomeHeroTitle}>
            Venha Participar do Nosso Bingo Beneficente!
          </h1>
          <a
            href="https://bola10solidario.com/comprar"
            target="_blanc"
            title="Compre sua Cartela"
            className={styles.HomeBuyButton}
          >
            Compre aqui sua Cartela!
          </a>
        </div>
        <div className={styles.HomeAboutUsContainer}>
          <h2 className={styles.HomeAboutUsTitle}>Nossas Ações</h2>
          <div className={styles.HomeSwiperContainer}>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className={styles.HomeSwiper}
            >
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-1.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-2.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-3.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-4.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-5.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-6.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-7.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
              <SwiperSlide className={styles.HomeSwiperSlide}>
                <Image
                  src="/images/imagens-evento-8.jpeg"
                  alt="Imagens do ultimo evento acontecido"
                  width={handleImageSize().width}
                  height={handleImageSize().height}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <a
          href="https://bola10solidario.com/comprar"
          target="_blanc"
          title="Compre sua Cartela"
          className={styles.HomeBuyButton}
        >
          Compre aqui sua Cartela!
        </a>
      </main>

      <footer className={styles.footer}>
        <h2>Olá footer</h2>
      </footer>
    </div>
  );
}
