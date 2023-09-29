import { useState, useEffect } from 'react';
import axios from 'axios';
import ShotCard from './ShotCard';
import Loader from './Loader';

const DribbleItem = () => {
    const [shots, setShots] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.dribbble.com/v2/user/shots?access_token=5a198a358b4cddde4d2b6525fbc4ad6d7df63d59decc31039bc276d595e7fdf2')
            .then(response => {
                setShots(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching shots:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
               <Loader/>
            ) : (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
                    {shots.map(shot => (
                        <ShotCard key={shot.id} shot={shot} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default DribbleItem;
