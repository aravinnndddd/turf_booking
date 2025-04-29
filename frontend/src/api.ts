import axios from 'axios';

const API_URL = 'http://localhost:8000/api/'; // Replace with your Django backend URL

// API call to register a user
export const registerUser = async (data: { name: string, email: string, phone: string, password: string }) => {
  try {
    const response = await axios.post(`${API_URL}users/register/`, data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// API call to log in a user
export const loginUser = async (data: { username: string, password: string }) => {
  try {
    const response = await axios.post(`${API_URL}users/login/`, data);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Example API call for court booking (extend with more)
export const bookCourt = async (data: { user_id: number, court_id: number, booking_date: string }) => {
  try {
    const response = await axios.post(`${API_URL}booking/`, data);
    return response.data;
  } catch (error) {
    console.error('Error booking court:', error);
    throw error;
  }
};
