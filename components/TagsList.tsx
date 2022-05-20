interface TagsProps {
  posts: any[];
}

export default function TagsList({ posts }: TagsProps) {
  let allTags: any[] = [];
  const tags = posts.map((item) =>
    item.frontmatter.tags?.map((tag: string) => allTags.push(tag))
  );
  let tagsonce = [...new Set(allTags)];
  console.log(tagsonce);
  return (
    <>
      {/* <h6 className="salmon" style={{ marginBottom: "-16px" }}>
        filter by:
      </h6> */}
      <div className="tags">
        {tagsonce.map((tag, index) => (
          <div className="type bg-purplelight" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </>
  );
}
function allTags(allTags: any, arg1: any) {
  throw new Error("Function not implemented.");
}
