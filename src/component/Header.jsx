import { kodeinSch } from "../assets";
import { LuMenu } from "react-icons/lu";
const Header = () => {
    return (
        <>
            {/*Jumbotron*/}
            <div className="text-lg py-16 bg-blue-400 text-center text-white">
                <figure>
                    <img
                        src={kodeinSch}
                        alt="KODEIN LOGO"
                        className="w-full object-cover object-center"
                    />
                    <h1>Sekolah Developer Indonesia</h1>
                </figure>
            </div>
            
            {/*Navbar*/}
            <div className="menu flex gap-10 py-4 px-12 justify-end md:justify-start bg-[#d0d8df] text-[#5e6c7c] font-bold text-sm hover:text-[#3b4a57]">
                <LuMenu className="block md:hidden"/>
                <a href="#" className="hidden md:block">English Camp</a>
                <a href="#" className="hidden md:block">Kodein Club</a>
                <a href="#" className="hidden md:block">Quran Camp</a>
            </div>
        </>
    );
};

export default Header;