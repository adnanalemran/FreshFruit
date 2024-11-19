// src/components/OrderSummary.js
import PropTypes from 'prop-types';


const OrderSummary = ({ cart }) => {

    const calculateTotal = () => {
        return cart?.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className=" bg-white   h-[80vh]     mx-16 p-12 my-10">
            <h2 className="text-3xl font-semibold   mb-6">Order Summary</h2>



            {/* Cart Items */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cart Items</h3>
                <ul>
                    {cart?.map((item) => (
                        <li key={item.id} className="flex justify-between mb-2">
                            <span>{item.name}</span>
                            <span>{`$${item.price.toFixed(2)} x ${item.quantity}`}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Total */}
            <div className="mt-4 border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>{`$${calculateTotal().toFixed(2)}`}</span>
                </div>
            </div>

            <p className='mt-10'>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Terms and Conditions</h3>
                <p className="text-gray-600 text-sm">
                    By placing an order, you agree to our terms and conditions. All sales are final and non-refundable.
                    Prices and availability of products are subject to change without notice. We reserve the right to
                    refuse service to anyone for any reason at any time. Your use of our service is at your sole risk.
                    We do not guarantee that our service will be uninterrupted, timely, secure, or error-free.
                </p>
            </p>

        </div>
    );
};
OrderSummary.propTypes = {
    userDetails: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        address: PropTypes.string,
    }).isRequired,
    setUserDetails: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            quantity: PropTypes.number,
        })
    ).isRequired,
};

export default OrderSummary;

