

const Loader = () => {
    return (
        <div className="text-center py-10 flex items-center justify-center w-full h-[100vh]">
            <svg
                className="animate-spin h-16 w-16 text-indigo-600 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.855 3.016 7.975l2-2.684z"
                ></path>
            </svg>
        </div>
       
    )
}

export default Loader