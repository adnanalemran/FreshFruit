import { useQuery } from "@tanstack/react-query";
import http from "../../../utils/http";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import { ImageUrl } from '../../../utils/ImageUrl';
import toast from 'react-hot-toast';

const ProductView = () => {
    const { data: products = [], isLoading, isError, error } = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await http.get("/product");
            return res.data.data;
        },
    });

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="max-w-7xl mx-auto p-6 bg-slate-100 rounded-lg ">
            <h1 className="lg:text-3xl text-xl font-semibold text-gray-800 mb-6">Product List</h1>

            {/* Conditional rendering */}
            {isLoading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-slate-200 rounded-lg shadow-lg p-4 animate-pulse"
                        >
                            <div className="w-full h-48 bg-slate-300 rounded-t-lg mb-4"></div>
                            <div className="h-4 bg-slate-300 w-1/2 mb-2"></div>
                            <div className="h-4 bg-slate-300 w-1/3 mb-2"></div>
                            <div className="h-4 bg-slate-300 w-1/4 mb-2"></div>
                            <div className="h-4 bg-slate-300 w-1/3"></div>
                        </div>
                    ))}

                </div>
            ) : isError ? (
                <div className="text-center text-red-500">Error loading products: {error?.message}</div>
            ) : products.length === 0 ? (
                <div className="text-center text-gray-600">No products found</div>
            ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg   p-4 hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={`${ImageUrl}${product?.image}`}
                                alt={product?.name}
                                className="w-full h-32 object-contain bg-white rounded-t-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold  text-center mb-2">{product?.name}</h2>
                            <p className="text-gray-600 dark:text-gray-400 lg:text-sm text-xs mb-4 text-center">
                                {product?.description.split(' ').slice(0, 5).join(' ')}...
                            </p>
                            <p className="text-base font-semibold text-center">  ${parseFloat(product?.price).toFixed(2)}</p>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className=" text-sm lg:mt-4 mt-2 w-full lg:py-2 py-1 bg-primary text-white lg:font-semibold rounded-md hover:bg-red-500 transition duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductView;
