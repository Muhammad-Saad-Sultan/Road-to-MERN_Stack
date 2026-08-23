const ErrorMessage = ({error}) => {
    return (
        <div className="bg-red-100/50 w-[min(90%,650px)] my-5 mx-auto py-4 px-5 flex justify-center items-center border border-red-500/50 border-l-[5px] border-l-red-500 rounded-[10px] shadow-[0_3px_10px_rgba(220,53,69,0.15)] animate-slide">
            <p className="m-0 text-red-800 text-base font-semibold text-center">{error}</p>
        </div>
    );
};

export default ErrorMessage;
