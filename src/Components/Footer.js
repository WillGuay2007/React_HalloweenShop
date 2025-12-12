import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-fluid">

            <div className="d-flex g-0 justify-content-center" style={{ height: "250px" }}>

                <div className="d-flex" style={{ width: "500px", height: "250px" }}>
                    <img src="Images/Extra_imgs/Monster.jpg" className="flex-fill" />
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "500px", height: "250px" }}>
                    <h1 style={{ color: "rgba(61,0,61,0.774)" }}>Follow us on</h1>
                    <img src="Images/Extra_imgs/Medias.png" />
                </div>

                <div className="d-flex flex-column justify-content-start align-items-center"
                    style={{
                        width: "500px",
                        height: "250px",
                        backgroundColor: "darkred",
                        color: "white",
                        overflowY: "auto",
                        overflowX: "auto",
                    }}
                >
                    <h1 className="fw-bold">10% OFF</h1>
                    <h2>Your First Order When You Sign Up To Receive Email and Texts!</h2>

                    <div style={{ width: "400px" }}>
                        <input
                            type="text"
                            className="form-control rounded-start-pill rounded-end-pill"
                            placeholder="Email address..."
                        />
                    </div>

                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Sign up for text messages too.</label>

                    <input type="submit" className="btn btn-light rounded-start-pill rounded-end-pill" value="Sign up!" />

                    <h3>Read our privacy policy</h3>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-start bg-light gap-5">

                <div className="d-flex flex-column align-items-center">
                    <Link className="h4 text-decoration-none" to="/">Home</Link>
                    <a className="h4 text-decoration-none" href="#">My account</a>
                    <a className="h4 text-decoration-none" href="#">Track your order</a>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <a className="h3 text-decoration-none mb-2" href="#">Customer service</a>
                    <a className="h5 text-decoration-none" href="#">Contact us</a>
                    <a className="h5 text-decoration-none" href="#">Order status</a>
                    <a className="h5 text-decoration-none" href="#">Returns</a>
                    <a className="h5 text-decoration-none" href="#">FAQ</a>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <a className="h3 text-decoration-none mb-2" href="#">Company</a>
                    <a className="h5 text-decoration-none" href="#">Affliates</a>
                    <a className="h5 text-decoration-none" href="#">Privacy policy</a>
                    <a className="h5 text-decoration-none" href="#">Accessibility</a>
                    <a className="h5 text-decoration-none" href="#">US Press kit</a>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <a className="h3 text-decoration-none mb-2" href="#">International sites</a>
                    <a className="h5 text-decoration-none" href="#">.co.uk (uk)</a>
                    <a className="h5 text-decoration-none" href="#">.com (us)</a>
                    <a className="h5 text-decoration-none" href="#">.com.au (au)</a>
                    <a className="h5 text-decoration-none" href="#">.com.mx (mx)</a>
                    <a className="h5 text-decoration-none" href="#">.eu (eu)</a>
                </div>

                <div className="d-flex flex-column align-items-center">
                    <a className="h3 text-decoration-none mb-2" href="#">More</a>
                    <a className="h5 text-decoration-none" href="#">Customer reviews</a>
                    <a className="h5 text-decoration-none" href="#">Top halloween costumes</a>
                </div>

            </div>

            <div
                style={{ height: "75px", backgroundColor: "rgb(94,0,94)", color: "white" }}
                className="d-flex justify-content-center align-items-center"
            >
                <h1>Small moments <b>MONSTER MEMORIES</b></h1>
            </div>

            <div
                style={{ height: "100px", backgroundColor: "rgb(155,6,19)", color: "white" }}
                className="d-flex justify-content-center align-items-center"
            >
                <span>
                    2025 HalloweenCostumes.ca <br /> All prices in CAD <br /> All rights reserved
                </span>
                <img src="Images/Extra_imgs/PaymentCards.png" />
            </div>

        </div>
    );
}
