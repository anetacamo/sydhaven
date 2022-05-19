import Image from "next/image";
import { slugify } from "../utils/slugify";
import Link from "next/link";

interface ImageProps {
  title: string;
  text: string;
  background: string;
  color: string;
  image: string;
  tags: any;
  opening: string;
  housefor: any;
  events: any;
  address: string;
  type: string;
  bordercolor: string;
}

export default function Intro({
  address,
  title,
  text,
  image,
  color,
  tags,
  background,
  opening,
  housefor,
  bordercolor,
  events,
  type,
}: ImageProps) {
  return (
    <div className={`card bg-${background} border-${bordercolor}`}>
      <div className={`bg-${background}`} style={{ padding: 12 }}>
        <Image
          src={`/cards/${image}`}
          alt="blue"
          className={`half filter-yellow`}
          height={80}
          width={80}
          objectFit="contain"
        />
      </div>
      <h4 className="type bg-purplelight">{type}</h4>
      <Link href={`/posts/${slugify(title)}`}>
        <h4 style={{ marginBottom: "-8px" }}>{title}</h4>
      </Link>
      <h5 className="bolded salmon">{address}</h5>
      <h5>{text}</h5>
      {opening && (
        <h5 className="">
          <span className="salmon bolded">open </span>
          {opening}
        </h5>
      )}

      {/* <ul className="links">
        {tags?.map((tag: string, index: number) => (
          <div className="type bg-purple" key={index}>
            {tag}
          </div>
        ))}
      </ul>
      <ul className="links">
        {housefor?.map((tag: string, index: number) => (
          <div className="type bg-yellow" key={index}>
            {tag}
          </div>
        ))}
      </ul>
      <ul className="links">
        {events?.map((tag: string, index: number) => (
          <div className="type bg-salmon" key={index}>
            {tag}
          </div>
        ))}
      </ul> */}
    </div>
  );
}
