import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "YouTube",
    href: "https://www.youtube.com/@OT1RB",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/gabriell.otirb/",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/gabriel-brito-b72777260/",
  },
  {
    title: "GitHub",
    href: "https://github.com/Gabriel-otirB",
  },
]

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div
        className="absolute h-[400px] w-[1600px] bottom-0 -z-10
     left-1/2 -translate-x-1/2 bg-emerald-300/30 
     [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] after:pointer-events-none"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; {new Date().getFullYear()}. Todos direitos reservados.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                target="_blank"
                key={link.title}
                className="inline-flex items-center gap-1.5 transition-all duration-300 
                hover:scale-105 hover:bg-gradient-to-r from-emerald-300 to-sky-400
                hover:text-transparent hover:bg-clip-text"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
