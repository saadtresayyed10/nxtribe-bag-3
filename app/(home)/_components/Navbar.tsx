import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <div className="lg:flex hidden justify-between items-center px-10 py-4 border-b">
      <div className="flex justify-center items-center gap-x-16">
        <Link href="/">
          <Image
            src="/images/logo/white_logo.png"
            alt="Logo"
            width={150}
            height={150}
          />
        </Link>
        <nav className="flex items-center gap-x-6">
          <NavigationMenuOptions />
          <Link href=""></Link>
        </nav>
      </div>
    </div>
  );
};

const NavigationMenuOptions = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What we offer</NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[100px] flex justify-center items-center p-4 text-sm bg-muted-foreground/5">
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
