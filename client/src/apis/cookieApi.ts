import axios from "axios";

const cookieUrl: string = "http://localhost:3000/api/v1/xss/send-cookie";

const cookieEndpointApi = async (): Promise<any> => {
  try {
    const response = await axios.get(cookieUrl,{ withCredentials: true });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return `Error: ${error.response?.statusText || error.message}`;
    } else {
      return "Error: An unknown error occurred";
    }
  }
};

export { cookieEndpointApi };


