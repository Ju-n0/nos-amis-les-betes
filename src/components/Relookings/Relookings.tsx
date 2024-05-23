import { useState } from "react";
import "./relookings.scss";

import { ArrowLeft, ArrowRight } from "react-feather";

function Relookings() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const changePrevSlide = () => {
    setActiveIndex(activeIndex === 0 ? relookingsArray.length - 1 : activeIndex - 1);
  };
  const changeNextSlide = () => {
    setActiveIndex(activeIndex === relookingsArray.length - 1 ? 0 : activeIndex + 1);
  };

  const relookingsArray = [
    {
      description: "Blanc comme neige !",
      img_source: "/relookings/relooking1.png",
    },
    {
      description: "Choupette est trop mimi",
      img_source: "/relookings/relooking2.png",
    },
    {
      description: "Notre petit peureux",
      img_source: "/relookings/relooking3.png",
    },
    {
      description: "Un corgi royal",
      img_source: "/relookings/relooking4.png",
    },
    {
      description: "Frisouille est tout propre",
      img_source: "/relookings/relooking5.png",
    },
    {
      description: "Maggie adore faire un soin",
      img_source: "/relookings/relooking6.png",
    },
    {
      description: "Le chouchou à Marie!",
      img_source: "/relookings/relooking7.png",
    },
  ];
  return (
    <div className="relookings">
      <h2 className="relookings-title">Nos derniers relookings</h2>
      <div className="relookings-container">
        <div className="relookings-carrousel-container">
          <ArrowLeft
            className="arrow"
            onClick={() => {
              changePrevSlide();
            }}
          />
          {relookingsArray.map((image, index) => (
            <div
              key={Math.random().toString().slice(2, 10) + new Date().getTime()}
              className={[
                activeIndex === index ? "carrousel-details " : "carrousel-details hidden",
              ].join(" ")}
            >
              <img src={image.img_source} className="carrousel-img " key={index} alt="" />
              <p className="carrousel-description ">{image.description}</p>
            </div>
          ))}

          <ArrowRight
            className="arrow"
            onClick={() => {
              changeNextSlide();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Relookings;
