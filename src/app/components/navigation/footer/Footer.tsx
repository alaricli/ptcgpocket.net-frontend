import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-4 md:mb-0">
          {/* Column 1: Logo */}
          <div>
            <Image src="/logo.png" width={150} height={150} alt="/Logo" />
          </div>
          {/* Column 2: Links */}
          <div>
            <ul className="">
              <li>
                <Link href="/">
                  <p className="hover:text-orange-400">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/sets/all">
                  <p className="hover:text-orange-400">Cards</p>
                </Link>
              </li>
              <li>
                <Link href="/sets">
                  <p className="hover:text-orange-400">Sets</p>
                </Link>
              </li>
              <li>
                <Link href="/meta">
                  <p className="hover:text-orange-400">Decks</p>
                </Link>
              </li>
              <li>
                <Link href="/articles">
                  <p className="hover:text-orange-400">Articles</p>
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3: About Data */}
          <div>
            <ul>
              <li>
                <Link href="/about">
                  <p className="hover:text-orange-400">About</p>
                </Link>
              </li>
              <li>
                <a href="mailto:professorsresearchtcg@gmail.com">
                  <p className="hover:text-orange-400">Contact</p>
                </a>
              </li>
              <li>
                <Link href="/privacy">
                  <p className="hover:text-orange-400">Privacy</p>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <p className="hover:text-orange-400">Terms</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-8 border-t border-gray-700 pt-4 text-center">
          <p>
            &copy; {currentYear} Professor&apos;s Research TCG. All rights
            reserved.
          </p>
          <p className="text-xs mt-1">
            Pokémon and All Respective Names are Trademark & © of Nintendo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
