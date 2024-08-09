import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // console.log(data);
    // const [data, setData] = useState();
    // useEffect(() => {
    //     fetch('https://api.github.com/users/samalsagar')
    //         .then(resp => resp.json())
    //         .then(response => {
    //             console.log(response);
    //             setData(response);
    //         })
    // }, [])
    return (

        <div className='bg-gray-700 text-white p-4 font-bold text-2xl'>GITHUB ID : { data.login }
            <img src={data.avatar_url} alt="Git hub picture" width={300} className='rounded-lg' />
        </div>
    )
}

export default Github

export const gitHubLoader = async () => {
    const response = await fetch('https://api.github.com/users/samalsagar');

    return response.json();
}
