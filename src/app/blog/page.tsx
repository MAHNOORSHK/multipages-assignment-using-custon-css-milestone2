import "@/app/blog/blog.css";
import Image from "next/image";
import { IoFlowerSharp } from "react-icons/io5";
import blogcard1 from "@/app/images/blogcard1.png";
import blogcard2 from "@/app/images/blogcard2.png";
import blogcard3 from "@/app/images/blogcard3.png";
import blogcard4 from "@/app/images/blogcard4.png";
import blogcard5 from "@/app/images/blogcard5.png";
import blogcard6 from "@/app/images/blogcard6.png";

export default function Blog(){
    return(
        <>
        <div className="blogSection">
            <div className="blog">
                <div className="blogheading">
                    <div className="bloglogo">
                        <div className="logodiv"><IoFlowerSharp className="flowericon" /></div>
                    </div>
                    <div className="blogtitle">
                        <h1>Our Blogs</h1>
                        <p>Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.</p>
                    </div>
                </div>

                <div className="blogmenu">
                    <div className="menubar">
                        <ul>
                            <li>All</li>
                            <li>Weight Loss Tips</li>
                            <li>Healthy Eating</li>
                            <li>Fitness and Exercise</li>
                            <li>Mindset and Motivation</li>
                            <li>Recipes and Meal Planning</li>
                        </ul>
                    </div>

                    <div className="cardsection">
                        <div className="blog1card">
                        <div className="blogcard1">
                        <div className="cardimg">
                            <h1>Weight Loss Tips</h1>
                            <Image src={blogcard1} alt="" className="imgblog"/>
                        </div>
                        <div className="blogcardtext">
                            <div className="cardtitleblog">
                                <h1>10 Effective Strategies for Sustainable Weight Loss</h1>
                                <p>Discover proven strategies for long-term weight loss success. Learn how to create healthy habits, set achievable goals, and make sustainable lifestyle changes.</p>
                            </div>
                            <div className="blogbtn">Read More</div>
                        </div>
                        </div>

                        <div className="blogcard1">
                        <div className="cardimg">
                            <h1>Weight Loss Tips</h1>
                            <Image src={blogcard2} alt="" className="imgblog"/>
                        </div>
                        <div className="blogcardtext">
                            <div className="cardtitleblog">
                                <h1>The Role of Portion Control in Weight Management</h1>
                                <p>Learn how portion control can help you manage your weight effectively. Find practical tips for controlling portion sizes and avoiding overeating.</p>
                            </div>
                            <div className="blogbtn">Read More</div>
                        </div>
                        </div>
                        </div>

                        <div className="blog1card">
                        <div className="blogcard1">
                        <div className="cardimg">
                            <h1>Weight Loss Tips</h1>
                            <Image src={blogcard3} alt="" className="imgblog"/>
                        </div>
                        <div className="blogcardtext">
                            <div className="cardtitleblog">
                                <h1>Understanding Emotional Eating and How to Overcome It</h1>
                                <p>Explore the connection between emotions and eating habits. Get valuable insights on how to identify emotional triggers and develop healthier coping mechanisms.</p>
                            </div>
                            <div className="blogbtn">Read More</div>
                        </div>
                        </div>

                        <div className="blogcard1">
                        <div className="cardimg">
                            <h1>Weight Loss Tips</h1>
                            <Image src={blogcard4} alt="" className="imgblog"/>
                        </div>
                        <div className="blogcardtext">
                            <div className="cardtitleblog">
                                <h1>How to Stay Motivated on Your Weight Loss Journey</h1>
                                <p>Find effective strategies to stay motivated and overcome obstacles during your weight loss journey. Get tips on setting realistic goals, tracking progress, and celebrating achievements.</p>
                            </div>
                            <div className="blogbtn">Read More</div>
                        </div>
                        </div>
                        </div>

                        <div className="blog1card">
                        <div className="blogcard1">
                        <div className="cardimg">
                            <h1>Weight Loss Tips</h1>
                            <Image src={blogcard5} alt="" className="imgblog"/>
                        </div>
                        <div className="blogcardtext">
                            <div className="cardtitleblog">
                                <h1>The Benefits of a Plant-Based Diet for Overall Health</h1>
                                <p>Explore the advantages of adopting a plant-based diet. Learn about the potential health benefits, nutrient-rich plant-based foods, and tips for transitioning to a plant-based lifestyle.</p>
                            </div>
                            <div className="blogbtn">Read More</div>
                        </div>
                        </div>

                        <div className="blogcard1">
                        <div className="cardimg">
                            <h1>Weight Loss Tips</h1>
                            <Image src={blogcard6} alt="" className="imgblog"/>
                        </div>
                        <div className="blogcardtext">
                            <div className="cardtitleblog">
                                <h1>Understanding Macronutrients: Carbohydrates, Proteins, and Fats</h1>
                                <p>Get a comprehensive overview of macronutrients and their role in a balanced diet. Discover the best sources of each macronutrient and how to incorporate them into your meals.</p>
                            </div>
                            <div className="blogbtn">Read More</div>
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