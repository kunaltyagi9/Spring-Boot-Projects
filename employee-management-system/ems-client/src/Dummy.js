import { useEffect, useState } from "react";
import axios from 'axios'; // npm i axios

// componentDidMount
// componentDidUpdate

const Dummy = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            // API call
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        }
        getData();
    }, [])

    return (
        <div>
            {
                data.map(obj => {
                    return <h1>{obj.name}</h1>
                })
            }
        </div>
    )

    // forEach(String name: data) {
    //     System.out.print(name);
    // }
}

export default Dummy;