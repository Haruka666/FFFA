import axios from "axios";

const API_URL = 'http://localhost:5000/api';

export const fetchHelloMessage = async (query) => {
  try {
    const response = await fetch(`${API_URL}/hello?query=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const addMatch = async (match) => {
  try {
    const response = await axios.post(`${API_URL}/matches`, match);
    return response.data;
  } catch (error) {
    console.error('Error adding match:', error);
  }
};
