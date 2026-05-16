import axios from "axios";

const API_URL = "http://localhost:8080";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getInventoryItems() {
  const response = await axios.get(`${API_URL}/api/inventory/items`, {
    headers: getAuthHeaders(),
  });

  return response.data;
}