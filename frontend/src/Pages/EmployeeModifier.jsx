import '@mantine/core/styles/Modal.css';
import axios from 'axios';
import React from 'react';
import '../Styles/EmployeeModifier.css'
import {MantineProvider,Modal, Button} from "@mantine/core"
import AdminHome from './AdminHome';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { Form } from 'react-router-dom';

export default function employeeModifier(){
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSupervisor, setIsSupervisor] = useState(false);
    const [ssn, setSsn] = useState('');
    const [sId, setSId] = useState('');
    const createEmployee = () => {
        axios
        .post('http://${backendServer}/employee/post/create',{
            employeeFirstName: firstName,
            employeeMiddleName: middleName, 
            employeeLastName: lastName,
            employeeUserName: userName,
            employeePassword: password,
            isAdmin: isAdmin,
            isSupervisor: isSupervisor,
            socialSecurityNumber: ssn,
            supervisorId: sId,
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    const [opened, {open, close}] = useDisclosure(false);
    return(
        <MantineProvider>
            <Modal opened={opened} onClose={close} title="Create Employee Account" centered>
            
            </Modal>
            <Button style={{color: "black"}}onClick={open}>
               Create Employee 
            </Button>
        </MantineProvider>
    );
}