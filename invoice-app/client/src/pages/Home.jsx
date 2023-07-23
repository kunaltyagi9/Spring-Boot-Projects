import { useState, useEffect } from "react";
import Header from '../components/Header';
import { Box, Typography, styled, Button } from '@mui/material';
import Invoices from '../components/Invoices';
import AddInvoice from "../components/AddInvoice";
import { getAllInvoices, deleteInvoice } from "../services/api";

const Component = styled(Box)`
    width: 80%;
    margin: 50px auto;
    & > h4 {
        margin-bottom: 20px;
    }
    & > thead {
        background-color: #000;
    }
    & > th {
        color: #FFFFFF;
        font-weight: 600;
        font-size: 16px;
    } 
    & > td {
        font-size: 16px;
    }
`

const defaultObj = {
    id: '',
    vendor: '',
    product: '',
    amount: '',
    date: ''
}

const Home = () => {
    const [invoices, setInvoices] = useState([]);
    const [addInvoice, setAddInvoice] = useState(false);

    useEffect(() => {
        const getData = async() => {
            const response = await getAllInvoices();
            response && response.data && setInvoices(response.data);
        }
        getData();
    }, [addInvoice]);

    const removeInvoice = async (id) => {
        await deleteInvoice(id);

        const updatedInvoices = invoices.filter(invoice => invoice.id != id);
        setInvoices(updatedInvoices);
    }

    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    return (
        <>
            <Header />
            <Box style={{ margin: 20 }}>
                <Typography variant="h4">Pending Invoices</Typography>
                {
                    !addInvoice && 
                        <Button 
                            variant="contained" 
                            onClick={() => toggleInvoice()}
                            style={{ marginTop: 15 }}
                        >Add Invoice</Button>
                }
                {
                    addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />
                }
                <Box>
                    <Invoices 
                        removeInvoice={removeInvoice}
                        invoices={invoices}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Home;