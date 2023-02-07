import React from 'react';
import Title from '../component/header'
import CutomeInput from '../component/input';

function TransportRequestForm() {
    return (
        <div>
            <Title />
            <div style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <CutomeInput name={"Requestor Name: "} form={"Form No"} />
                <hr />
                <h3 style={{ textAlign: 'center' }}>Transport Request</h3>
                <hr />
                <CutomeInput name={"Number :  "} form={"Ref No."} />
                <hr />

            </div>
        </div >
    )
}
export default TransportRequestForm
