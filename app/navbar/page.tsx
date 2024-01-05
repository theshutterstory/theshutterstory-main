import ActionButtons from "./action-button";
import Logo from "./logo";
import {NavigationMenuBar} from "./navigation-bar";

const Navbar = () => {
    return ( <div className="flex justify-between items-center px-10 border-b">
        <Logo />
        <NavigationMenuBar />
        <ActionButtons />
    </div> );
}
 
export default Navbar;