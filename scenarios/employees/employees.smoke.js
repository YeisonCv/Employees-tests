import {check, sleep } from 'k6';
import { basethresholds } from '../../config/base.config.js';
import { getEmployee } from '../../services/employees.service.js';

export const options = {
    thresholds: {
        ...basethresholds
    },

    stages: [
        { duration: '10s', target: 1 },
    ],
};


export default function () {
    const employee_id = "1";
    const response = getEmployee(employee_id);
    check(response, { 
        "status is 200": (r) => r.status === 200 
    });
    sleep(1);
}