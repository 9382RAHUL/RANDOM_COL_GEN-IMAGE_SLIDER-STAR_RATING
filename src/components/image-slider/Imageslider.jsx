import React, { useEffect, useState } from "react";
import "./slider.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Imageslider = ({ url, limit = 5, page = 1 }) => {
  const [images, setimages] = useState([]);
  //get images from API
  const [currentslider, setcurrentslider] = useState(0);
  const [errormsg, seterrormsg] = useState(null);
  const [loading, setloading] = useState(false);
  const handleprevious=()=>{
    setcurrentslider(currentslider===0 ?images.length-1:currentslider-1);
  }
  const handlenext=()=>{
    setcurrentslider(currentslider===images.length-1 ?0:currentslider+1)
  }
  const fetchImages = async (geturl) => {
    try {
      setloading(true);
      const response = await fetch(`${geturl}?page=${page} & limit=${limit}`);
      const data = await response.json();
      if (data) {
        setimages(data);
        setloading(false);
      }
    } catch (e) {
      seterrormsg(e.messege);
      setloading(false);
    }
  };
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  if (errormsg !== null) {
    return <div className="text-center mt-5">error is .. {errormsg}</div>;
  }
  return (
    <>
    <h1>IMAGE SLIDER</h1>
      <div className="container">
        <BsArrowLeftCircleFill onClick={handleprevious} className="arrow arrow-left" />
        {images && images.length
          ? images.map((dataitem,index) => {
              return (
                <img src={dataitem.download_url} alt={dataitem.download_url} key={dataitem.id} className={currentslider===index?"current-image":"current-image hide-current-image"} />
              );
            })
          : null}
          <BsArrowRightCircleFill onClick={handlenext} className="arrow arrow-right"/>
          <span className="circle-indicators">

          {
            images && images.length? 
            images.map((__,index)=>{
                return (
                    <>
                    <button key={index} className={currentslider===index?"current-indicator":"current-indicator inactive-indicator"} onClick={()=>setcurrentslider(index)}></button>
                    </>
                )
            })
            :null

          }
          </span>
      </div>
    </>
  );
};

export default Imageslider;
