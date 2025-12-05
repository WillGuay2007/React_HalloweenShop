export default function MainPage() {
    return (
        <div>

            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Halloween shop</title>

                <link rel="stylesheet" href="Style.css" />
                <link rel="stylesheet" href="bootstrap/css/bootstrap.css" />
                <script src="bootstrap/js/bootstrap.bundle.min.js"></script>

                <style>{`
                    body {
                        font-family: "Open Sans", Arial, sans-serif;
                    }
                    h1 {
                        text-align: center;
                    }
                    .highlight {
                        background-color: yellow;
                        font-weight: bold;
                    }
                    div.discount h2, div.discount h1 {
                        color: white;
                    }
                    .NoBorderRadius {
                        border-radius: 0%;
                    }
                    .row img {
                        height: 250px;
                    }
                `}</style>
            </div>

            <div className="container-fluid">

                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-6">
                            <img src="Images/Extra_imgs/Big_img_1.png" className="w-100 h-100" />
                        </div>

                        <div className="col-6 d-flex flex-column">
                            <img src="Images/Extra_imgs/Big_img_2.png" className="w-100 flex-fill" />
                            <img src="Images/Extra_imgs/Big_img_3.png" className="w-100 flex-fill" />
                        </div>
                    </div>
                </div>

                <section className="text-center my-4">
                    <h2 style={{ fontWeight: "bold", fontSize: "large" }}>
                        Welcome to HalloweenCostumes.ca! The biggest & best selection of
                        Halloween Costumes, Accessories & Decorations!
                    </h2>

                    <div className="row">
                        <div className="col-3">
                            <img src="images/Costumes_web/Women_costumes.jpg" className="rounded shadow-sm w-100" />
                            <h4>Women's costumes</h4>
                        </div>

                        <div className="col-3">
                            <img src="images/Costumes_web/Men_costumes.jpg" className="rounded shadow-sm w-100" />
                            <h4>Men's costumes</h4>
                        </div>

                        <div className="col-3">
                            <img src="images/Costumes_web/Girl_costumes.jpg" className="rounded shadow-sm w-100" />
                            <h4>Girl's costumes</h4>
                        </div>

                        <div className="col-3">
                            <img src="images/Costumes_web/Boy_costumes.jpg" className="rounded shadow-sm w-100" />
                            <h4>Boy's costumes</h4>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <img src="images/Costumes_web/Couple_costumes.jpg" className="rounded shadow-sm w-100" />
                            <h4>Couples costumes</h4>
                        </div>

                        <div className="col-3">
                            <img src="images/Costumes_web/Group_costumes.jpg" className="rounded shadow-sm w-100" />
                            <h4>Group costumes</h4>
                        </div>

                        <div className="col-3">
                            <img src="images/Costumes_web/2025_costumes.jpg" className="rounded shadow-sm w-100" />
                            <h4>2025 costumes</h4>
                        </div>

                        <div className="col-3">
                            <img src="images/Costumes_web/Decorations.jpg" className="rounded shadow-sm w-100" />
                            <h4>Decorations</h4>
                        </div>
                    </div>

                </section>

                <div className="row">
                    <div className="col-4">
                        <h1>Unparalleled Variety</h1>
                        <p style={{ fontSize: "xx-large" }}>
                            Costumes lightweight well made and extremely different and unique...
                        </p>
                        <p style={{ fontSize: "large" }}>
                            ⭐⭐⭐⭐⭐ By Anngela Robinson | February 2025
                        </p>
                    </div>

                    <div className="col-4">
                        <h1>Inclusive Sizing</h1>
                        <p style={{ fontSize: "x-large" }}>
                            I ordered this costume and it was really nicely made...
                        </p>
                        <p style={{ fontSize: "large" }}>
                            ⭐⭐⭐⭐⭐ By Rae | November 2024
                        </p>
                    </div>

                    <div className="col-4">
                        <h1>Exceptional Quality</h1>
                        <p style={{ fontSize: "large" }}>
                            As a cosplay influencer, I have had the absolute honor...
                        </p>
                        <p style={{ fontSize: "large" }}>
                            ⭐⭐⭐⭐⭐ By Brittnay Carreon | January 2025
                        </p>
                    </div>
                </div>

                <section className="text-center my-4">
                    <h1 className="mb-4">Featured Categories</h1>

                    <div className="d-flex justify-content-center flex-wrap gap-3">
                        <div>
                            <img src="images/Costumes_sub_section_web/Colorful_costumes.jpg" className="rounded-circle" style={{ width: 150, height: 150 }} />
                            <h4>Colorful costumes</h4>
                        </div>
                        <div>
                            <img src="images/Costumes_sub_section_web/Plus_size_costumes.jpg" className="rounded-circle" style={{ width: 150, height: 150 }} />
                            <h4>Plus size costumes</h4>
                        </div>
                        <div>
                            <img src="images/Costumes_sub_section_web/Teen_costumes.jpg" className="rounded-circle" style={{ width: 150, height: 150 }} />
                            <h4>Teen costumes</h4>
                        </div>
                        <div>
                            <img src="images/Costumes_sub_section_web/Toddler_costumes.jpg" className="rounded-circle" style={{ width: 150, height: 150 }} />
                            <h4>Toddler costumes</h4>
                        </div>
                        <div>
                            <img src="images/Costumes_sub_section_web/Baby_costumes.jpg" className="rounded-circle" style={{ width: 150, height: 150 }} />
                            <h4>Baby costumes</h4>
                        </div>
                        <div>
                            <img src="images/Costumes_sub_section_web/Pet_costumes.jpg" className="rounded-circle" style={{ width: 150, height: 150 }} />
                            <h4>Pet costumes</h4>
                        </div>
                    </div>

                </section>

                <h1 style={{ textAlign: "left", fontWeight: "lighter" }}>Recently viewed</h1>
                <hr />

                <h2 style={{ textAlign: "center" }}>We're Ready to Make Your Halloween the Best Ever!</h2>

                <div style={{ display: "flex", gap: "20px" }}>
                    <p>If you are looking for the best Halloween costume ideas...</p>
                    <p>While you're browsing our selection of Halloween costumes...</p>
                    <p>Once you’ve found all your favorite Halloween goodies...</p>
                </div>

                <hr />

            </div>

        </div>
    );
}
