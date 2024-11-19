
import { Link } from 'react-router-dom';

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
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Header;