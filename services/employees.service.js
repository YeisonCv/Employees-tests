import http from 'k6/http';
import { config } from '../config/env.js';

export const getEmployee = (id) => {
    return http.get(
        `${config.BASE_URL}/v1/employees/${id}`
    );
}