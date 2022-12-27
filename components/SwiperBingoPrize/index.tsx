import styles from "./styles.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { handleImageSize } from "../../utils/helpers";

export default function SwiperBingoPrize() {
  return (
    <div className={styles.SwiperBingoPrizeContainer}>
      <h2 className={styles.SwiperBingoPrizeTitle}>Prêmio do Bingo</h2>
      <div className={styles.SwiperSwiperContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={styles.SwiperSwiper}
        >
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-1.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-2.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-3.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-4.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-5.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-6.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-7.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-8.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSwiperSlide}>
            <Image
              src="/images/imagem-premio-9.jpeg"
              alt="Imagens do premio do bingo"
              width={handleImageSize().width}
              height={handleImageSize().height}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
