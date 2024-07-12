import { Button } from "@/components/ui";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center p-4 justify-between border-b border-gray-200">
      <div className="flex items-center gap-x-4">
        <Image src="logo.svg" alt="Logo" width={36} height={36} />
        <h1 className="font-black text-xl">Strapi Blog</h1>
      </div>
      <Button>Login</Button>
    </header>
  );
};

export default Header;
