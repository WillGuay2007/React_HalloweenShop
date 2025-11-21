
export default function Header() {
    return (
        <div className="container-fluid">
            
            <div className="d-flex justify-content-center align-items-center gap-1">
                <div className="d-flex align-items-center">
                <a href="MainPage.html">
                    <img src="Images/Extra_imgs/FUN_Logo.png" className="NoBorderRadius" alt="FUN.com logo" />
                </a>
            </div>

            <div className="d-flex align-items-center border-start ps-3 ms-3">
                <img src="Images/Extra_imgs/Halloween_Logo.png" className="NoBorderRadius" />
            </div>

            <div className="d-flex align-items-center border-start ps-3 ms-3">
                <select className="form-select w-auto">
                    <option selected>🇺🇸 .COM (US)</option>
                    <option>🇨🇦 .CA (CA)</option>
                    <option>🇬🇧 .CO.UK (UK)</option>
                    <option>🇦🇺 .COM.AU (AU)</option>
                    <option>🇲🇽 .COM.MX (MX)</option>
                    <option>🇪🇺 .EU (EU)</option>
                </select>
            </div>

            <div className="d-flex align-items-center border-start ps-3 ms-3">
                <span className="fw-bold">The biggest selection of costumes in the world!</span>
            </div>

            <div className="d-flex align-items-center gap-2 border px-3 py-1 bg-white rounded border-start ps-3 ms-3">
                <a href="tel:5073868388" className="text-decoration-none text-dark">📞(507) 386-8388</a>
            </div>

            <div className="dropdown border-start ps-3 ms-3">
                <button className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                    Contact Us
                </button>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Live Chat</a></li>
                    <li><a className="dropdown-item" href="#">Email Support</a></li>
                </ul>
            </div>

            <button className="btn btn-light border-dark">
                Help
            </button>
            </div>

            <div
                className="d-flex container-fluid align-items-center justify-content-center border-bottom gap-2"
                style={{ height: "100px", backgroundColor: "rgb(129, 17, 17)" }}
            >
                <div>
                    <img src="Images/Extra_imgs/WebsiteName.png" className="NoBorderRadius" />
                </div>

                <div style={{ width: "400px" }}>
                    <input type="text" className="form-control rounded-start-pill rounded-end-pill" placeholder="Search..." />
                </div>

                <div className="dropdown">
                    <button
                        className="btn dropdown-toggle text-white"
                        data-bs-toggle="dropdown"
                        style={{ backgroundColor: "rgb(129, 17, 17)" }}
                    >
                        <span><img src="Images/Extra_imgs/My_account.png" /></span>My account
                    </button>

                    <ul className="dropdown-menu">
                        <li>
                            <a className="dropdown-item" href="#">
                                <span><img src="Images/Extra_imgs/Sign_in.png" /></span>Sign in
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                <span><img src="Images/Extra_imgs/Sign_up.png" /></span>Sign up
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <a href="#">
                        <img src="Images/Extra_imgs/Shop_logo.png" />
                    </a>
                </div>
            </div>

            <nav className="navbar navbar-expand bg-light border-bottom">
                <div className="container justify-content-center">
                    <ul className="navbar-nav">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Adult Costumes
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Men's Costumes</a></li>
                                <li><a className="dropdown-item" href="#">Women's Costumes</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Kids Costumes
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Adaptive Costumes</a></li>
                                <li><a className="dropdown-item" href="#">Baby Costumes</a></li>
                                <li><a className="dropdown-item" href="#">Boy Costumes</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle fw-bold" href="#" data-bs-toggle="dropdown">
                                Exclusive
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Dark Costumes</a></li>
                                <li><a className="dropdown-item" href="#">Zombie Costumes</a></li>
                                <li><a className="dropdown-item" href="#">Wizard Costumes</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Costume Ideas
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">50s Costumes</a></li>
                                <li><a className="dropdown-item" href="#">70s Costumes</a></li>
                                <li><a className="dropdown-item" href="#">90s Costumes</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Couples Costumes</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#">Group Costumes</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Accessories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Backpacks</a></li>
                                <li><a className="dropdown-item" href="#">Belts</a></li>
                                <li><a className="dropdown-item" href="#">Capes</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                Decorations
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Indoor Decorations</a></li>
                                <li><a className="dropdown-item" href="#">Outdoor Decorations</a></li>
                                <li><a className="dropdown-item" href="#">Door Decoration</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-danger fw-semibold" href="#" data-bs-toggle="dropdown">
                                Sale
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-danger" href="#">Sale!</a></li>
                                <li><a className="dropdown-item" href="#">Clearance</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    );
}
