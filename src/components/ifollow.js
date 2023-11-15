import React, { useEffect } from "react";
import Header from "./header";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies } from "../redux/slices/dataSlice";
import { Link } from "react-router-dom";

function Ifollow() {
    const dispatch = useDispatch();
    const companyData = useSelector((state) => state.User.value.companyData)
    useEffect(() => {
       dispatch(getAllCompanies())
    },[])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="h3">i-Follow</div>
        <div style={{display : "grid",gridTemplateColumns: "repeat(4,1fr)" }} className="gap-3">
        {
              companyData && companyData.map((e)=>{
                return(
                  <div className="border ">
                    <div>{e.company_name}</div>
                    <div>{e.email}</div>
                    <div>
                      <Link to={"/viewCompany/" + e._id}>
                        view Company
                      </Link>
                    </div>
                  </div>
                  
                )
              })
             }
        </div>
      </div>
    </div>
  );
}

export default Ifollow;
