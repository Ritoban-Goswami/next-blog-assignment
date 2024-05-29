import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SVGIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center space-y-6 py-10">
      <div className="flex space-x-7 sm:space-x-11">
        <Link href="#">
          <FacebookIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
        <Link href="#">
          <InstagramIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
        <Link href="#">
          <TwitterIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
        <Link href="#">
          <LinkedinIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
      </div>
      <p className="text-gray-500 text-xs">
        Copyright ©2024 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
