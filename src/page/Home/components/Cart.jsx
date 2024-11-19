import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../../redux/cartSlice";
import { ImageUrl } from '../../../utils/ImageUrl';
import { Link } from "react-router-dom";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const Cart = () => {
    const cart = useSelector(state => state.cart); // Redux state
    const dispatch = useDispatch();

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId)); // Increase quantity
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId)); // Decrease quantity
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId)); // Remove product from cart
    };

    // Calculate the total price of the cart
    const getTotalPrice = () => {
        return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
    };

    return (
        <div className="  mx-auto p-6 bg-slate-100   rounded-2xl min-w-100 border border-slate-400  lg:border-none ">
            <h2 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-6">Your Cart</h2>

            {cart.length === 0 ? (
                <div className="flex items-center justify-between   bg-slate-200 rounded-lg px-2">
                    <li className="flex flex-col py-4 sm:flex-row justify-between w-full ">
                        <div className="flex w-full space-x-2 sm:space-x-4 h-20 ">

                            <h3 className="font-bold text-slate-600">Card Is Empty</h3>

                        </div>
                    </li>
                </div>
            ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between  rounded-2xl  bg-slate-200 lg:rounded-lg  px-2">
                            <li className="flex flex-col pt-3 pb-1 sm:flex-row justify-between w-full ">
                                <div className="flex w-full space-x-2 sm:space-x-4 ">
                                    <img
                                        className="flex-shrink-0 object-contain bg-white max-w-22 max-h-22 dark:border- rounded outline-none sm:w-32 sm:h-32 "
                                        src={`${ImageUrl}${item?.image}`} alt={item?.name}
                                    />
                                    <div className="flex flex-col justify-between w-full pb-4">
                                        <div className="flex justify-between w-full pb-2 space-x-2">
                                            <div className="space-y-1">
                                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item?.name}</h3>
                                                <p className="text-sm">
                                                    <p className="text-xs whitespace-nowrap  ">Unit Price: ${item?.price.toFixed(2)}</p>
                                                </p>

                                            </div>
                                            <div className="text-right">
                                                {/* Display unit price and total price */}
                                                <p className="text-lg font-semibold">${(item?.quantity * item?.price).toFixed(2)}</p>

                                            </div>
                                        </div>
                                        <div className="flex text-sm   justify-end  pl-3">

                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => handleDecreaseQuantity(item.id)}
                                                    className="  py-1 text-secondary hover:text-yellow-600   text-xl rounded-full"
                                                >
                                                    <FaMinusCircle />
                                                </button>
                                                <span className="font-semibold text-lg">{item?.quantity}</span>
                                                <button
                                                    onClick={() => handleIncreaseQuantity(item.id)}
                                                    className="py-1 text-secondary hover:text-yellow-600  text-xl rounded-full"
                                                >
                                                    <FaPlusCircle />
                                                </button>
                                            </div>
                                            <button onClick={() => handleRemoveFromCart(item.id)} type="button" className=" text-primary flex items-center justify-center gap-1 pl-5 py-1  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                    <rect width="32" height="200" x="168" y="216"></rect>
                                                    <rect width="32" height="200" x="240" y="216"></rect>
                                                    <rect width="32" height="200" x="312" y="216"></rect>
                                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                </svg>
                                                <span>Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    ))}
                </div>
            )}

            <div className="mt-6 flex justify-end">
                {cart.length === 0 ? (
                    <p className="text-center text-slate-600 dark:text-slate-400"></p>
                ) : (
                    <div className="space-y-2 w-full border-t border-dashed border-primary">
                        <div className="flex justify-between  my-4 w-full ">
                            <p className="text-lg font-semibold text-primary">Total Price:</p>
                            <p className="text-lg font-semibold text-green-500">${getTotalPrice().toFixed(2)}</p>
                        </div>
                        <div className="flex  w-full">
                            <Link className="w-full" to='/order-and-payment'>
                                <button className="py-2 px-6 bg-primary w-full text-white font-semibold rounded-lg hover:bg-slate-95000 transition duration-300 whitespace-nowrap  shadow-2 drop-shadow-2xl  ">
                                    Place order
                                </button>
                            </Link>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
