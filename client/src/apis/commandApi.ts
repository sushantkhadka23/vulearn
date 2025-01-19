import axios from "axios";

const command_endpoint = (input: string): string =>
  `http://localhost:3000/api/v1/cmdi/cmd?cmd=${encodeURIComponent(input)}`;

const commandApiEndpoint = async (input: string): Promise<string | object> => {
  try {
    const response = await axios.get(command_endpoint(input));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return `Error: Unable to process command (${error.response?.status})`;
    } else {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      return `Error: ${errorMessage}`;
    }
  }
};

export { commandApiEndpoint };
