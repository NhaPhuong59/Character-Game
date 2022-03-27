import React from "react";
import "./style.scss";

function PartList({ name, images, setImage, selectedImage }) {
  return (
    <div className="part-list-container">
      <div className="title">{name}</div>
      <div className="list-image">
        {images.map((image, index) => {
          return (
            <div
              className={
                selectedImage === image
                  ? "selected image-wrapper"
                  : "image-wrapper"
              }
              key={index}
              onClick={() => setImage(name, image)}
            >
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PartList;
