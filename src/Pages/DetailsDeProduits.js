export default function DetailsDeProduits() {
    return (
        <div className="d-flex" style={{ width: "100%", height: "500px" }}>
            
            <div className="d-flex flex-fill" style={{ backgroundColor: "rgb(255,255,255)" }}>
                <img src="Images/Costumes_web/Decorations.jpg" className="w-100 h-100" />
            </div>

            <div className="d-flex flex-column flex-fill">
                <div
                    className="flex-fill rounded m-4 shadow border-dark p-1"
                    style={{ backgroundColor: "rgb(240,240,240)" }}
                >

                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "100%",
                            height: "25px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(235,235,235)"
                        }}
                    >
                        <span style={{ color: "darkred", fontWeight: "bold" }}>$9.99</span>
                    </div>

                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "100%",
                            height: "50px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(247,247,247)"
                        }}
                    >
                        <span>
                            or 4 interest-free payments of $2.50 with{" "}
                            <span style={{ fontWeight: 900 }}>sezzle</span>
                        </span>
                    </div>

                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "100%",
                            height: "25px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(104,3,3)"
                        }}
                    >
                        <span style={{ color: "white", fontWeight: "bold" }}>
                            Clearance - 83%
                        </span>
                    </div>

                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{
                            width: "100%",
                            height: "25px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(255,255,255)"
                        }}
                    >
                        <span className="ms-3">Size</span>
                        <span className="me-3">Quantity</span>
                    </div>

                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{
                            width: "100%",
                            height: "50px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(255,255,255)"
                        }}
                    >
                        <span className="ms-3">
                            Standard - 9.99$
                            <span style={{ color: "darkred", fontStyle: "italic" }}> Only 2 left!</span>
                        </span>

                        <input
                            type="text"
                            className="form-control me-3"
                            style={{ width: "20%" }}
                        />
                    </div>

                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "100%",
                            height: "50px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(255,255,255)"
                        }}
                    >
                        <a href="#">View Size Chart</a>
                    </div>

                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "100%",
                            height: "50px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(255,255,255)"
                        }}
                    >
                        <a
                            href="#"
                            className="btn rounded-start-pill rounded-end-pill"
                            style={{
                                width: "75%",
                                backgroundColor: "darkred",
                                color: "white"
                            }}
                        >
                            Add to cart
                        </a>
                    </div>

                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            width: "100%",
                            height: "50px",
                            overflowX: "auto",
                            overflowY: "auto",
                            backgroundColor: "rgb(255,255,255)"
                        }}
                    >
                        <a
                            href="#"
                            className="btn rounded-start-pill rounded-end-pill"
                            style={{
                                width: "30%",
                                backgroundColor: "rgb(224,224,224)",
                                color: "rgb(31,31,31)"
                            }}
                        >
                            Save for later
                        </a>
                    </div>

                    <div className="flex-fill justify-content-center ms-3">
                        <div>Item # DI128539</div>
                        <div>Items Included</div>
                        <div>Wheelchair Cover ( 2 Felt Pieces)</div>
                        <div>6 Support Bars</div>
                        <div>Instructions</div>
                    </div>

                </div>
            </div>

        </div>
    );
}
