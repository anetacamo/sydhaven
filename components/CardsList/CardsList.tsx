import Card from "../Card";
import SmallCard from "../SmallCard";

interface CardsListProps {
  tag: string;
  posts: any[];
  background?: string;
  regular?: boolean;
}

export default function CardsList({
  posts,
  tag,
  background,
  regular,
}: CardsListProps) {
  return (
    <div className="flex-center" style={{ alignItems: "unset" }}>
      {posts.map(
        (post, index) =>
          post.frontmatter.type === tag &&
          (regular ? (
            <Card
              background={background || "black"}
              key={index}
              post={post.frontmatter}
              bordercolor="salmon"
            />
          ) : (
            <SmallCard
              background={background || "black"}
              key={index}
              post={post.frontmatter}
            />
          ))
      )}
    </div>
  );
}
