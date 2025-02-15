import Image from "next/image";

const ProductCard = ({ product }) => (
    <div className=" border rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
        <Image
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
            className="w-full h-40 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
        <p className="text-blue-600 font-bold text-lg mt-2">${product.price}</p>
        <button className=" w-full bg-blue-600 text-white py-2 mt-3 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
        </button>
    </div>
);

export default ProductCard;
