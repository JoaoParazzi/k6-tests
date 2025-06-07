import http from 'k6/http';
import { check, sleep } from 'k6';
import { login } from './helpers/auth.js';

export let options = {
  vus: 2,
  duration: '10s',
};

const BASE_URL = 'https://reqres.in/api';

export default function () {
  const token = login();

  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const res = http.get(`${BASE_URL}/users?page=1`, { headers });

  check(res, {
    'GET status 200': (r) => r.status === 200,
    'tem dados': (r) => r.json('data').length > 0,
  });

  sleep(1);
}
