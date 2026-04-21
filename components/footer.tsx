import Link from "next/link";

export function Footer() {
  return (
    <footer className="bottom-0 py-10 text-center text-sm bg-[#1b1b1b]   text-[#fcfbfb]">

      <Link href="https://www.instagram.com/siteup.am/">
        <p className="mt-2">
          Պատրաստվել է siteup.am -ի կողմից
        </p>
      </Link>
    </footer>
  );
}
