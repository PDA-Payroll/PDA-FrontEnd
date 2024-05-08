import '@mantine/core/styles.layer.css'
import axios from 'axios';
import React, { useContext } from 'react';
import '../Styles/EmployeeModifier.css'
import { MantineProvider, Button, TextInput, Input, Fieldset, Space, Switch, Group, PasswordInput, SimpleGrid } from "@mantine/core"
import { useState } from 'react';
import { AuthContext } from '../AuthContext';
import { backendServer } from '../../constants';
import { Link } from 'react-router-dom';


function getEmployee() {
    const { employeeID } = useContext(AuthContext);
    axios
        .get(`http://${backendServer}/employee/get/supervisor/${1}`)
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            response.status == 200 ? setMessage("Success!") : "Error";
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
        });
};

export default function employeeModifier() {
    const { isAdmin } = useContext(AuthContext);

    const [message, setMessage] = useState('');
    const logID = () => { console.log(employeeID) }
    const outputEmp = () => { console.log(`Employee: ${firstName} ${middleName} ${lastName}`) }
    return (
        <MantineProvider>
            <Link to="/CreateEmployee">
                <Button className='mantine-Button-root1'
                    style={{ color: "black" }}>
                    Create Employee
                </Button>
            </Link>
            <Button style={{ color: 'black' }} className='mantine-Button-root1' onClick={getEmployee()}>Get by pk</Button>
        </MantineProvider>
    );
}