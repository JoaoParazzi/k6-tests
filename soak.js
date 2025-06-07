import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 20,
  duration: '24h',
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
