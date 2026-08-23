import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { MdLocationCity } from "react-icons/md";

const SearchBar = ({setValue}) => {
    const [val, setVal] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setValue(val);
        setVal('');
    }
    return (
        <nav className="bg-[var(--color-primary-transparent)] flex justify-between items-center max-[700px]:px-[30px] max-[800px]:px-[50px] py-[17px] px-[85px]">
            <div className="font-[monospace] text-[1.5em] sm:text-[2em] md:text-[2.3em] font-black text-white italic text-shadow-[2px_2px_5px_black]">
                <p>WEATHER DASHBOARD</p>
            </div>
            <div className="max-w-[50%] sm:max-w-[40%] md:max-w-[30%] lg:max-w-[40%]">
                <form onSubmit={handleSubmit} className="flex border-2 border-[var(--color-primary)] rounded-xl shadow-[0_0_5px_2px_var(--color-primary-light)] hover:border-[var(--color-primary-hover)]">
                    <div className="bg-white w-[15%] rounded-l-[10px] flex justify-center items-center">
                        <MdLocationCity size={25} color="goldenrod" />
                    </div>
                    <label htmlFor="search" className="w-full">
                        <input className="w-full font-medium py-[5px] pl-[10px] outline-none bg-white" value={val} type="text" name="search" id="search" placeholder="Enter city name....." onChange={(e) => {
                            e.preventDefault();
                            setVal(e.target.value)
                        }} />
                    </label>
                    <button type="submit" className="bg-[var(--color-primary)] rounded-r-[10px] w-[60px] flex justify-center items-center hover:cursor-pointer hover:bg-[var(--color-primary-hover)]">
                        <LuSearch size={25} strokeWidth={3} color="white" />
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default SearchBar;