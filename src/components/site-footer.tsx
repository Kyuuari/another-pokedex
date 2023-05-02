// import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center min-w-full gap-4 px-8 md:gap-2 md:px-0">
          {/* <Icons.logo className="hidden h-6 w-6 md:inline-block" /> */}
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️
            {/* <a
              href={"https://twitter.com/Kyu_uari"}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Chester Cari
            </a> */}
          </p>
          <div className="flex flex-row justify-center gap-4 w-full">
            <a
              href={"https://github.com/Kyuuari"}
              target="_blank"
              rel="noreferrer"
              aria-label="github link"
              className="font-medium underline underline-offset-4 hover:opacity-30"
            >
              <Icons.gitHub className=" h-6 w-6 md:inline-block" />
            </a>
            <a
              href={"https://www.behance.net/chestercari"}
              target="_blank"
              rel="noreferrer"
              aria-label="behance link"
              className="font-medium underline underline-offset-4 hover:opacity-30"
            >
              <Icons.behance className=" h-6 w-6 md:inline-block" />
            </a>
            <a
              href={"https://www.linkedin.com/in/chestercari/"}
              target="_blank"
              rel="noreferrer"
              aria-label="linkedin link"
              className="font-medium underline underline-offset-4 hover:opacity-30"
            >
              <Icons.linkedin className=" h-6 w-6 md:inline-block" />
            </a>
            <a
              href={"https://www.instagram.com/kyuuari/"}
              target="_blank"
              rel="noreferrer"
              aria-label="instagram link"
              className="font-medium underline underline-offset-4 hover:opacity-30"
            >
              <Icons.instagram className=" h-6 w-6 md:inline-block" />
            </a>
            <a
              href={"https://twitter.com/Kyu_uari"}
              target="_blank"
              rel="noreferrer"
              aria-label="twitter link"
              className="font-medium underline underline-offset-4 hover:opacity-30"
            >
              <Icons.twitter className=" h-6 w-6 md:inline-block" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
