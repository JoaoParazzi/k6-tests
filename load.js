import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 50 }, 
    { duration: '20s', target: 50 },  
    { duration: '10s', target: 0 }, 
  ],
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, {
    'status é 200': (r) => r.status === 200,
  });
  sleep(1);
}
