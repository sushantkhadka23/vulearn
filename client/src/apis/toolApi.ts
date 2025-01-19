import axios from "axios";
import { ToolTopics } from "../models/tools";


const toolEndpoint: string = ``;

const toolApi = async (): Promise<ToolTopics | null> => {
  try {
    const response = await axios.get<ToolTopics>(toolEndpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};



export { toolApi };
