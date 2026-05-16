import axios from "axios";

const API_URL = "http://localhost:8080";

function getAuthHeaders() {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function getShipments() {
  const response = await axios.get(`${API_URL}/api/shipments`, {
    headers: getAuthHeaders(),
  });

  return response.data;
}

export async function createShipment(shipmentData) {
  const response = await axios.post(`${API_URL}/api/shipments`, shipmentData, {
    headers: getAuthHeaders(),
  });

  return response.data;
}

export async function deleteShipment(trackingCode) {
  await axios.delete(`${API_URL}/api/shipments/${trackingCode}`, {
    headers: getAuthHeaders(),
  });
}