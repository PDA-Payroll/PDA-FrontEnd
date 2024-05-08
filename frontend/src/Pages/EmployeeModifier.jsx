import '@mantine/core/styles.layer.css'
import axios from 'axios';
import React, { useContext } from 'react';
import '../Styles/EmployeeModifier.css'
import { MantineProvider, Button, TextInput, Input, Fieldset, Space, Switch } from "@mantine/core"
import AdminHome from './AdminHome';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { AuthContext } from '../AuthContext';

export default function employeeModifier() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { isAdmin } = useContext(AuthContext);
    const [isSupervisor, setIsSupervisor] = useState(false);
    const [ssn, setSsn] = useState('');
    const { employeeID } = useContext(AuthContext);
    const createEmployee = () => {
        axios
            .post(`http://${backendServer}/employee/post/create`, {
                employeeFirstName: firstName,
                employeeMiddleName: middleName,
                employeeLastName: lastName,
                employeeUserName: userName,
                employeePassword: password,
                isAdmin: isAdmin,
                isSupervisor: isSupervisor,
                socialSecurityNumber: ssn,
                supervisorId: employeeID,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [opened, { open, close }] = useDisclosure(false);
    const logID = () => { console.log(firstName) }
    const outputEmp = () => {console.log(`Employee: ${firstName} ${middleName} ${lastName}`)}
    return (
        <MantineProvider>
            <Fieldset legend="Create an Employee" >
                <TextInput label="First Name"
                    value={firstName}
                    onChange={(event) => setFirstName(event.currentTarget.value)}
                />
                <TextInput label="Middle Name"
                    value={middleName}
                    onChange={(event) => setMiddleName(event.currentTarget.value)}
                />
                <TextInput label="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.currentTarget.value)}
                />
                <TextInput label="User Name"
                    value={userName}
                    onChange={(event) => setUserName(event.currentTarget.value)}
                />
                <TextInput label="Password"
                    value={password}
                    onChange={(event) => setPassword(event.currentTarget.value)}
                />
                <TextInput label="Social Security Number"
                    value={ssn}
                    onChange={(event) => setSsn(event.currentTarget.value)}
                />
                <Space h="md" />
                {isAdmin == true && <Switch
                    checked={isSupervisor}
                    onChange={(event) => setIsSupervisor(event.currentTarget.checked)}
                    color="#c9f3d5"
                    label="Supervisor"
                />
                }
                <Space h="md" />
                <Button className="confirmButton"
                    fullWidth
                    variant="filled"
                    size="compact-md"
                    color="#ebf5ee"
                    style={{ color: "black" }}
                    onClick={outputEmp}
                >Confirm</Button>
            </Fieldset>
            <Button className='mantine-Button-root1' style={{ color: "black" }} onClick={open}>
                Create Employee
            </Button>

        </MantineProvider>
    );
}