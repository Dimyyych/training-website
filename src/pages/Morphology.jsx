function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Сурикати — це невеликі ссавці з короткою шерстю пісочного або сірого кольору, з темними плямами навколо очей. Вони мають довгий тонкий хвіст, який часто тримають вертикально, та маленькі вуха.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла 25—35 см, довжина хвоста 17—25 см, вага 0,6—1 кг.</li>
            <li>Передні лапи мають довгі кігті, пристосовані для риття нір.</li>
            <li>Очі великі з темними "окулярами", що захищають від сонця; вуха маленькі, можуть закриватися під час копання.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="../images/meerkat-photo1.jpg" alt="Сурикати на варті" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Родина сурикатів</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;