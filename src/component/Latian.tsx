import React from "react";

interface ILatian {
  gambar: string;
  pic: string;
  tanah?: string;
}
const Latian = ({ gambar, pic, tanah }: ILatian) => {
  return (
      <img
        src={gambar}
        alt={pic}
        className= {tanah}
      />
    
  );
};

export default Latian;
