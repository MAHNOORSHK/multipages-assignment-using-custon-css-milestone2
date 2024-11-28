import "@/app/team/team.css";
import Image from "next/image";
import { IoFlowerSharp } from "react-icons/io5";
import team1 from "@/app/images/team1.png"
import team2 from "@/app/images/team2.png"
import team3 from "@/app/images/team3.png"
import team4 from "@/app/images/team4.png"


export default function Team(){
    return(
        <>
        <div className="teamSection">
            <div className="team">
                <div className="teamheading">
                    <div className="teamlogo">
                        <div className="logodiv"><IoFlowerSharp className="flowericon" /></div>
                    </div>
                    <div className="teamtitle">
                        <h1>Meet Our Team of Experts</h1>
                        <p>Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.</p>
                    </div>
                </div>

                <div className="teammenu">
                    <div className="menubar">
                        <ul>
                            <li>Management Team</li>
                            <li>Nutritionists and Dietitians</li>
                            <li>Customer Support</li>
                            <li>Marketing and Communications</li>
                            <li>Technology and Development</li>
                        </ul>
                    </div>

                    <div className="cardsection">
                        <div className="teamcard1">
                            <Image src={team1} alt=""/>
                            
                            <div className="teamtext">
                                <h1>Sarah Mitchell</h1>
                                <p>Founder and CEO</p>
                            </div>
                        </div>

                        <div className="teamcard1">
                            <Image src={team2} alt=""/>
                            
                            <div className="teamtext">
                                <h1>Emily Thompson</h1>
                                <p>Chief Operating Officer</p>
                            </div>
                        </div>

                        <div className="teamcard1">
                            <Image src={team3} alt=""/>
                            
                            <div className="teamtext">
                                <h1>John Davis</h1>
                                <p>Chief Financial Officer</p>
                            </div>
                        </div>

                        <div className="teamcard1">
                            <Image src={team4} alt=""/>
                            
                            <div className="teamtext">
                                <h1>Rachel Adams</h1>
                                <p>Chief Marketing Officer</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}