import React, { useEffect, useState } from 'react'

async function GetData(url) {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => setError(error))
            .finally(()=> setLoading(false));
    }, [])



    return { data , loading , error };
}

export default GetData