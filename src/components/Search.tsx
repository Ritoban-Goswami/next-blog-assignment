"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { motion } from "framer-motion";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    term ? params.set("query", term) : params.delete("query");
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <motion.div className="my-14">
      <motion.input
        whileFocus={{ scale: 1.2 }}
        whileHover={{ scale: 1.2 }}
        className="w-full rounded-md border border-gray-200 dark:border-gray-600 py-[9px] p-4 text-sm placeholder:text-gray-500 focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </motion.div>
  );
}
