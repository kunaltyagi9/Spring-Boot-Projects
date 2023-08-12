import { useState, useEffect, useRef } from 'react';
import { Box, Card, CardContent, InputBase, Select, MenuItem, 
    Button, InputLabel, styled, FormControl } from '@mui/material';
import { uploadFile } from '../service/api';

const Wrapper = styled(Box)({
    display: 'flex',
    padding: 50
});

const Container = styled(Box)({
    margin: '0 50px',
    '& > *': {
        width: '70%',
        marginBottom: '20px !important'
    }
})

const displayImage = {
    width: 200,
    height: 200
}

const defaultData = {
    name: '',
    email: '',
    phone: '',
    designation: '',
    employmentType: '',
    workLocation: '',
    employmentStatus: '',
    numberOfWorkingDays: '',
    employeeImage: ''
}

const AddEmployee = () => {
    const [data, setData] = useState(defaultData);
    const [file, setFile] = useState('');

    const fileInputRef = useRef();
    
    useEffect(() => {
        const getImagePath = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const response = await uploadFile(data);
                setData({ ...data, employeeImage: response });
            }
        }
        getImagePath();
    }, [file])

    const openFileSelector = () => {
        console.log(fileInputRef);
        fileInputRef.current.click();
    }

    return (
        <Wrapper>
            <Box>
                <Card>
                    <CardContent>
                        {
                            !data.employeeImage ? 
                                <Box 
                                    style={displayImage} 
                                    onClick={() => openFileSelector()}
                                >Upload employee image</Box>
                            :
                                <img style={displayImage} src={data.employeeImage} alt="image" />
                        }
                    </CardContent>
                </Card>
                <input
                    type="file"
                    id="fileInput"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </Box>
            <Container>
                <InputBase placeholder='Name' />
                <InputBase placeholder='Email' />
                <InputBase placeholder='Phone' />
                <FormControl>
                    <InputLabel id="designation-select">Designation</InputLabel>
                    <Select
                        labelId="designation-select"
                        value={data.designation}
                    >
                        <MenuItem value={''}>Software Engineer</MenuItem>
                        <MenuItem value={''}>Sr. Software Engineer</MenuItem>
                        <MenuItem value={''}>Team Lead</MenuItem>
                        <MenuItem value={''}>Manager</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="employment-type-select">Emploment Type</InputLabel>
                    <Select
                        labelId="employment-type-select"
                    >
                        <MenuItem value={10}>Full Time</MenuItem>
                        <MenuItem value={10}>Probation</MenuItem>
                        <MenuItem value={20}>Notice Period</MenuItem>
                        <MenuItem value={30}>InActive</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="work-location-select">Work Location</InputLabel>
                    <Select
                        labelId="work-location-select"
                    >
                        <MenuItem value={10}>Delhi/NCR</MenuItem>
                        <MenuItem value={20}>Bengaluru</MenuItem>
                        <MenuItem value={30}>Pune</MenuItem>
                        <MenuItem value={30}>Chennai</MenuItem>
                        <MenuItem value={30}>Kolkata</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="employment-status-select">Emploment Status</InputLabel>
                    <Select
                        labelId="employment-status-select"
                    >
                        <MenuItem value={10}>Permanent</MenuItem>
                        <MenuItem value={20}>Contactor</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="number-of-working-days-select">Number Of Working Days</InputLabel>
                    <Select
                        labelId="number-of-working-days-select"
                    >
                        <MenuItem value={10}>5</MenuItem>
                        <MenuItem value={20}>6</MenuItem>
                        <MenuItem value={20}>7</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained">Submit</Button>
            </Container>
        </Wrapper>
    )
}

export default AddEmployee;