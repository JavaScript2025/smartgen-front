import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-muted border-t border-gray-100 border-border bg-[#FFFAFA]">
      <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
                    <div className="space-y-4">
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-primary transition-colors hover:text-primary/80"
            >
              
              <p className=" from-[#712A6B] via-[#F98737] to-[#2F4A94] bg-clip-text text-blue">
                SmartGen
              </p>
            </a>
            <p className="text-sm text-muted-foreground">
              se exercite, é saudável para o corpo e a mente.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-primary transition-colors"
            >
              <LinkedinLogoIcon size={28} weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary transition-colors"
            >
              <InstagramLogoIcon size={28} weight="bold" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary transition-colors"
            >
              <FacebookLogoIcon size={28} weight="bold" />
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-border border-gray-300 text-center text-sm text-muted-foreground">
          <p>© {data} SmartGen. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
