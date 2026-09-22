import { LuLoader } from "react-icons/lu";
const LoadingSpinner = () => {
    return (
        <div className="bg-[var(--color-overlay)] w-full h-full flex justify-center items-center backdrop-blur-[4px] absolute top-0 left-0">
            <div className="animate-spin [animation-duration:2.2s]">
                <LuLoader size={50} color="goldenrod" />
            </div>
        </div>
    );
};

export default LoadingSpinner;