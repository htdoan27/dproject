import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";
const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDllOWM1YWUyYTk3NDQ5NmViMTMyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Nzk4NzMwMiwiZXhwIjoxNjk4MjQ2NTAyfQ.wV4Lg1c5OPZODL6NrXuwMkAEwU4RIhkeuCLayONDimQ";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
