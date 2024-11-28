import Image from "next/image";
import "@/app/about/about.css";
import { IoFlowerSharp } from "react-icons/io5";
import card1 from "@/app/images/card1.png"
import card2 from "@/app/images/card2.png"
import card3 from "@/app/images/card3.png"
import card4 from "@/app/images/card4.png"
import card5 from "@/app/images/card5.png"
import card6 from "@/app/images/card6.png"

export default function About() {
    return (
        <>
            <div className="aboutMain">
                <div className="aboutchild">
                    <div className="subchild">
                        <div className="empty"></div>
                        <div className="empty"></div>
                    </div>

                    <div className="subchild">
                        <div className="empty"></div>
                        <div className="empty"></div>
                    </div>
                </div>

                <div className="aboutchild">
                    <div className="subchild">
                        <div className="emptybig"><IoFlowerSharp className="flowericon" /></div>
                    </div>
                </div>

                <div className="aboutchild">
                    <div className="subchild">
                        <div className="empty"></div>
                        <div className="empty"></div>
                    </div>

                    <div className="subchild">
                        <div className="empty"></div>
                        <div className="empty"></div>
                    </div>
                </div>
            </div>

            <div className="titleSection">
                <div className="subtitle">
                    <h1>Welcome to Nutritionist</h1>
                    <p>Your trusted source for personalized nutrition coaching. Our mission is to help you achieve your weight loss and health goals through tailored nutrition plans and expert guidance. We understand that every individual is unique, and that is why we believe in providing personalized solutions that fit your lifestyle and preferences.
                        With our team of qualified nutritionists and dietitians, we are dedicated to empowering you with the knowledge and tools you need to make lasting changes. Whether you want to shed those extra pounds, improve your overall well-being, or develop a healthier relationship with food, we are here to support you every step of the way.
                        At Nutritionist, we believe that healthy eating should be enjoyable and sustainable. We emphasize the importance of balanced nutrition, focusing on whole foods and mindful eating practices. Our approach is rooted in scientific research and evidence-based strategies, ensuring that you receive the most up-to-date and accurate information.
                        Join our community of individuals committed to transforming their lives through nutrition. Take control of your health, boost your energy levels, and discover the joy of nourishing your body with wholesome foods. We are here to guide you towards a healthier, happier you.</p>
                </div>
            </div>

            <div className="storySection">
                <div className="story">
                    <div className="title">
                        <h1>Our Story</h1>
                        <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey.</p>
                    </div>

                    <div className="storyCards">
                        {/* row1 2x2=4 */}
                        <div className="card">
                            <div className="card1">
                                <Image src={card1} alt=""/>
                            </div>
                            <div className="card2">
                                <h1>Inspiring Transformations Story</h1>
                                <p>Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.</p>
                                <h3>July 1, 2025</h3>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card3">
                            <h1>Recognition and Accolades Story</h1>
                                <p>Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.</p>
                                <h3>March 10, 2023</h3>
                            </div>
                            <div className="card4">
                                <Image src={card2} alt=""/>
                            </div>
                        </div>
                        {/* row2 2x2=4 */}
                        <div className="card">
                            <div className="card1">
                                <Image src={card3} alt=""/>
                            </div>
                            <div className="card2">
                                <h1>Continued Growth Story</h1>
                                <p>Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.</p>
                                <h3>November 2, 2021</h3>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card3">
                            <h1>Collaborating for Success Story</h1>
                                <p>Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.</p>
                                <h3>July 15, 2019</h3>
                            </div>
                            <div className="card4">
                                <Image src={card4} alt=""/>
                            </div>
                        </div>

                        {/* row3 2x2=4     */}
                        <div className="card">
                            <div className="card1">
                                <Image src={card5} alt=""/>
                            </div>
                            <div className="card2">
                                <h1>Enhanced Support Story</h1>
                                <p>In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.</p>
                                <h3>April 1, 2018</h3>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card3">
                            <h1>Innovating for Clients Story</h1>
                                <p>Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.</p>
                                <h3>January 20, 2017</h3>
                            </div>
                            <div className="card4">
                                <Image src={card6} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}