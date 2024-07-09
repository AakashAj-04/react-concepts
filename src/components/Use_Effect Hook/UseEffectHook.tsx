import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response: any) => {
        setData(response?.data[0]?.email);
        console.log(response?.data);
      });
  }, []);
  return (
    <div>
      <h3>useEffect Hook</h3>
      {/* {data.map((res: any, index: any) => (
        <div key={index}>{res.email}</div>
      ))} */}
      <h4>Email ID :{data}</h4>
    </div>
  );
};

export default UseEffectHook;
