const command_endpoint = (input: string): string => 
    `http://localhost:3000/api/v1/cmdi/cmd?cmd=${encodeURIComponent(input)}`;
  
  const commandApiEndpoint = async (input: string): Promise<string | object> => {
    try {
      const response = await fetch(command_endpoint(input));
  
      if (response.ok) {
        const output:string = await response.json();
        console.log(output);
        return output;
      } else {
        return `Error: Unable to process command (${response.status})`;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      return `Error: ${errorMessage}`;
    }
  };

  export {commandApiEndpoint};
  