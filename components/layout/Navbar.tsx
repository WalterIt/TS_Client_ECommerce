import Link from "next/link";
import Container from "../ui/Container";
import MainNav from "./MainNav";
import getCategories from "@/actions/GetCategories";
import NavbarActions from "../ui/NavbarActions";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  categories.sort((a, b) => {
    const collator = new Intl.Collator(); // Alphabetic Order
    return collator.compare(a.name, b.name);
  });

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 ">
            <p className="font-bold text-xl ">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
