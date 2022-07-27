import Paragraph from "../Paragraph/Paragraph";
import StarsDivider from "../StarsDivider";
import Image from "next/image";

interface IntroProps {
  background?: string;
}

export default function Intro({ background }: IntroProps) {
  return (
    <section
      className="grid center"
      style={{
        padding: "240px 0",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h4 style={{ maxWidth: 800, margin: "auto", fontSize: 40 }}>
        <span className="purple">South Harbour</span> is an area in Aarhus west.
        To see the exact date and all sorts of upcoming activities, check the
        facebook site of
      </h4>
    </section>
  );
}
