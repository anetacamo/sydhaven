import ImageSection from "../components/ImageSection/ImageSection";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import Paragraph from "../components/Paragraph/Paragraph";
import { SimpleLayout } from "../layouts/SimpleLayout/SimpleLayout";

const About = () => {
  const title = "About";
  return (
    <>
      <SimpleLayout title={title} />
      <LeftMenu items={["history", "presence"]} />
      <ImageSection background="/20.jpeg" />
      <div className="flex">
        <div
          className="bg-black"
          style={{ minWidth: "50%", textAlign: "right" }}
        >
          <div
            style={{
              padding: "56px 48px",
              maxWidth: 600,
              marginRight: 0,
              marginLeft: "auto",
            }}
          >
            <h2>history</h2>
            <p>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click any of the place links. To see the
              exact date and all sorts of upcoming activities, check the
              facebook site of or click any of the place links.
            </p>
            <h4>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click an.{" "}
              <span className="purple">To see the exact date and all </span>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click an
            </h4>
            <p>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click any of the place links. To see the
              exact date and all sorts of upcoming activities, check the
              facebook site of or click any of the place links.
            </p>
          </div>
          <ImageSection background="/14.jpeg" />
        </div>
        <div className="bg-white" style={{ minWidth: "50%" }}>
          {" "}
          <div style={{ padding: "56px 48px", maxWidth: 600 }}>
            <h2>present</h2>
            <h4>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click an
            </h4>

            <p>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click any of the place links. To see the
              exact date and all sorts of upcoming activities, check the
              facebook site of or click any of the place links. To see the exact
              date and all sorts of upcoming activities, check the facebook site
              of or click any of the place links.
            </p>
          </div>
          <ImageSection background="/9.jpeg" />
        </div>
      </div>
    </>
  );
};

export default About;
