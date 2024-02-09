import React, { useEffect, useState } from "react";
import Latian from "@/component/Latian";
import Head from "next/head";

const Navbar = () => {
  return (
    <Head>
      <header className="bg-white p-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2x1 font-bold text-black">gambar mobil</h1>
          <ul className="flex space-x-2">
            <li>
              <a href="#" className="text-black">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black">
                Order
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Head>
  );
};

const iterasi = [
  {
    src: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1440",
    alt: "red ferrari",
    deskripsi: "this is a red ferrari",
  },
  {
    src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "lambo",
    deskripsi: "its a Lambo",
  },
  {
    src: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "amg",
    deskripsi: "its an amg",
  },
  {
    src: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "classy",
    deskripsi: "classy never end",
  },
  {
    src: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "classy",
    deskripsi: "classy never end",
  },
  {
    src: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "classy",
    deskripsi: "classy never end",
  },
];

const index = () => {
  const [selectedCar, setSelectedCar] = useState("Blue");

  useEffect(() => {
    if (selectedCar != null) {
      document.body.classList.add("bg-Blue");
    } else {
      document.body.classList.remove("bg-Blue");
    }
  }, [selectedCar]);

  return (
    <>
      {" "}
      <Navbar />
      {/* <div style={{backgroundColor: '$(selectedCar', transition:'.3s ease', cursor:'pointer'}}>  */}
      <div className="container contents-center flex justify-center gap-56 flex-wrap p-10 ">
        {iterasi.map((value, index) => {
          const [selectedCar, setSelectedCar] = useState("Blue");
          return (
            <>
              <div
                key={index}
                className="align-center p-10 border w-60 bg-white"
                // onClick={() => setSelectedCar(index)}
              >
                <Latian
                  gambar={value.src}
                  pic={value.alt}
                  tanah="w-40 h-40 object-cover"
                  // onClick = {()=> setSelectedCar(index)}
                />

                <div className="bottom-0 left-5 right-5 bg-opacity-50 p-5">
                  <h1 className="  text-black">{value.deskripsi}</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {/* </div> */}
    </>
  );
};

export default index;
