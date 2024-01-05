import Image from "next/image";
import logoImg from "../../public/images/logo/theshutterstory logo.png"


const Logo = () => {
    return ( <div>
        <Image src={logoImg} alt="logo" width={50} height={50}  />
    </div> );
}
 
export default Logo;