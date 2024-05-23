import { useState } from "react";
import "./relookings.scss";

import relooking1 from "../../assets/images/relookings/relooking1.png";
import relooking2 from "../../assets/images/relookings/relooking2.png";
import relooking3 from "../../assets/images/relookings/relooking3.png";
import relooking4 from "../../assets/images/relookings/relooking4.png";
import relooking5 from "../../assets/images/relookings/relooking5.png";
import relooking6 from "../../assets/images/relookings/relooking6.png";
import relooking7 from "../../assets/images/relookings/relooking7.png";

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
      img_source: relooking1,
    },
    {
      description: "Choupette est trop mimi",
      img_source: relooking2,
    },
    {
      description: "Notre petit peureux",
      img_source: relooking3,
    },
    {
      description: "Un corgi royal",
      img_source: relooking4,
    },
    {
      description: "Frisouille est tout propre",
      img_source: relooking5,
    },
    {
      description: "Maggie adore faire un soin",
      img_source: relooking6,
    },
    {
      description: "Le chouchou à Marie!",
      img_source: relooking7,
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
