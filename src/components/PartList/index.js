import React from "react";

function PartList({name, images, setImage}) {
// console.log("setImage ",setImage);
// console.log("name",name)
// console.log("image", images)
    const handleImageChange = (event) => {
        console.log(event);
        // setImage(name, image)
      }
  return (
    <div>
      <h2>{name}</h2>
      <div className="list">
        {images.map((image,index) => {
            // console.log("image",image)
          return (
            <div key={index} onClick={handleImageChange}>
              <img src={image} alt=""/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PartList;
