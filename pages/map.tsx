import { useState } from "react";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { SimpleLayout } from "../layouts/SimpleLayout/SimpleLayout";
import { categoryColors } from "../types/colors.type";

import Post from "../types/card.type";

export async function getStaticProps() {
  // get files from the directory
  const files = fs.readdirSync(path.join("pages/posts"));
  const posts = files.map((filename) => {
    // get slug
    const slug = filename.replace(".md", "");
    // get all frontmatter here:
    const markdownWithMeta = fs.readFileSync(
      path.join("pages/posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });
  return {
    props: {
      posts: posts,
    },
  };
}

interface AllProps {
  posts: Post[];
  category?: string;
}

const Map = ({ posts }: AllProps) => {
  const [name, setName] = useState("");
  const [view, setView] = useState("");
  const places = [
    {
      title: "frontloberne",
      top: "50%",
      left: "38%",
      image: "bike",
      category: "movement",
    },
    {
      title: "knuds kiosk",
      top: "58%",
      left: "34%",
      image: "stars",
      category: "studio",
    },
    {
      title: "useStudio",
      top: "34%",
      left: "48%",
      image: "star",
      category: "studio",
    },
    {
      title: "kaospilots",
      top: "38%",
      left: "48%",
      image: "bike",
      category: "movement",
    },
    {
      title: "permasport",
      top: "55%",
      left: "55%",
      image: "bike",
      category: "movement",
    },
    {
      title: "cafe stoj",
      top: "47%",
      left: "29%",
      image: "stars",
      category: "shop",
    },
  ];

  return (
    <SimpleLayout>
      <div className="flex">
        <div className="map-canvas">
          {places.map((place) => (
            <div
              key={place.title}
              className={`point bg-${categoryColors[place.category]}`}
              onClick={() => setView(place.title)}
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
        <div>
          <h2>{view}</h2>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Map;
