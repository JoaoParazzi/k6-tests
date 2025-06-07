import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = 'https://reqres.in/api';

export function login() {
  const payload = JSON.stringify({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  });

  const headers = { 'Content-Type': 'application/json' };

  const res = http.post(`${BASE_URL}/login`, payload, { headers });

  check(res, {
    'login status 200': (r) => r.status === 200,
    'token exists': (r) => r.json('token') !== undefined,
  });

  return res.json('token');
}
