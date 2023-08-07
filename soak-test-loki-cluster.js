import http from "k6/http";
import { sleep } from "k6";
// import { URL } from "https://jslib.k6.io/url/1.0.0/index.js";

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: "5m", target: 300 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: "2h", target: 300 }, // stay at higher 200 users for 10 minutes
    { duration: "5m", target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const url =
    "http://10.3.53.47:30219/api/datasources/proxy/2/loki/api/v1/query_range?direction=BACKWARD&limit=1000&query=%7Bcomponent%3D%22promtail%22%7D&start=1689043918000000000&end=1689216719000000000&step=300";
  const headers = {
    Authorization:
      "Bearer eyJrIjoiVjJ0NTBaaXZXU3VKekE5bDkwTFFycWZKUThpUmlKa0YiLCJuIjoiYWRtaW4iLCJpZCI6MX0=",
  };
  const response = http.get(url, {
    headers,
  });
  // console.log(response.body);
  sleep(1);
};
