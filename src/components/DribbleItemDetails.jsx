import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { Link } from 'react-router-dom';


export const DribbleItemDetails = () => {
    const { id } = useParams()
    const [shotData, setShotData] = useState(null);
    const [isLoading, setIsloading] = useState(true)
    const accessToken = '5a198a358b4cddde4d2b6525fbc4ad6d7df63d59decc31039bc276d595e7fdf2'
    console.log(shotData)
    const { images, description, published_at, title } = shotData || {}
    useEffect(() => {
        const fetchShot = async () => {
            try {
                const response = await axios.get(`https://api.dribbble.com/v2/shots/${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (response.status === 200) {
                    const data = response.data
                    setShotData(data);
                    setIsloading(false)
                } else {
                    console.error(`Error: ${response.message}`);
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchShot();
    }, [id, accessToken]);
    return (
        <div className={`bg-white shadow-md rounded-lg p-6  h-[100vh]  mx-auto my-10 ${isLoading ? 'w-full' : 'w-fit'}`}>
            {
                isLoading ? <Loader /> : <div className="">
                    <div>
                        <img
                            src={images?.normal}
                            alt={title}
                            className="rounded-md w-auto h-[500px]"
                        />
                    </div>
                    <div className="flex items-center justify-between py-10">
                        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
                        <p className="text-gray-600 mb-2 ">Published Date: {new Date(published_at).toLocaleDateString()}</p>

                    </div>
                    <div className="text-blue-500 hover:underline mb-10">
                        <Link to="/">Back to home</Link>
                    </div>
                </div>
            }


        </div>
    )
}
