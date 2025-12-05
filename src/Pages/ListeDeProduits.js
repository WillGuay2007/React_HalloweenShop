export default function ListeDeProduits() {
    return (
        <div>
            <h1 style={{ textAlign: "left" }} className="mt-4 mb-4">Halloween Animatronics</h1>
            <hr />

            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap">

                <div
                    style={{ width: 300, height: 400, overflowY: "auto", overflowX: "auto", backgroundSize: "cover" }}
                    className="d-flex flex-column justify-content-start align-items-center border shadow-sm"
                >
                    <img
                        src="Images/Costumes_web/Decorations.jpg"
                        style={{ height: 325, width: "100%", backgroundSize: "100%" }}
                    />
                    <div
                        style={{ backgroundColor: "darkred", width: "100%", height: 25, color: "white" }}
                        className="d-flex justify-content-center"
                    >
                        <span className="shadow">SALE - 40%</span>
                    </div>
                    <div className="d-flex flex-column flex-fill justify-content-center align-items-center">
                        <span style={{ fontFamily: "Times New Roman", fontSize: "medium" }}>Skeleton decoration</span>
                        <span style={{ fontFamily: "Times New Roman", fontSize: "medium" }}>⭐⭐⭐⭐⭐</span>
                        <span style={{ fontFamily: "Times New Roman", fontSize: "medium", color: "darkred" }}>
                            149.99$
                        </span>
                    </div>
                </div>

                <div
                    style={{ width: 300, height: 400, overflowY: "auto", overflowX: "auto" }}
                    className="d-flex flex-column justify-content-start align-items-center border shadow-sm"
                >
                    <img
                        src="Images/Extra_imgs/Monster.jpg"
                        style={{ height: 325, width: "100%", backgroundSize: "100%" }}
                    />
                    <div
                        style={{ backgroundColor: "darkred", width: "100%", height: 25, color: "white" }}
                        className="d-flex justify-content-center"
                    >
                        <span className="shadow">SALE - 40%</span>
                    </div>
                    <div className="d-flex flex-column flex-fill justify-content-center align-items-center">
                        <span style={{ fontFamily: "Times New Roman", fontSize: "medium" }}>Monster decoration</span>
                        <span style={{ fontFamily: "Times New Roman", fontSize: "medium" }}>⭐⭐⭐⭐⭐</span>
                        <span style={{ fontFamily: "Times New Roman", fontSize: "medium", color: "darkred" }}>
                            149.99$
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
