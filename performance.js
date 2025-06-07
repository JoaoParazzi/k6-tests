import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

export const options = {
  vus: 20,
  duration: '25s',
  thresholds: {
    http_req_duration: ['p(95)<500'], 
  },
};

const responseTimeTrend = new Trend('tempo_resposta');

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, {
    'status é 200': (r) => r.status === 200,
  });
  responseTimeTrend.add(res.timings.duration);
  sleep(1);
}
