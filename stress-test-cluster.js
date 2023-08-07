import http from "k6/http";
import { sleep } from "k6";
// import { URL } from "https://jslib.k6.io/url/1.0.0/index.js";

export const options = {
  // Key configurations for Stress in this section
  stages: [
    { duration: "1m", target: 100 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: "2h", target: 100 }, // stay at higher 200 users for 10 minutes
    { duration: "1m", target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const url =
    "http://localhost:45427/api/datasources/proxy/1/loki/api/v1/query_range?direction=BACKWARD&limit=1000&query=%7Bcontainer%3D%22log-generator%22%2Cnamespace%3D%22default%22%7D&start=1689574757000000000&end=1689578358000000000&step=5";
  const headers = {
    Authorization:
      "Bearer eyJrIjoiVXEwWG1kTnBXWGdGUUlSRThSMHVoYWs0WHlYaDN3RDciLCJuIjoiYWRtaW4iLCJpZCI6MX0=",
  };
  const response = http.get(url, {
    headers,
  });
  console.log(response.body);
  sleep(1);
};
