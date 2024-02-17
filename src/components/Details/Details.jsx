import React, { useEffect } from "react";
import { useState } from "react";
import "bulma/css/bulma.min.css";

const Details = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/user/detail", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="container title is-size-4 has-text-centered">
        Loading...
      </div>
    );
  }

  if (error) {
    console.log("Error is ", error);
    return (
      <div className="container title is-size-4 has-text-centered">
        Some Error Occured
      </div>
    );
  }

  if (!data) {
    return (
      <div className="container title is-size-4 has-text-centered">
        No data available
      </div>
    );
  }

  console.log(data);

  return (
    <div className="container">
      <h2 className="title has-text-centered mt-5">Details</h2>
      <div className="table-container mt-5">
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-fullheight $table-cell-padding-4 $table-cell-border-width-2">
          <thead>
            <tr>
              <th>Date</th>
              <th>Obtained</th>
              <th>Total</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              // Parse the date string to get day, month, and year
              const dateObj = new Date(item.CreatedAt);
              const day = String(dateObj.getDate()).padStart(2, "0");
              const month = String(dateObj.getMonth() + 1).padStart(2, "0");
              const year = dateObj.getFullYear();

              // Concatenate day, month, and year with '-' separator
              const formattedDate = `${day}-${month}-${year}`;

              return (
                <tr key={item.id}>
                  <td>{formattedDate}</td>
                  <td>{item.total}</td>
                  <td>{item.maximum}</td>
                  <td>{item.subject}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <button className="button is-success">Print</button>
      </div>
    </div>
  );
};

export default Details;
