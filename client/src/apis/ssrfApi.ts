import axios from "axios";

const baseUrlEndpoint: string = "http://localhost:3000/api/v1/ssrf";

export const fetchSSRFData = async (url: string): Promise<any> => {
  try {
    const response = await axios.get(`${baseUrlEndpoint}/fetch-api`, {
      params: { url },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching SSRF data:", error.message || error);
    throw new Error(error.response?.data || "Failed to fetch data.");
  }
};

export const fetchAdminSafeData = async (): Promise<any> => {
  try {
    const response = await axios.get(`${baseUrlEndpoint}/admin`);
    return response.data;
  } catch (error: any) {
    console.error("Error fetching admin-safe data:", error.message || error);
    throw new Error(error.response?.data || "Failed to fetch admin-safe data.");
  }
};
