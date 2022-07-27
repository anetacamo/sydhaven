import Link from "next/link";
import { slugify } from "../utils/slugify";

interface CategoryProps {
  posts: any[];
  onTagClick: any;
  category: any[];
}

export default function CategoryList({
  posts,
  onTagClick,
  category,
}: CategoryProps) {
  let allTags: any[] = [];
  const tags = posts.map((item) => allTags.push(item.frontmatter.type));
  let tagsonce = [...new Set(allTags)];
  return (
    <>
      {/* <h6 className="salmon" style={{ marginBottom: "-16px" }}>
        filter by:
      </h6> */}
      <div className="tags">
        {tagsonce.map(
          (tag, index) => {
            return (
              //<Link href={`/tag/${slugify(tag)}`} key={index}>
              <div
                key={index}
                className={`type bg-purplelight ${
                  category == tag && "bg-chosen"
                }`}
                style={{ transitionDuration: "350ms" }}
                onClick={() => onTagClick(tag)}
              >
                {tag}
                {category == tag && <span style={{ paddingLeft: 8 }}> x</span>}
              </div>
            );
          }
          //</Link>
        )}
      </div>
    </>
  );
}
