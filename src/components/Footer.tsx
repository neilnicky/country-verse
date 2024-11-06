import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;

  return (
    <footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-center py-4">
      <Link href="https://github.com/neilnicky" className="text-black font-extralight text-sm max-sm:text-xs">
        Copyright - {currentYear}-{nextYear} - <span className="hover:font-medium hover:text-zinc-600">neilnicky</span> - All rights reserved
      </Link>
    </footer>
  );
};

export default Footer;
