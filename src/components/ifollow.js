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
        <div className="h2 pt-4 pb-2">i-Follow</div>
        <div style={{width:"100%"}} className="">
            <input className="w-100 p-2 " type="text"/>
        </div>
        <div className="h2 pt-4 pb-2">Companies Followed</div>
        
        <div className="h3 pt-4 pb-2">Browse Companies</div>
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
