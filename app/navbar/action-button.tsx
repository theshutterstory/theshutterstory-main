import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const ActionButtons = () => {
    return ( <div>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <AlignJustify />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                                <Link href="/">
                                    Sign In
                                </Link>
                                 <Link href="/">
                                    Get Started
                                </Link>
                                 <Link href="/">
                                    Pricing
                                </Link>
                                 <Link href="/">
                                    Contact
                                </Link>
                                 <Link href="/">
                                    About
                                </Link>
                                 <Link href="/">
                                    Terms
                                </Link>
                                 <Link href="/">
                                    Contribute
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>

            <div className="hidden md:flex md:space-x-4">
                <Button className="text-md" variant="ghost">Sign In</Button>
                <Button className="text-md bg-black">Get started</Button>
            </div>

       
    </div> );
}
 
export default ActionButtons;