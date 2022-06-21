import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CardsList from "../components/CardsList/CardsList";
import Paragraph from "../components/Paragraph/Paragraph";
import StarsDivider from "../components/StarsDivider";
import { SinglePageLayout } from "../layouts/SinglePageLayout/SinglePageLayout";

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

interface CalendarProps {
  posts: any[];
}

const Calendar = ({ posts }: CalendarProps) => {
  const title = "Calendar";
  return (
    <SinglePageLayout title={title}>
      <Paragraph>
        To see the exact date and all sorts of upcoming activities, check the
        facebook site of{" "}
        <a href="https://www.facebook.com/groups/154685458042586/events">
          Sydhaven
        </a>{" "}
        or click any of the place links.
        
      </Paragraph>
      <StarsDivider />
      <CardsList posts={posts} type="event" regular />
    </SinglePageLayout>
  );
};

export default Calendar;
