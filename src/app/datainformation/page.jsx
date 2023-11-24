import { useState, useEffect } from "react";
import HeaderD, { HeaderO } from "../header/page";
import Footer from "../footer/page";

export default function Datainformatio() {
  const [datainfo, setDataInfo] = useState([]);

  useEffect(() => {
    getData();

}, []);
const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/form/route");
        const data = await res.json();
        setDataInfo(data);
    } catch (error) {
        console.error(error);
    }
};






  return (
    <>
          <div className="flex justify-center text-center flex-wrap">
      {datainfo &&
        datainfo.map((i, k) => (
            <div  key={k} className="bg-[#6195ff] p-4 text-center m-2  text-white w-[300px] rounded">
              <h1 className="text-start">Name: {i.name}</h1>
              <div className="flex justify-between">
                <p>Numper: {i.phone}</p>
                <p>Age: {i.age}</p>
              </div>
              <div className="flex justify-between">
                <p>{i.receve}</p>
                <p>{i.fast}</p>
              </div>
              <div className="flex justify-between">
                <p>Nymper reserve: {k + 1}</p>
                <p>Date{i.data}</p>
              </div>
            </div>
        ))}
        </div>
    </>
  );
}