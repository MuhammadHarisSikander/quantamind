import React from 'react';
import Title from '../component/header'
import CutomeInput from '../component/input';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TransportRequestForm() {
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <Title />
            <div style={{ paddingLeft: '10%', paddingRight: '10%', }}>
                <div style={{ border: '1px solid', padding: '20px', borderColor: '#C8C8C8' }}>

                    <CutomeInput name={"Requestor Name: "} nameData={"Haris"} form={"Form No"} formData={"12345"} />
                    <hr />
                    <h3 style={{ textAlign: 'center' }}>Transport Request</h3>
                    <hr />
                    <CutomeInput name={"Number :  "} nameData={"12345"} form={"Ref No."} formData={"12345"} />
                    <hr />
                    <CutomeInput name={"Number : "} nameData={"Lorem apsum"} />
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"Type : "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Checkbox {...label} defaultChecked /> <p style={{ display: 'flex', alignItems: 'center' }}>Customizing</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Checkbox {...label} defaultChecked /> <p style={{ display: 'flex', alignItems: 'center' }}>Work Bench</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"Released : "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Yes</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>No</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <CutomeInput name={"Special Instructions : "} nameData={"Lorem apsum"} />

                    <hr />
                    <h3 style={{ textAlign: 'center' }}>Priority</h3>
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"Priority : "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Normal</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Urgent</p>
                            </div>
                        </div>
                    </div>
                    <CutomeInput name={"Justifications: "} nameData={"Lorem apsum"} />
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"Priority : "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Approve</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Reject & Close</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Return to</p>
                            </div>
                            <CutomeInput name={"LOV"} />
                        </div>
                    </div>
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"Governance Manager:  "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Approve</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Reject & Close</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Return to</p>
                            </div>
                            <CutomeInput name={"LOV"} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"GM ITS:  "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Approve</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Reject & Close</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Return to</p>
                            </div>
                            <CutomeInput name={"LOV"} />
                        </div>
                    </div>


                    <hr />
                    <h3 style={{ textAlign: 'center' }}>Basis Section</h3>
                    <hr />
                    <CutomeInput name={"Basis Admin: "} nameData={"Haris"} form={"Date: "} formData={"12345"} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"Result: "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Success</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" name="radio-buttons" inputProps={{ 'aria-label': 'A' }} /> <p style={{ display: 'flex', alignItems: 'center' }}>Failure</p>
                            </div>
                        </div>
                    </div>

                    <CutomeInput name={"Justifications: "} nameData={"Lorem apsum"} />

                    <div style={{ flex: 1, justifyContent: 'center', display: 'flex' }}>
                        <div style={{ display: 'flex', marginRight: '5%' }}>
                            <Checkbox {...label} defaultChecked /> <p style={{ display: 'flex', alignItems: 'center' }}>Yes</p>
                        </div>
                        <div style={{ border: '1px solid', paddingLeft: '5%', paddingRight: '5%' }}>
                            <p>Upload Attachment</p>
                        </div>
                    </div>
                    <hr />

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <CutomeInput name={"Acknowledge : "} />
                        <div style={{ flex: 1, justifyContent: 'space-evenly', display: 'flex' }}>
                            <div style={{ display: 'flex' }}>
                                <Checkbox {...label} defaultChecked /> <p style={{ display: 'flex', alignItems: 'center' }}>Acknowledge</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
export default TransportRequestForm
