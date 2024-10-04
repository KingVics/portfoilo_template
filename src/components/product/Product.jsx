import "./Product.css";

const Product = ({img,link}) => {
    return (
        <div className="p my-5 my-4 w-full overflow-hidden border-2 border-solid dark:border-green-dark border-gray-light">
            <div className="flex items-center sticky z-20 dark:bg-gray-light bg-green h-5">
                <div className="m-1 rounded-full h-2 w-2 dark:bg-green-dark bg-green-light"></div>
                <div className="m-1 rounded-full h-2 w-2 dark:bg-green-dark bg-green-light"></div>
                <div className="m-1 rounded-full h-2 w-2 dark:bg-green-dark bg-green-light"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img w-full" />
            </a>
        </div>
    );
};

export default Product;