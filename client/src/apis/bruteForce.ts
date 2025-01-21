import axios from "axios";

const bruteForcePostEndpoint: string =
  "http://localhost:3000/api/v1/brute/login";
const downloadBruteForceListEndpoint: string =
  "http://localhost:3000/api/v1/brute/list";

export interface BruteForceResponse {
  username: string;
  password: string;
  flag: string;
}

const bruteForcePostRequest = async (
  username: string,
  password: string
): Promise<BruteForceResponse | null> => {
  try {
    const response = await axios.post(
      bruteForcePostEndpoint,
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
      throw new Error(`${errorMessage}`);
    } else {
      console.error("Unexpected error:", error);
      throw new Error("An unknown error occurred during login.");
    }
  }
};

// Function to download the brute force list from the backend
const downloadBruteForceList = async (fileName: string) => {
  try {
    const response = await axios.get(downloadBruteForceListEndpoint, {
      params: { filename: fileName },
      responseType: "blob", 
    });
    const fileURL = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = fileURL;
    link.setAttribute("download", `${fileName}.txt`); 
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  } catch (error) {
    console.error("Error downloading the file:", error);
    throw new Error("Failed to download the brute force list.");
  }
};

export { bruteForcePostRequest, downloadBruteForceList };
