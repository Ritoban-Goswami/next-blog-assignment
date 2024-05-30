"use client";

import { useEffect, useState } from "react";
import { BookmarkIcon } from "./SVGIcons";
import { motion } from "framer-motion";

const Bookmark = ({ blogID }: { blogID: number }) => {
  const [isBookmarked, setIsBookmarked] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const bookmartState = localStorage.getItem("saved_blogs") ?? "";
      setIsBookmarked(bookmartState);
    }
  }, []);

  const handleBookmark = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedBlogs = localStorage.getItem("saved_blogs") ?? "";
      const updatedSavedBlogs = savedBlogs
        ? `${savedBlogs},${blogID}`
        : `${blogID}`;

      localStorage.setItem("saved_blogs", updatedSavedBlogs);
      setIsBookmarked(updatedSavedBlogs);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onClick={handleBookmark}
    >
      <BookmarkIcon
        className={`w-5 h-5 hover:fill-darkforeground ${
          isBookmarked.includes(blogID.toString()) && "fill-darkforeground"
        }`}
      />
      {/* {showMessage && (
        <div className="text-sm text-gray-500 mt-1">
          Blog saved for later reading
        </div>
      )} */}
    </motion.div>
  );
};

export default Bookmark;
