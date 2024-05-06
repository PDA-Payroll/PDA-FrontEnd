import '@mantine/core/styles/Modal.css';
import axios from 'axios';
import '../Styles/EmployeeModifier.css'
import {MantineProvider,Modal, Button} from "@mantine/core"
import AdminHome from './AdminHome';
import { useDisclosure } from '@mantine/hooks';

export default function employeeModifier(){

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
        }
    )
    }
    const [opened, {open, close}] = useDisclosure(false);
    return(
        <MantineProvider>
            <Modal opened={opened} onClose={close} title="Create Employee Account">
                {
                    <Text>Me when I uh</Text>
                }
            </Modal>
            <Button style={{color: "black"}}onClick={open}>
               Create Employee 
            </Button>
        </MantineProvider>
    );
}