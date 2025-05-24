import hotel from '../pages/HomePage/img/hotel.jpg';

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__stripe">
        <div className="container">
          <h1>Hotel Stříbrava</h1>
          <p className="lead">
            Rodinný hotel v malebné krajině Českého středohoří
          </p>
        </div>
        <img src={hotel} alt="Hotel" />
      </div>
    </div>
  );
}