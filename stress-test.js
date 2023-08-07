import http from "k6/http";
import { sleep } from "k6";
// import { URL } from "https://jslib.k6.io/url/1.0.0/index.js";

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: "2m", target: 500 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: "10m", target: 400 }, // stay at higher 200 users for 10 minutes
    { duration: "2m", target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const url = "https://hieupc.erlang.vn/api/history?page=1&limit=20";
  const response = http.get(url);
  // console.log(response.body);
  sleep(1);
};
