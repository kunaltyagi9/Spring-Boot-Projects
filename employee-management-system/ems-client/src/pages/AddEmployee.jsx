import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddEmployee = () => {

    const [file, setFile] = useState('');
    
    useEffect(() => {
        const getImage = async () => { 
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                // const response = await API.uploadFile(data);
            }
        }
        getImage();
    }, [file])


    return (
        <Box>
            <Box>
                <Box htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </Box>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </Box>
            <Box>
                Hello
            </Box>
        </Box>
    )
}

export default AddEmployee;