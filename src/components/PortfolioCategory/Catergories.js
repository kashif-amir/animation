import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Categorey.css";
import character from "../../Data/character";
import { UserContext } from "../../App";

const Catergories = () => {
  const contextvalue = useContext(UserContext);
  const [designs, setDesigns] = useState(character);
  const navigate = useNavigate();

  const displayCharacter = (animation) => {
    if (animation !== "all") {
      const categeory = character.filter((charac) => {
        return charac.categeory === animation;
      });
      var subCategories = [
        { name: categeory[0].subCategory, data: [categeory[0]] },
      ];

      var arr = [];
      categeory.slice(1).forEach((catag) => {
        subCategories.forEach((subCat) => {
          if (catag?.subCategory === subCat?.name) {
            subCat.data = [...subCat.data, catag];
          } else if (catag?.subCategory) {
            !arr.includes(catag.subCategory) &&
              subCategories.push({
                name: catag.subCategory,
                data: [catag],
              });
            arr.push(catag.subCategory);
          }
        });
      });
      setDesigns(subCategories);
      return;
    }
    setDesigns(character);
  };
  

  const allCharacterdisplay = (imgaesData, name) => {
    contextvalue.setAnimation(imgaesData, name);
    navigate(`/view/${imgaesData[0].categeory}/${name}`);
  };

  return (
    <div className="portfolio-category-container">
      <h1 className="portfolio-heading"> My Portfolio</h1>
      <div className="portfolio-category-content">
        <div>
          <p
            className="portfolio-content"
            onClick={() => displayCharacter("all")}
          >
            All
          </p>
        </div>
        <div>
          <p
            onClick={() => displayCharacter("character")}
            className="portfolio-content"
          >
            Character Design
          </p>
        </div>
        <div>
          <p
            onClick={() => displayCharacter("product")}
            className="portfolio-content"
          >
            Product Design
          </p>
        </div>
        <div>
          <p
            onClick={() => displayCharacter("game")}
            className="portfolio-content"
          >
            Game Design
          </p>
        </div>
        <div>
          <p
            onClick={() => displayCharacter("interior and exterior")}
            className="portfolio-content"
          >
            Interior & Exterior Design
          </p>
        </div>
      </div>
      <div className="animations">
        {designs?.map((design) => {
          return (
            <div>
              <div>
                <div className="image-container">
                  {design.subCategory && design?.image && (
                    <img
                      src={design?.image?.src}
                      alt="animation"
                      className="character-img"
                    />
                  )}
                </div>
                <div className="image-container">
                  {design.subCategory && design?.video && (
                    <video loop autoPlay muted={true} className="character-img">
                      <source src={design?.video.src} type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>
              <div>
                <div
                  className="image-container"
                  onClick={() => allCharacterdisplay(design.data, design.name)}
                  >
                  {design?.data && (
                    <img src={design?.data[0].image?.src} alt="animation" className="character-img"/>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Catergories;
