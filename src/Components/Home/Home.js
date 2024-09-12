import { Link } from "react-router-dom";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import img4 from "./img4.svg";


export default function Home() {
    return (
        <div style={{
            padding: "0 50px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "100px 0px",
            }}>
                <div style={{
                    width: "50vw",
                    fontSize: "1.5rem"
                }}>
                    <h1>Welcome to anvaya</h1>

                    <p>Anvaya is your ultimate destination for mastering computer science and programming languages. Whether you're a beginner or an advanced learner, Anvaya offers a comprehensive platform to enhance your skills and knowledge.</p>
                </div>

                <div style={{
                    width: "30vw"
                }}>
                    <img src={img1} alt="img1" style={{
                        width: "100%"
                    }} />
                </div>
            </div>


            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                // backgroundColor: "lavender",
                padding: "10px",
                borderRadius: "10px"
            }}>
                <div style={{ width: "40vw" }}>
                    <img src={img2} alt="img1" style={{
                        width: "100%",
                        borderRadius: "50%"
                    }} />
                </div>
                <ol style={{
                    width: "50vw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    fontSize: "1.1rem",
                }}>
                    <h1>What We Offer</h1>
                    <li><b>Learn Computer Science:</b> Dive into the world of computer science with our extensive resources. From fundamental concepts to advanced topics, we cover everything you need to know to build a strong foundation.</li>
                    <li><b>Explore Programming Languages:</b> Discover and learn various programming languages including Python, Java, C++, JavaScript, and more. Our tutorials are designed to be easy to follow and understand, making learning a new language a breeze.</li>
                    <li><b>Fun Facts and Insight:</b> Stay updated with interesting facts and insights about the tech world. Our curated content will keep you informed and inspired.</li>
                    <li><b>Practice and Run Code:</b> Put your knowledge to the test with our online compiler. Practice coding in real-time and see your results instantly. Our platform supports multiple programming languages, allowing you to experiment and learn effectively.</li>
                </ol>
            </div>


            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "30px 0"
                // backgroundColor: "lavender"
            }}>

                <ul style={{
                    width: "50vw",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    fontSize: "1.1rem"
                }}>
                    <h1>Why Choose Anvaya?</h1>
                    <li><b>Enhance Productivity:</b> Spend less time debugging and more time creating.</li>
                    <li><b>Interactive Learning:</b> Our interactive tutorials and exercises make learning engaging and effective.</li>
                    <li><b>Comprehensive Resources:</b> Access a wide range of resources tailored to different learning levels.</li>
                    <li><b>Learn and Grow:</b> Access a wealth of resources and tutorials to improve your coding skills.</li>
                    <li><b>Community Support:</b> Join our community of learners and get support from peers and experts.</li>
                    <li><b>Real-Time Coding:</b> Practice coding with our online compiler and get instant feedback.</li>
                </ul>
                <div style={{ width: "40vw" }}>
                    <img src={img3} alt="img1" style={{
                        width: "100%",
                        borderRadius: "50%"
                    }} />
                </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lavender",
                borderRadius: "10px",
                padding: "10px"
            }}>
                <div style={{
                    width: "40vw"
                }}>
                    <img src={img4} alt="img1" style={{
                        width: "100%",
                        // borderRadius: "50%"
                    }} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "50vw",
                    fontSize: "1.1rem",
                    // gap: "10px"
                }}>
                    <h1 style={{
                        margin: 0
                    }}>Get started</h1>
                    <p>Join Anvaya today and embark on your journey to becoming a proficient programmer. Whether you're preparing for exams, looking to enhance your skills, or just curious about computer science, Anvaya is here to support you every step of the way.</p>

                    <Link to= "/" style={{
                        color: "white",
                        backgroundColor: "#079EF6",
                        textDecoration: "none",
                        borderRadius: "5px",
                        padding: "10px 20px"
                    }}>Sign up now</Link>
                </div>
            </div>

        </div>
    )
}