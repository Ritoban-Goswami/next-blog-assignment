"use client";

import { useEffect, useState } from "react";
import { BookmarkIcon, CheckIcon } from "./SVGIcons";
import { AnimatePresence, motion } from "framer-motion";

const Bookmark = ({ blogID }: { blogID: number }) => {
  const [isBookmarked, setIsBookmarked] = useState<string>("");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const bookmartState = localStorage.getItem("saved_blogs") ?? "";
      setIsBookmarked(bookmartState);
    }
  }, []);

  const handleBookmark = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const savedBlogs = localStorage.getItem("saved_blogs") ?? "";
      let updatedSavedBlogsArray = savedBlogs ? savedBlogs.split(",") : [];

      if (updatedSavedBlogsArray.includes(blogID.toString())) {
        // Unbookmark
        updatedSavedBlogsArray = updatedSavedBlogsArray.filter(
          (id) => id !== blogID.toString()
        );
      } else {
        // Bookmark
        updatedSavedBlogsArray.push(blogID.toString());

        // Show success message only when bookmarking
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }

      const updatedSavedBlogs = updatedSavedBlogsArray.join(",");
      localStorage.setItem("saved_blogs", updatedSavedBlogs);
      setIsBookmarked(updatedSavedBlogs);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleBookmark}
      >
        <BookmarkIcon
          className={`w-5 h-5 sm:hover:fill-gray-800 sm:hover:dark:fill-gray-200 ${
            isBookmarked.includes(blogID.toString()) &&
            "dark:fill-gray-200 fill-gray-800"
          }`}
        />
      </motion.div>
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-4 right-4 flex items-center max-w-xs p-4 text-light bg-[#f0f0f0] rounded border border-gray-200 dark:border-gray-600 dark:bg-[#1e1e1e]"
            role="alert"
          >
            <CheckIcon className="w-6 h-6 stroke-current" />
            <div className="ms-3 text-sm font-normal">
              Bookmark added successfully.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Bookmark;
