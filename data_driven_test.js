import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '20s',
};

const users = [
  { email: 'eve.holt@reqres.in', password: 'cityslicka' }, // aqui é um usuário válido
  { email: 'wrong.user@reqres.in', password: 'invalidpass' }, // aqui é um usuário inválido
];

export default function () {
  users.forEach((user) => {
    const payload = JSON.stringify(user);
    const headers = { 'Content-Type': 'application/json' };
    const res = http.post('https://reqres.in/api/login', payload, { headers });

    check(res, {
      'status is 200 or 400': (r) => r.status === 200 || r.status === 400,
      'token exists on success': (r) => r.status !== 200 || JSON.parse(r.body).token !== undefined,
    });

    sleep(1);
  });
}
