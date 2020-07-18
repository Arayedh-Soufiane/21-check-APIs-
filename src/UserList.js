import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

export default function UserList() {
  const [listOfUSer, setlistOfUSer] = useState([]); // new

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result.data);
      setlistOfUSer(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="classUser">
      {listOfUSer.map((item) => (
        <div key={item.id} className="classkey">
          <div className="classna">
            <h3>name:</h3> {item.name}
          </div>
          <div className="classna">
            <h3>username:</h3> {item.username}
          </div>
          <div className="classna">
            <h3>email:</h3> {item.email}
          </div>
          <div className="classna classStreet">
            <h3>Address</h3> <h4></h4>
            <div className="classna">
              <h4>street:</h4> {item.address.street}
            </div>
            <div className="classna">
              {" "}
              <h4> city:</h4>
              {item.address.city}
            </div>
            <div className="classna">
              {" "}
              <h4>zipcode:</h4> {item.address.zipcode}
            </div>
            <div className="classna">
              {" "}
              <h4>suite:</h4> {item.address.suite}
            </div>
            <div className="classStreet">
              <h3> Geo</h3>
              <div className="classna">
                {" "}
                <h4>lat:</h4> {item.address.geo.lat}
              </div>
              <div className="classna">
                {" "}
                <h4>lng:</h4> {item.address.geo.lng}
              </div>
            </div>
          </div>
          <div className="classna">
            <h3>phone:</h3> {item.phone}
          </div>
          <div className="classna">
            <h3>website:</h3> {item.website}
          </div>
          <div className="classna classStreet">
            <h3>Company</h3>
            <div className="classna">
              {" "}
              <h4>name:</h4> {item.company.name}
            </div>
            <div className="classna">
              {" "}
              <h4>catchPhrase:</h4> {item.company.catchPhrase}
            </div>
            <div className="classna">
              {" "}
              <h4>bs:</h4> {item.company.bs}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
