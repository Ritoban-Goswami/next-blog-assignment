"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BlogThumbnail = ({ thumbnail }: { thumbnail: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: thumbnail }]}
        carousel={{ finite: true }}
      />
      <Image
        src={thumbnail}
        className="rounded-t mb-5 transition-all group-hover:opacity-90"
        width={600}
        height={300}
        priority={true}
        alt="blog image"
        onClick={() => setOpen(true)}
      />
    </>
  );
};

export default BlogThumbnail;
