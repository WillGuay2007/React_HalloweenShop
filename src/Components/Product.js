import { Link } from "react-router-dom";

export default function Product(props) {
    return (
        <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap">

            <div
                style={{ width: 300, height: 400, overflowY: "auto", overflowX: "auto", backgroundSize: "cover" }}
                className="d-flex flex-column justify-content-start align-items-center border shadow-sm"
            >
                <Link 
                    to="/detail" 
                    state={{ 
                        product: {
                            imageUrl: props.imageUrl,
                            productName: props.productName,
                            price: props.price,
                            discountLabel: props.discountLabel
                        }
                    }}
                >
                    <img src={props.imageUrl} style={{ height: 325, width: "100%" }} />
                </Link>
                

                <div
                    style={{ backgroundColor: "darkred", width: "100%", height: 25, color: "white" }}
                    className="d-flex justify-content-center"
                >
                    <span className="shadow">{props.discountLabel}</span>
                </div>

                <div className="d-flex flex-column flex-fill justify-content-center align-items-center">
                    <span>{props.productName}</span>
                    <span>⭐⭐⭐⭐⭐</span>
                    <span style={{ color: "darkred" }}>
                        {props.price}$
                    </span>
                </div>
            </div>

        </div>
    )
}
