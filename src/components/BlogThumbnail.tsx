"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BlogThumbnail = ({ thumbnail }: { thumbnail: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative rounded max-w-full overflow-hidden mb-5">
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: thumbnail }]}
        carousel={{ finite: true }}
      />
      <Image
        src={thumbnail}
        className="transition-all sm:group-hover:scale-110"
        width={600}
        height={300}
        priority={true}
        alt="blog image"
        onClick={() => setOpen(true)}
      />
    </div>
  );
};

export default BlogThumbnail;
