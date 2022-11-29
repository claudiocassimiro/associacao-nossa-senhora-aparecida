import styles from "./styles.module.css";

export default function AboutUs() {
  return (
    <div className={styles.AboutUsContainer}>
      <h2 className={styles.AboutUsTitle}>Quem Somos</h2>
      <p className={styles.AboutUsText}>
        Somos uma entidade com fins filantrópicos, e nossa história fala por si
        só. Realizamos a famosa festa das crianças e o natal solidário desde
        2008. A festa já nasceu grande, mas com o passar dos anos se transformou
        em uma mega festa. Como você pode ver, nos depoimentos, fotos, e vídeos
        em nosso site, atendemos mais de 10 mil crianças, adolescentes, pais e
        mães com uma estrutura montada na chácara para aproximadamente 20 mil
        pessoas, sem contar que neste dia também realizamos a missa campal. No
        natal solidário sempre saímos para alegrar as crianças distribuindo
        brinquedos e muita alegria. Desta forma, com muita transparência e
        profissionalismo, comprometidos de forma ética, somos uma família
        religiosa, dedicada e temente a Deus, acreditamos em um mundo melhor
        para todos, e acreditamos também que cada um pode fazer algo para seu
        semelhante, sempre com alegria e bom humor.
      </p>
      <p className={styles.AboutUsText}>
        Como a festa cresceu, hoje é quase impossível realizá-la, devido aos
        altos custos com as demandas e quantidades de crianças para atendermos,
        e é por este motivo que estamos realizando este bingo para levantar
        fundos para o evento. Faça sua parte, contribua com o natal solidário
        comprando a sua cartela.
      </p>
    </div>
  );
}
