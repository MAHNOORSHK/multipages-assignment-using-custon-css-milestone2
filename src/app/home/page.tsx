import Image from "next/image";
import HeroImage from "@/app/images/heroImage.png";
import { PiFlowerTulipBold } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { FaStarOfLife } from "react-icons/fa6";
import { BsBagHeartFill } from "react-icons/bs";
import Blog1 from "@/app/images/blog1.png";
import Review1 from "@/app/images/review1.png";
import Blog2 from "@/app/images/blog2.png";
import Review2 from "@/app/images/review2.png";
import Blog3 from "@/app/images/blog3.png";
import Review3 from "@/app/images/review3.png";
import Blog4 from "@/app/images/blog4.png";
import Review4 from "@/app/images/review4.png";
import { LuHeart } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import "@/app/home/home.css"

export default function Home(){
    return(
        <>
        <div className="mainContainer">
            <div className="imageContainer">
                <Image src={HeroImage} alt=""/>
            </div>

            <div className="textContainer">
                <div className="menuContainer">
                    <h2>Transform Your</h2>
                    <h3>Health with</h3>
                </div>

                <h1>Personalized Nutrition Coaching</h1>

                <p>Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.</p>

                <div className="btnContainer">
                    <button className="colorChange">Get Starter Today</button>
                    <button>Book a Demo</button>
                </div>

                <div className="customerContainer">

                </div>
            </div>
        </div>

        <div className="featureSection">
                <div className="textFeature">
                    <h1>Features</h1>
                    <p>Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.</p>
                </div>

                <div className="cardFeature">
                    <div className="parent">
                        <div className="child">
                            <div className="logoText">
                                <div className="logoIcon">
                                <PiFlowerTulipBold className="icon"/>
                                <h2>Personalized Nutrition Plans</h2>
                                </div>
                                <p>Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.</p>
                            </div>
                        </div>

                        <div className="child">
                            <div className="logoText">
                                <div className="logoIcon">
                                <FaGraduationCap className="icon"/>
                                <h2>Guidance from Certified Nutritionists</h2>
                                </div>
                                <p>Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="parent">
                        <div className="child">
                            <div className="logoText">
                                <div className="logoIcon">
                                <GiForkKnifeSpoon className="icon"/>
                                <h2>Food Tracking and Analysis</h2>
                                </div>
                                <p>Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.</p>
                            </div>
                        </div>

                        <div className="child">
                            <div className="logoText">
                                <div className="logoIcon">
                                <GrNotes className="icon"/>
                                <h2>Meal Planning and Recipes</h2>
                                </div>
                                <p>Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.</p>
                            </div>
                        </div>
                    </div>

                    <div className="parent">
                        <div className="child">
                            <div className="logoText">
                                <div className="logoIcon">
                                <FaStarOfLife className="icon"/>
                                <h2>Lifestyle and Behavior Coaching</h2>
                                </div>
                                <p>Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.</p>
                            </div>
                        </div>

                        <div className="child">
                            <div className="logoText">
                                <div className="logoIcon">
                                <BsBagHeartFill className="icon"/>
                                <h2>Nutritional Education and Workshops</h2>
                                </div>
                                <p>Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blogSection">
            <div className="main">
                <div className="textBlog">
                <h1>Our Blogs</h1>
                <p>Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here is what you can expect from our blog.</p>
                </div>

                <div className="cardBlog">
                    <div className="blogparent">
                        <div className="blogchild">
                            <div>
                                <Image src={Blog1} alt=""/>
                            </div>

                            <div className="cardtext">
                                <p>Weight Loss</p>
                                <h1>The Benefits of Hydration for Weight Loss</h1>
                                <h5>Discover how staying hydrated can support your weight loss goals and improve overall health.</h5>
                            </div>

                            <div className="reviewcard">
                                <Image src={Review1} alt=""/>
                                <div className="textreview">
                                    <h1>Emily Johnson</h1>
                                    <p>23 May 2023 - 5 min read</p>
                                </div>
                                <div className="reviewicon">
                                    <LuHeart />
                                    <FaRegBookmark />
                                </div>
                            </div>
                        </div>

                        <div className="blogchild">
                            <div>
                                <Image src={Blog2} alt=""/>
                            </div>

                            <div className="cardtext">
                                <p>Mindful Eating</p>
                                <h1>Cultivating a Healthy Relationship with Food</h1>
                                <h5>Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.</h5>
                            </div>

                            <div className="reviewcard">
                                <Image src={Review2} alt=""/>
                                <div className="textreview">
                                    <h1>Sarah Thompson</h1>
                                    <p>23 May 2023 - 5 min read</p>
                                </div>
                                <div className="reviewicon">
                                    <LuHeart />
                                    <FaRegBookmark />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blogparent">
                    <div className="blogchild">
                            <div>
                                <Image src={Blog3} alt=""/>
                            </div>

                            <div className="cardtext">
                                <p>Understanding Macronutrients</p>
                                <h1>Carbohydrates, Proteins, and Fats</h1>
                                <h5>Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.</h5>
                            </div>

                            <div className="reviewcard">
                                <Image src={Review3} alt=""/>
                                <div className="textreview">
                                    <h1>Mark Wilson</h1>
                                    <p>23 May 2023 - 5 min read</p>
                                </div>
                                <div className="reviewicon">
                                    <LuHeart />
                                    <FaRegBookmark />
                                </div>
                            </div>
                        </div>

                        <div className="blogchild">
                            <div>
                                <Image src={Blog4} alt=""/>
                            </div>

                            <div className="cardtext">
                                <p>Healthy Snacks on the Go</p>
                                <h1>Quick and Nutritious Options</h1>
                                <h5>Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.</h5>
                            </div>

                            <div className="reviewcard">
                                <Image src={Review4} alt=""/>
                                <div className="textreview">
                                    <h1>Emily Johnson</h1>
                                    <p>23 May 2023 - 5 min read</p>
                                </div>
                                <div className="reviewicon">
                                    <LuHeart />
                                    <FaRegBookmark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}