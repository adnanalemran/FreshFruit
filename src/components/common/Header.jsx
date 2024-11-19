
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Cart from '../../page/Home/components/Cart';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-slate-200  lg:px-8 px-4 ">
                <div className="navbar-start">

                    <Link to="/" className=" text-2xl font-bold text-primary font-exo2">Fresh<span className='text-black'>Fruit</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><IoCartOutline className="text-2xl" /></div>
                        <div tabIndex={0} className="dropdown-content       z-[10]    rounded-lg  w-96  ">
                            <Cart />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;