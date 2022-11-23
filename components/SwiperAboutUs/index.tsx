import styles from "./styles.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { handleImageSize } from "../../utils/helpers";

export default function SwiperAboutUs() {
  return (
    <div className={styles.SwiperAboutUsContainer}>
      <h2 className={styles.SwiperAboutUsTitle}>Nossas Ações</h2>
      <div className={styles.SwiperSwiperContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.SwiperSwiper}
        >
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagens-evento-1.jpeg"
              alt="Imagens do ultimo evento acontecido"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagens-evento-2.jpeg"
              alt="Imagens do ultimo evento acontecido"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagens-evento-3.jpeg"
              alt="Imagens do ultimo evento acontecido"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagens-evento-4.jpeg"
              alt="Imagens do ultimo evento acontecido"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
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
  );
}