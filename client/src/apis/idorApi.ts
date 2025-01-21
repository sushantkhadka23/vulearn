import axios from "axios";

const idorPostEndpoint: string = "http://localhost:3000/api/v1/idor/login";
const idorGetUserDataEndpoint: string = "http://localhost:3000/api/v1/idor/user/:id";

export interface IdorResponse{
    username:string;
    password:string;
    flag:string;
}
const idorPostRequest = async (username: string, password: string): Promise<IdorResponse | null> => {
  try {
    const response = await axios.post(
      idorPostEndpoint,
      { username, password },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data || error.message;
      if (error.response?.status === 401 || error.response?.status === 404) {
        throw new Error("Invalid username or password.");
      }
      throw new Error(`Failed to login: ${errorMessage}`); 
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unknown error occurred during login.");
    }
  }
};

// Function for GET request
const idorGetUserData = async (): Promise<string | null> => {
  try {
    const response = await axios.get(idorGetUserDataEndpoint, { withCredentials: true });
    return response.data; // Ensure response data is returned, not the entire response object.
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch user data:", error.message);
      return null; // Return `null` explicitly in case of failure.
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unknown error occurred while fetching user data.");
    }
  }
};

export { idorPostRequest, idorGetUserData};
