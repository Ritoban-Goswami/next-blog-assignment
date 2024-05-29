import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./SVGIcons";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center space-y-4 flex-col py-8">
      <div className="flex space-x-11">
        <Link href="#">
          <FacebookIcon className="w-8 h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
        <Link href="#">
          <InstagramIcon className="w-8 h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
        <Link href="#">
          <TwitterIcon className="w-8 h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
        <Link href="#">
          <LinkedinIcon className="w-8 h-8 fill-current text-[#21243D] dark:text-light" />
        </Link>
      </div>
      <p className="text-gray-500">Copyright ©2020 All rights reserved</p>
    </footer>
  );
};

export default Footer;
