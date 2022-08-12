import { useState } from "react";

import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { SimpleLayout } from "../layouts/SimpleLayout/SimpleLayout";
import { categoryColors } from "../types/colors.type";

import Post from "../types/card.type";
import Card from "../components/Card";
import ImageSection from "../components/ImageSection/ImageSection";

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
      title: "Frontloberne",
      top: "50%",
      left: "38%",
      image: "frontloberne",
      category: "movement",
    },
    {
      title: "KnudsKiosk",
      top: "58%",
      left: "34%",
      image: "bike",
      category: "studio",
    },
    {
      title: "UseStudio",
      top: "34%",
      left: "48%",
      image: "star",
      category: "studio",
    },
    {
      title: "Kaospilots",
      top: "38%",
      left: "48%",
      image: "star2",
      category: "movement",
    },
    {
      title: "Permasport",
      top: "55%",
      left: "55%",
      image: "bike",
      category: "movement",
    },
    {
      title: "Cafe Stoj",
      top: "47%",
      left: "29%",
      image: "coffee",
      category: "shop",
    },
  ];

  const clicked = posts.filter((place) => place.frontmatter.title === view);
  console.log(posts.map((post) => post.frontmatter.title));
  console.log(view);
  console.log(clicked);

  return (
    <SimpleLayout>
      <div className="flex">
        <div className="map-canvas">
          {places.map((place) => (
            <div
              key={place.title}
              className={`point bg-purple`}
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
                className={`title bg-purple ${
                  name === place.title ? "opened" : ""
                }`}
                // className={`title bg-${categoryColors[place.category]} ${
                //   name === place.title ? "opened" : ""
                // }`}
              >
                {name === place.title ? name : ""}
              </div>
            </div>
          ))}
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ padding: 24 }}>
            <p className="type bg-purple" style={{ marginTop: 32 }}>
              {clicked[0]?.frontmatter.type}
            </p>
            <h2>{clicked[0]?.frontmatter.title}</h2>
            <p style={{ marginTop: -24 }}>{clicked[0]?.frontmatter.address}</p>
            <p style={{ maxWidth: 600 }}>{clicked[0]?.frontmatter.text}</p>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Map;
