import { navItems } from "@/utils/data";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="container">
                <div>
                    <h1>Style Mela</h1>
                </div>
                <div>
                    <ul>
                        {
                            navItems?.map((nav,index)=>(
                                <Link href={nav.path} key={index}>
                                   <li>{nav.name}</li> 
                                </Link>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;