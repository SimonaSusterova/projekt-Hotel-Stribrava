import mapa from '../pages/HomePage/img/mapa.png';

export const FinalSection = () => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <div className="columns">
          <h2>Kontakt</h2>
          <p>
            Hotel Stříbrava<br></br>
            Ke kamenné lávce 12<br></br>
            317 24 Libnice nad Stříbravou
          </p>
          <a href="mailto:recepce@hotelstribrava.cz">recepce@hotelstribrava.cz</a>
        </div>
        <img src={mapa} alt="Mapa" />
      </div>
    </section>
  );
}
