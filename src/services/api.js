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

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'Login failed' };
  }
};

export const inscription = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/inscription`, formData);
    return response.data;
  } catch (error) {
    console.error('Error adding match:', error);
  }
};

