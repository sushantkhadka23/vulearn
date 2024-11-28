
  interface NoSQLLoginResponse {
    success: boolean;
    message: string;
  }
  
  const noSQLLogin = async (username: string, password: string): Promise<NoSQLLoginResponse> => {
    try {
      const response = await fetch("/api/nosql-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to login');
      }
  
      const data: NoSQLLoginResponse = await response.json();
      return data; 
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error:', error.message);
        return { success: false, message: error.message };
      } else {
        console.error('Unknown error:', error);
        return { success: false, message: 'Unknown error' };
      }
    }
  };
  
  export { noSQLLogin };
  