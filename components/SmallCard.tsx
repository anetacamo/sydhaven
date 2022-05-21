import Image from "next/image";
import { slugify } from "../utils/slugify";
import Link from "next/link";
import CardType from "../types/card.type";

interface CardProps extends CardType {
  background?: string;
  bordercolor?: string;
  post: CardType;
}

export default function SmallCard({
  post,
  background,
  bordercolor,
}: CardProps) {
  const { image, type, title, address, text, opening } = post;
  return (
    <div className={`card small bg-${background} border-${bordercolor}`}>
      <div style={{ padding: 8 }}>
        <Image
          src={`/cards/${image}`}
          alt="blue"
          className={`half filter-yellow`}
          height={50}
          width={50}
          objectFit="contain"
        />
      </div>
      <Link href={`/events/${slugify(title)}`}>
        <h4 style={{ marginBottom: "-8px", cursor: "pointer" }}>{title}</h4>
      </Link>
      <h5 className="bolded salmon">{address}</h5>
      {/* <h5>{text}</h5> */}
      {opening && (
        <h5 className="">
          <span className="salmon bolded">open </span>
          {opening}
        </h5>
      )}
    </div>
  );
}
