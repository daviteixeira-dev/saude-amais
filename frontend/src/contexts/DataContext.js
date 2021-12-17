import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [state, setState] = useState([]);

  async function data(endPoint) {
    try {
      const res = await fetch(`http://localhost:3000/${endPoint}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function setData(values, endPoint) {
    const options = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(`http://localhost:3000/${endPoint}/`, options);
      const data = await res.json();
      setState((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function deleteData(endPoint, id) {
    try {
      fetch(`http://localhost:3000/${endPoint}/${id}`, { method: "DELETE" });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DataContext.Provider value={{ state, data, setData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
}
