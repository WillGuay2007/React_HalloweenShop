import Product from "../Components/Product";

export default function ListeDeProduits() {
    return (
        <div>
            <h1 style={{ textAlign: "left" }} className="mt-4 mb-4">Halloween Animatronics</h1>
            <hr />

            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap">

            <Product
            imageUrl="Images/Costumes_web/Decorations.jpg"
            productName="Skeleton decoration"
            price="149.99"
            discountLabel="SALE - 40%"
            />

            <Product
            imageUrl="Images/Extra_imgs/Nun.png"
            productName="Nun decoration"
            price="69.69"
            discountLabel="SALE - 20%"
            />

            </div>
        </div>
    );
}
