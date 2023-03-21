import { useState, useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import { getAllEmployees } from '../service/api';

const AllEmployees = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const getEmployeesData = async () => {
            const result = await getAllEmployees();
            setEmployees(result);
        }
        getEmployeesData();
    }, [])

    return (
        <>
            {
                employees?.map(employee => (
                    <Card>
                        <CardContent>
                            Hello
                        </CardContent>
                    </Card>
                ))       
            }
        </>
    )
}

export default AllEmployees;