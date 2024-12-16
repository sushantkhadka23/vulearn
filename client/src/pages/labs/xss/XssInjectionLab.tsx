import { useEffect } from "react";
import SearchBar from "../../../components/SearchBar";
import { cookieEndpointApi } from "../../../apis/cookieApi";

export default function XSSInjectionLab() {
  useEffect(() => {
    const fetchCookieData = async () => {
      try {
        const response = await cookieEndpointApi();
        document.cookie = response;
        console.log("Response:", response); 
      } catch (error) {
        console.error("Error fetching cookie data:", error);
      }
    };

    fetchCookieData();
  }, []);

  return (
    <div>
      <SearchBar />
    </div>
  );
}
