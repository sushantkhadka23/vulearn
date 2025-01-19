
import { useEffect } from "react";
import SearchBar from "../../../components/SearchBar";
import { cookieEndpointApi } from "../../../apis/cookieApi";


export default function XSSInjectionLab() {
  useEffect(()=>{

    const geti = async()=>{

      await cookieEndpointApi();

    }
    geti();

  },[]);


  return (
    <div>
      <SearchBar />
    </div>
  );
}
