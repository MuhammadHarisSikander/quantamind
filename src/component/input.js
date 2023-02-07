import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

export default function BasicTextFields({ name, form, nameData, formData }) {
    return (

        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
            <div style={{ display: 'flex' }}>
                <p style={{ fontSize: '22px', paddingRight: '20px' }}>{name}</p>

                <p style={{ fontSize: '22px' }}>{nameData}</p>
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{ fontSize: '22px', paddingRight: '20px' }}>{form}</p>

                <p style={{ fontSize: '22px' }}>{formData}</p>
            </div>

        </div>

    );
}