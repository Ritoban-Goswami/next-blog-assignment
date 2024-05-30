"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [mobile, setMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 576;
  });

  const inputProps = {
    className:
      "w-full rounded-md border border-gray-200 dark:border-gray-600 py-[9px] p-4 text-sm placeholder:text-gray-500 focus:outline-none",
    placeholder: placeholder,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      handleSearch(e.target.value),
    defaultValue: searchParams.get("query")?.toString(),
  };

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    term ? params.set("query", term) : params.delete("query");
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <motion.div className="my-14">
      {mobile ? (
        <input {...inputProps} />
      ) : (
        <motion.input
          {...inputProps}
          whileFocus={{ scale: 1.2 }}
          whileHover={{ scale: 1.2 }}
        />
      )}
    </motion.div>
  );
}
