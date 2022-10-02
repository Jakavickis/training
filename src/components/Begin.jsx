import axios from 'axios'
import { useEffect, useState } from 'react';

function Begin() {

    const [owners, setOwners] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/api')
            .then(res => {
                console.log(res.data)
                setOwners(res.data);
            });
    }, []);

    return (
        <>
            <div>hi world</div>
        </>
    )
}

export default Begin;
