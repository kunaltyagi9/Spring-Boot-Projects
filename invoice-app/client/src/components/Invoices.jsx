
import { TableCell, Table, TableHead, TableRow, TableBody, Button, Typography, styled } from '@mui/material';

const StyledTable = styled(Table)({
    margin: 20,
    marginTop: 40,
    width: '80%',
    '& > thead > tr > th': {
        background: '#000',
        color: '#FFFFFF',
        fontSize: 18
    },
    '& > tbody > tr > td': {
        fontSize: 16
    },
    '& > tbody > p': {
        fontSize: 18,
        marginTop: 15
    }
})

const Invoices = ({ invoices, removeInvoice }) => {
    return (
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    invoices && Array.isArray(invoices) && invoices.length > 0 ?
                        invoices.map(invoice => (
                            <TableRow key={invoice.id}>
                                <TableCell>{invoice.vendor}</TableCell>
                                <TableCell>{invoice.product}</TableCell>
                                <TableCell>Rs {invoice.amount}</TableCell>
                                <TableCell>{invoice.date}</TableCell>
                                <TableCell>{invoice.action}</TableCell>
                                <TableCell><Button variant="contained" color="success" onClick={() => removeInvoice(invoice.id)}>Mark Done</Button></TableCell>
                            </TableRow>
                        ))
                        :
                        <Typography>No pending invoices</Typography>
                }
            </TableBody>
        </StyledTable>
    )
}

export default Invoices;