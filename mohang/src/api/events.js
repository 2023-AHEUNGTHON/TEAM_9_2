import axios from "axios";
import apiInstance from ".";
import { BASE_URL } from "../static";

const getEvents = async () => {
  try {
    const response = await apiInstance.get("/mypage/events");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// const getAllEvents = async () => {
//   try {
//     await apiInstance.get("/posts").then((res) => {
//       console.log(res.data);
//       return res.data;
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

const getAllEvents = async () => {
  try {
    await axios.get("data/events.json").then((res) => {
      console.log(res.data);
      return res.data;
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchEvents = async () => {
  try {
    const response = await apiInstance.get("/posts");
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err; // 오류를 다시 던져서 외부에서 처리할 수 있게 함
  }
};
// const getAllEvents = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/posts`, {
//       headers: {
//         Authorization: `Bearer ${sessionStorage.getItem("token")}`,
//       },
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
export { getEvents, getAllEvents };