

export default function Footer() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            padding: "10px 0"
        }}>
            <div style={{
                width: "10vw"
            }}>
                <a href='/' style={{
                        color: "black"
                    }}>
                    <h1 style={{
                        margin: "0",
                        padding: "0"
                    }}>anvaya</h1>
                </a>
                <div>2024 &copy;anvaya</div>
                <div>All rights reserved.</div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                // alignItems: "center",
                backgroundColor: "white",
                padding: "10px 0",
                width: "50vw"
            }}>
                <div>
                    <a href='/' style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "grey"
                    }}>
                    <p>Home</p>
                </a>

                <a href='/pricing' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Pricing</p>
                </a>

                {/* <a href='/' style = {{
                        textDecoration: "none",
                        fontWeight: "bold",
                        color: "grey"
                    })}>
                        <p>Contact us</p>
                    </a> */}

                <a href='/editor' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey" 
                }}>
                    Editor
                </a>

                <a href='/about' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>About</p>
                </a>
            </div>

            <div>
                <a href='/' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Twitter</p>
                </a>

                <a href='/' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Instagram</p>
                </a>

                <a href='/' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Facebook</p>
                </a>

                <a href='/' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Youtube</p>
                </a>

                <a href='/' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Linkdin</p>
                </a>
            </div>

            <div>
                <a href='/' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Privacy policy</p>
                </a>

                <a href='/' style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "grey"
                }}>
                    <p>Terms of services</p>
                </a>

            </div>
        </div>
        </div >
    )
}