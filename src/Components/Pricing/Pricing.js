import { Link } from "react-router-dom"
import img1 from "./img1.png"
import img2 from "./img2.svg"
import img4 from "../Home/img4.svg"
import img3 from "../Home/img3.svg"


export default function Pricing() {

    function PriceCard({ type, price }) {
        return (
            <div style={{
                width: "20vw",
                backgroundColor: "lavender",
                padding: "30px 3px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                borderRadius: "10px",
                border: "1px solid #079EF6"
            }}>
                <h2 style={{ marginBottom: "0" }}><u>{type}</u></h2>
                <h4 style={{ margin: "0" }}>Price: ₹{price}</h4>
                <ul>
                    <li>Full access to all tutorials and resources</li>
                    <li>Unlimited use of the online compiler</li>
                    <li>Community support and monthly webinars</li>
                </ul>
                <Link to="" style={{
                    color: "white",
                    backgroundColor: "#079EF6",
                    textDecoration: "none",
                    padding: "7px 10px",
                    borderRadius: "10px"
                }} >Get started with ₹{price}/-</Link>
            </div>
        )
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <div style={{
                width: "80vw",
                fontSize: "1.1rem"
            }}>
                <div style={{
                    textAlign: "center"
                }}>
                    <img src={img1} alt="img1" />
                    <h1 style={{ marginTop: "0" }}>Pricing</h1>
                    <p>At Anvaya, we believe that every student deserves equal access to quality education. That's why we don't categorize our learners into free, pro, or premium plans. Instead, we offer a single, comprehensive plan with flexible payment options to suit your needs.</p>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginBottom: "50px"
                }}>

                    <PriceCard type="Monthly Plan" price="25" />
                    <PriceCard type="Quarterly Plan" price="70" />
                    {/* <PriceCard type="Half-Yearly Plan" price="125" /> */}
                    <PriceCard type="Yearly Plan" price="200" />
                </div>

                <div style={{
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    borderRight: "5px solid #079EF6",
                    padding: "50px 0"
                }}>
                    <div style={{ display: "flex", justifyContent: "center", height: "200px" }}><img src={img2} alt="img2" style={{borderRadius: "50%"}} /></div>
                    <div style={{width: "50vw"}}>
                        <h1>Our Commitment</h1>
                        <p>Your subscription helps us maintain and improve the quality of our educational resources. We are dedicated to using these funds to provide the best learning experience possible.</p>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderLeft: "5px solid #079EF6",
                    padding: "50px 0"
                }}>
                    <div style={{ width: "50vw" }}>
                        <h1>Why choose Anvaya in terms of price?</h1>
                        <ul style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}>
                            <li><b>Equality in Education:</b> We believe in equal opportunities for all students. There are no categories or tiers—everyone gets the same high-quality resources.</li>
                            <li><b>Affordable and Flexible:</b> Choose a payment plan that fits your budget and learning pace.</li>
                            <li><b>Quality Assurance:</b> Your subscription directly supports the continuous improvement of our educational content and tools.</li>
                        </ul>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", height: "200px" }}><img src={img3} alt="img3" /></div>
                </div>

                <div style={{
                    textAlign: "center"
                }}>
                    <h1>Join Us Today</h1>
                    <p>Become a part of the Anvaya community and take your learning to the next level. Choose the plan that works best for you and start your journey towards mastering computer science and programming.</p>
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
    )
}