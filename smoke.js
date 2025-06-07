import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, {
    'status é 200': (r) => r.status === 200,
  });
}
