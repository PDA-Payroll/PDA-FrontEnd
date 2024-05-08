import "@mantine/core/styles.layer.css"
import { MantineProvider,Container, Fieldset, Button, TextInput, Space, Switch, Group, PasswordInput } from "@mantine/core";
import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../AuthContext";
import { backendServer } from "../../constants";

export default function CreateEmployee() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { isAdmin } = useContext(AuthContext);
    const [isEmployeeAdmin, setIsEmployeeAdmin] = useState(false);
    const [isSupervisor, setIsSupervisor] = useState(false);
    const [ssn, setSsn] = useState('');
    const { employeeID } = useContext(AuthContext);

    const [message, setMessage] = useState('');
    const createEmployee = () => {
        axios
            .post(`http://${backendServer}/employee/post/create`, {
                employeeFirstName: firstName,
                employeeMiddleName: middleName,
                employeeLastName: lastName,
                employeeUserName: userName,
                employeePassword: password,
                isAdmin: isEmployeeAdmin,
                isSupervisor: isSupervisor,
                socialSecurityNumber: ssn,
                supervisorId: employeeID,
            })
            .then((response) => {
                console.log(response.status);
                response.status == 200 ? setMessage("Success!") : "Error";
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const logID = () => { console.log(firstName) }
    const outputEmp = () => { console.log(`Employee: ${firstName} ${middleName} ${lastName}`) }
    return (
        <MantineProvider>

            <Container size={"xl"} w={500} mt={'md'} >
                <Fieldset legend="Create an Employee"  >
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
                    <PasswordInput label="Password"
                        value={password}
                        onChange={(event) => setPassword(event.currentTarget.value)}
                    />
                    <TextInput label="Social Security Number"
                        value={ssn}
                        onChange={(event) => setSsn(event.currentTarget.value)}
                    />
                    <Space h="md" /> {isAdmin == true &&
                        <Group>
                            <Switch
                                checked={isSupervisor}
                                onChange={(event) => setIsSupervisor(event.currentTarget.checked)}
                                color="#c9f3d5"
                                label="Supervisor"
                            />
                            <Switch
                                checked={isEmployeeAdmin}
                                onChange={(event) => setIsEmployeeAdmin(event.currentTarget.checked)}
                                color="#c9f3d5"
                                label="Admin"
                            />
                        </Group>
                    }
                    <Space h="md" />
                    <Button className="confirmButton"
                        fullWidth
                        variant="filled"
                        size="compact-md"
                        color="#ebf5ee"
                        style={{ color: "black" }}
                        onClick={createEmployee}
                    >Confirm</Button>
                </Fieldset>
            </Container>
        </MantineProvider>
    );
}