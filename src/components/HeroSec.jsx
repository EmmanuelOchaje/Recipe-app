/* eslint-disable no-unused-vars */
import CustomImage from "./CustomImage";

export default function HeroSec() {
  const images = [
    "/images/img1.jpg",
    "/images/img6.jpg",
    "/images/img3.jpg",
    "/images/img3.jpg",
    "/images/img1.jpg",
    "/images/img6.jpg",
    "/images/img1.jpg",
    "/images/img6.jpg",
    "/images/img3.jpg",
  ];
  return (
    <div className="section">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
        <p className="info">
          Tess Kitchen is a place where you can please your soul and tummy with
          delicious food recipes and cuisuine. And our services are absolutely
          free so start exploring
        </p>
        <button className="btn">Explore Now</button>
      </div>
      <div className="col gallery">
        {images.map((src, i) => (
          <CustomImage imgSrc={src} pt={"70%"} key={i} />
        ))}
      </div>
    </div>
  );
}
