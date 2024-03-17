import React, { useState } from "react";
import axios from "axios";
import Wave from "./media/Wave.png";
import picture from "./media/Picture Profile.png";
import Location from "./media/Location.png";
import Email from "./media/Email.png";
import Facebook from "./media/Facebook.png";
import Instgram from "./media/Instagram.png";
import Links from "./media/Links.png";
import Whatsapp from "./media/Whatsapp.png";
import Twiter from "./media/Twiter.png";
import Ahmad from "./media/ahmad.png";
const Sales = () => {
  const [file, setFile] = useState();
  const [userInfo, setUserInfo] = useState({
    first_name: "ahmad",
    last_name: "shehadeh",
    LinkedIn_link: "ahmad",
    LinkedIn_label: "ahmad",
    snapchat_link: "ahmad",
    snapchat_lable: "ahmad",
    location: "ahmad",
    email_work: "",
    Whatsapp: "",
    facbook_link: "ahmad",
    facbook_label: "ahmad",
    X_link: "",
    X_lable:'',
    instagram_link: "",
    instagram_lable: "",
    Info1_link: "",
    Info1_lable: "",
    phone_no: "ahmad",
    Info2_link: "",
    Info2_lable: "",
    user_image: "",
  });
  const [url, setUrl] = useState("");

  const uploadImage = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    setUserInfo({ ...userInfo, user_image: e.target.files[0] });
    console.log("image:", file);
    console.log("userInfo.user_image:", userInfo.user_image);
    
  };

  //?====cloudinary=======

  const uploadImagecloudinary = () => {
    const data = new FormData();
    data.append("file", userInfo.user_image);
    data.append("upload_preset", "circleConnect");
    data.append("cloud_name", "dh2mazipf");
    fetch("https://api.cloudinary.com/v1_1/dh2mazipf/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
        
        setUserInfo({ ...userInfo, user_image: data.url })
        senduserinfo();
      })
      .catch((err) => console.log(err));
  };
  const senduserinfo = async () => {
    console.log('userInfo.user_image:', userInfo.user_image);

    try {
      const result = await axios.post(
        "http://localhost:5000/info/personal",
        userInfo
      );
      console.log(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="main_dev_user">
        <div className="Top_wave">
          <img className="wave" src={Wave}></img>
          <img className="picture" src={Ahmad}></img>
        </div>

        <div className="social_media_section">
          <div className="social_media">
            <img className="social_media_img" src={Location}></img>
            <input
              placeholder="location"
              className="inputsales"
              onChange={(e) => {
                setUserInfo({ ...userInfo, location: e.target.value });
              }}
            ></input>
          </div>

          <div className="social_media">
            <img className="social_media_img" src={Email}></img>
            <input
              placeholder="Email"
              className="inputsales"
              onChange={(e) => {
                setUserInfo({ ...userInfo, email_work: e.target.value });
              }}
            ></input>
          </div>
          <div className="social_media">
            <img className="social_media_img" src={Whatsapp}></img>
            <input
              placeholder="Whatsapp"
              className="inputsales"
              onChange={(e) => {
                setUserInfo({ ...userInfo, Whatsapp: e.target.value });
              }}
            ></input>
          </div>
          <div className="social_media">
            <img className="social_media_img" src={Facebook}></img>
            <input
              placeholder="Facebook"
              className="inputsales"
              onChange={(e) => {
                setUserInfo({ ...userInfo, facbook_link: e.target.value });
              }}
            ></input>
          </div>
          <div className="social_media">
            <img className="social_media_img" src={Twiter}></img>
            <input
              placeholder="Twiter"
              className="inputsales"
              onChange={(e) => {
                setUserInfo({ ...userInfo, X_link: e.target.value });
              }}
            ></input>
          </div>
          <div className="social_media">
            <img className="social_media_img" src={Instgram}></img>
            <input
              placeholder="Instgram"
              className="inputsales"
              onChange={(e) => {
                setUserInfo({ ...userInfo, instagram_link: e.target.value });
              }}
            ></input>
          </div>
          <div className="social_media">
            <img className="social_media_img" src={Links}></img>
            <input
              placeholder="Links"
              className="inputsales"
              onChange={(e) => {
                setUserInfo({ ...userInfo, Info1_link: e.target.value });
              }}
            ></input>
          </div>
          <div className="social_media">
            <input type="file" onChange={uploadImage}></input>
            <img className="picture" src={file} />
          </div>
        </div>
        <div className="button">
          <button
            className="send_button"
            onClick={() => {
              console.log(userInfo);
              console.log(url);
              uploadImagecloudinary();
            }}
          >
            <p className="word_in_button_save sendtext">send</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sales;

/**
 * first_name,
        last_name,
        email_work,
        location,
        LinkedIn_link,
        LinkedIn_label,
        facbook_link,
        facbook_label,
        snapchat_link,
        snapchat_lable,
        X_link,
        X_lable,
        instagram_link,
        instagram_lable,
        phone_no,
        Info1_link,
        Info1_lable,
        Info2_link,
        Info2_lable,
        user_image
 */
