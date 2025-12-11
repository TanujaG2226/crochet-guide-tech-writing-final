import { useState } from "react";
import "../App.css";
import self from "../pictures/me-pic.JPEG";
import heart from "../pictures/crochet-heart.JPEG";
import dino from "../pictures/dino.JPEG";
import flowers from "../pictures/flowers.JPEG";
import flask from "../pictures/mini-flask.JPEG";
import angel from "../pictures/sunny-angels.JPEG";

function AboutMe() {
  const photos = [
    { src: heart, alt: "Crochet heart" },
    { src: dino, alt: "Crochet dinosaur plushie" },
    { src: flowers, alt: "Crochet flowers" },
    { src: flask, alt: "Mini crochet flask" },
    { src: angel, alt: "Crochet sunny angels" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-block page-wrapper about-wrapper">
      <h1>About The Author</h1>

      <div className="about-content">
        <div className="about-text">
          <p>
            My name is Tanuja Gunapooti. I am currently a senior at WashU
            studying Business and Computer Science. I have been a crafter all my
            life (I always liked to say my favorite activities are ones with my
            hands). I got into crocheting the summer of 2023 and haven't stopped
            since. I wouldn't consider myself an expert at it but crocheting is
            something I'm super passionate about.
          </p>
          <br />
          <p>
            As I mentioned in the introduction, I really hope that people who
            start crocheting feel comfortable enough to start any craft, just as
            I have. As I crocheted more and more, I realized that there were
            many crafts that I haven't engaged in. Through my friends, I started
            embroidering and bead embroidery in my free time. Recently, I've
            started bedazzling different items for myself and friends. Crafting
            is so much fun and a great way to spend time reflecting.
          </p>
          <br />
        </div>

        <figure className="author-photo">
          <img src={self} alt="Photo of the author" />
        </figure>
      </div>

      {/* PHOTO CAROUSEL */}
      <div className="section-block photo-gallery">
        <div className="carousel">
          <h1>Look at some of my crafting work!</h1>
          <button
            className="carousel-arrow left"
            onClick={handlePrev}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div className="carousel-image-wrapper">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
            />
          </div>

          <button
            className="carousel-arrow right"
            onClick={handleNext}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>

        <p className="carousel-caption">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
