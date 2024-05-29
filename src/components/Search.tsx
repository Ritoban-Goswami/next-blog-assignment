"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "./SVGIcons";

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
    <div className="relative my-14">
      <input
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:outline-none"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 stroke-current text-gray-500 dark:text-light" />
    </div>
  );
}
