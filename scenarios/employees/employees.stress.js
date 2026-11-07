import {check, sleep } from 'k6';
import { basethresholds } from '../../config/base.config.js';
import { getEmployee } from '../../services/employees.service.js';

export const options = {
    thresholds: {
        ...basethresholds
    },

    stages: [
        { duration: '10s', target: 5 },
        { duration: '30s', target: 100 },


        { duration: '1.5m', target: 1000 },
        { duration: '1m', target: 1000 },

        { duration: '20s', target: 5 },
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