import {check, sleep } from 'k6';
import { basethresholds } from '../../config/base.config.js';
import { getEmployee } from '../../services/employees.service.js';

export const options = {
    thresholds: {
        ...basethresholds
    },

    stages: [
        { duration: '20s', target: 3 },
        { duration: '20s', target: 8 },


        { duration: '20s', target: 30 },
        { duration: '1m', target: 30 },

        { duration: '20s', target: 0 },
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