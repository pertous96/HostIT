import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
 
const FileUpload = () => {
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();
 
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
    };
 
    const onFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
 
        try {
            const res = await axios.post('/api/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-auth-token': localStorage.getItem('token'),
                },
            });
 
            dispatch({
                type: 'UPLOAD_SUCCESS',
                payload: res.data,
            });
            toast.success('File uploaded successfully');
        } catch (err) {
            dispatch({
                type: 'UPLOAD_FAIL',
                payload: err.response.data,
            });
            toast.error('File upload failed: ' + err.response.data.msg);
        }
    };
 
    return (
<div>
<Typography variant="h4" gutterBottom>Upload File</Typography>
<form onSubmit={onFileUpload}>
<TextField
                    type="file"
                    onChange={onFileChange}
                    fullWidth
                    variant="outlined"
                    margin="normal"
                />
<Button
                    type="submit"
                    variant="contained"
                    color="primary"
>
                    Upload
</Button>
</form>
</div>
    );
};
 
export default FileUpload;