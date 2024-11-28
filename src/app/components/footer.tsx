import Image from 'next/image';
import Logo from "@/app/images/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
        <div className="footerSection">
            <div className="textcontainer">
                <div className='logoDiv'>
                    <Image src={Logo} alt='logo' />
                    <a href="#" className="heading">Nutritionist</a>
                </div>
                <div className='footerDiv'>
                    <ul className="menuitem">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Team</a></li>
                        <li><a href="">Blogs</a></li>
                    </ul>
                </div>
            </div>

            <div className="contactsection">
                <div className='contact'>
                    <div className='footericon'>
                        <MdEmail className='icon'/>
                        <p>hello@squareup.com</p>
                    </div>

                    <div className='footericon'>
                        <FaPhoneVolume className='icon'/>
                        <p>+91 91813 23 2309</p>
                    </div>

                    <div className='footericon'>
                        <FaLocationDot className='icon'/>
                        <p>Somewhere in the World</p>
                    </div>
                </div>
                <div className='footerDiv'>
                    <p>© 2023 Nutritionist. All rights reserved.</p>
                </div>
            </div>
        </div >
        </>
    )
}