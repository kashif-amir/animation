import React, { useState } from "react";
import "./Categorey.css";
import character from "../../Data/character";

const Catergories = () => {
  const [designs, setDesigns] = useState(character);

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
      console.log(subCategories);
      setDesigns(subCategories);
      return;
    }
    setDesigns(character);
  };

  console.log(designs);

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
        {designs &&
          designs?.map((design) => {
            return (
              <div>
                <div className="image-container">
                  {design?.data?.map((dta) => {
                    return (
                      <div className="combine-img">
                        <img
                          src={dta?.image?.src}
                          alt="animation"
                          className="character-img"
                        />
                      </div>
                    );
                  })}
                </div>

                <video loop autoPlay className="character-img">
                  <source src={design?.video?.src} type="video/mp4" />
                </video>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Catergories;
