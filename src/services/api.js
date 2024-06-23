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
