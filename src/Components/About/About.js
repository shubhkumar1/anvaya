import { Link } from 'react-router-dom'

import img1 from "./img1.svg"
import img2 from "./img2.svg"
import img3 from "./img3.svg"
import img4 from "../Home/img4.svg"

export default function About() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>

            <div style={{
                width: "85vw",
                fontSize: "1.1rem"
            }}>
                <div style={{
                    height: '60vh',
                    display: "flex",
                    alignItems: "center",
                    // marginTop: "20px",
                    flexDirection: "column"
                }}>
                    <img src={img1} alt='img1' style={{ height: '100%' }} />
                </div>
                <h1>What is Anvaya and why choose this name for this website?</h1>
                <p>Anvaya (अन्वय) is a Sanskrit word that signifies "positive", "affirmative", or "nexus". In the realms of grammar and logic, it denotes "concordance" or "agreement". This concept beautifully encapsulates the essence of our compiler, which aims to create a seamless and logical connection between your code and its execution.</p>


                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    borderLeft: "5px solid #079EF6",
                    padding: "50px 0"
                }}>
                    <div style={{
                        width: "100vw"
                    }}>
                        <img src={img2} alt='img2' style={{
                            width: "100%"
                        }} />
                    </div>
                    <div>
                        <h1>About Anvaya Compiler</h1>
                        <p>Anvaya Compiler is designed to be your ultimate coding companion. Whether you're a beginner or an experienced developer, our compiler provides a robust and intuitive platform to write, test, and debug your code efficiently.</p>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    borderRight: "5px solid #079EF6",
                    padding: "50px 0"
                }}>
                    <div>
                        <h1>Features</h1>
                        <ul>
                            <li><b>Multi-language Support:</b> Write code in various programming languages including Python, Java, C++, and more.</li>
                            <li><b>Real-time Error Detection:</b> Get instant feedback on your code with real-time error detection and suggestions.</li>
                            <li><b>Optimized Performance:</b> Experience fast and efficient code compilation and execution.</li>
                            <li><b>User-friendly Interface:</b> Enjoy a clean and intuitive interface that makes coding a breeze.</li>
                            <li><b>Collaborative Tools:</b> Work on projects with your team seamlessly with our collaborative features.</li>
                        </ul>
                    </div>

                    <div style={{
                        width: "40vw"
                    }}>
                        <img src={img3} alt='img3' style={{
                            width: "100%"
                        }} />
                    </div>
                </div>

                <div style={{
                    padding: "50px 0"
                }}>
                    <h1 align='center'>Why Choose Anvaya ?</h1>
                    <p>At Anvaya, we believe in the power of logical connections and seamless integration. Our compiler is built to help you focus on what matters most writing great code. With Anvaya, you can:</p>

                    <ul>
                        <li><b>Enhance Productivity:</b> Spend less time debugging and more time creating.</li>
                        <li><b>Learn and Grow:</b> Access a wealth of resources and tutorials to improve your coding skills.</li>
                        <li><b>Collaborate Effectively:</b> Share your projects and collaborate with peers effortlessly.</li>
                    </ul>
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

                        <Link to="/" style={{
                            color: "white",
                            backgroundColor: "#079EF6",
                            textDecoration: "none",
                            borderRadius: "5px",
                            padding: "10px 20px"
                        }}>Sign up now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}