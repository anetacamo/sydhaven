import { useState } from "react";
import ImageSection from "../components/ImageSection/ImageSection";
import { SimpleLayout } from "../layouts/SimpleLayout/SimpleLayout";
import CategoryColors, { categoryColors } from "../types/colors.type";

const Map = () => {
  const title = "Map";
  const [name, setName] = useState("");
  const places = [
    {
      title: "sydhaven",
      top: "15%",
      left: "20%",
      image: "star",
      category: "museum",
    },
    {
      title: "frontloberne",
      top: "35%",
      left: "80%",
      image: "bike",
      category: "movement",
    },
    {
      title: "knuds kiosk",
      top: "5%",
      left: "60%",
      image: "stars",
      category: "studio",
    },
    {
      title: "useStudio",
      top: "65%",
      left: "2%",
      image: "star",
      category: "studio",
    },
    {
      title: "kaospilots",
      top: "85%",
      left: "50%",
      image: "bike",
      category: "movement",
    },
    {
      title: "permasport",
      top: "85%",
      left: "85%",
      image: "bike",
      category: "movement",
    },
    {
      title: "knuds kiosk",
      top: "70%",
      left: "50%",
      image: "stars",
      category: "shop",
    },
  ];

  return (
    <SimpleLayout>
      <div className="map-canvas">
        {places.map((place) => (
          <div
            key={place.title}
            className={`point bg-${categoryColors[place.category]}`}
            //onClick={() => setName(place.title)}
            onMouseEnter={() => setName(place.title)}
            style={{ top: place.top, left: place.left }}
          >
            <img
              src={`/cards/${place.image}.png`}
              alt={`icon`}
              className={`icon`}
            />
            <div
              className={`title bg-${categoryColors[place.category]} ${
                name === place.title ? "opened" : ""
              }`}
            >
              {name === place.title ? name : ""}
            </div>
          </div>
        ))}
      </div>
    </SimpleLayout>
  );
};

export default Map;
