const endpoint: string = "http://localhost:3000/api/v1/no-sql/users";

//admin720374 
//adminisdanger

export interface Users {
  id: string;
  username: string;
  password: string;
  flag: string;
}

const noSQLLogin = async (username: string, password: string) => {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to login: ${errorMessage}`);
    }

    const data: Users | null = await res.json(); 
    return data;
  } catch (error: unknown) {
    console.error("Fetch error:", error);
    throw error;
  }
};


export { noSQLLogin };