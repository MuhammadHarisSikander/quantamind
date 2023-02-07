// import logo from './logo.svg';
// import TransportRequestForm from './screens/transportRequestForm';
import { Tabs, Tab } from '@mui/material';
// import './App.css';  

function Header() {
    let value
    return (
        <Tabs style={{ display: 'flex', justifyContent: 'space-around', justifySelf: 'self-start', flex: 1, backgroundColor: 'rgb(200, 200, 200)' }} variant={'fullWidth'} value={value} aria-label="disabled tabs example">
            <Tab label="TECHNICAL AND USER ACCEPTANCE TESTING FORM" />
            <Tab label="TRANSPORT REQUEST FORM" />
            <Tab label="SOFTWARE CHANGE REQUEST FORM" />
        </Tabs>

    );
}

export default Header;
