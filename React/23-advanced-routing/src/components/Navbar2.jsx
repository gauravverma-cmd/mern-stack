    import { Navigate, useNavigate } from "react-router-dom";

    const Navbar2 = () => {
    let navigate = useNavigate();
    return (
        <div className="bg-amber-800 w-full flex py-3 gap-4 pl-2">
        <button
            onClick={() => {
            navigate("/");
            }}
            className="bg-amber-500 active:scale-95 rounded  py-4 px-6 text-lg font-bold text-black "
        >
            Return to Home
        </button>
        <button
            onClick={() => {
            navigate(-1);
            }}
            className="bg-amber-500 active:scale-95 rounded  py-4 px-6 text-lg font-bold text-black "
        >
            Back
        </button>
        <button
            onClick={() => {
            navigate(+1);
            }}
            className="bg-amber-500 active:scale-95 rounded  py-4 px-6 text-lg font-bold text-black "
        >
            Next
        </button>
        </div>
    );
    };

    export default Navbar2;
