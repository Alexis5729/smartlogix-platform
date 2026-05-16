import axios from "axios";

const API_URL = "http://localhost:8080";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getOrders() {
  const response = await axios.get(`${API_URL}/api/orders`, {
    headers: getAuthHeaders(),
  });

  return response.data;
}

export async function createOrder(orderData) {
  const response = await axios.post(`${API_URL}/api/orders`, orderData, {
    headers: getAuthHeaders(),
  });

  return response.data;
}

export async function deleteOrder(orderNumber) {
  await axios.delete(`${API_URL}/api/orders/${orderNumber}`, {
    headers: getAuthHeaders(),
  });
}