import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import "../../Styles/AboutUs.css";
import '../../Styles/ComponentsStyles/Staff_card.css'
import what_we_do from "../../Assets/abt-us.svg";
import image1 from "../../Assets/1905098.png";
import Staffcard from "../../Components/StaffCard";
import college_logo from "../../Assets/cit_logo.png";
import department_logo from "../../Assets/department_logo.png";
function AboutUs() {
  return (
    <div className="about-us">
      <div className="lottie-player">
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets5.lottiefiles.com/packages/lf20_nvsacnov.json"
        ></lottie-player>
      </div>
      <div className="quote">
      <i class="fas fa-quote-left"></i>      Don’t just learn, experience!! <i class="fas fa-quote-right"></i>
      </div>

      <div className="descriptionx">


        <b style={{color:"var(--fg-green)"}}>CRYPTERA</b> is a National-level technical intercollegiate symposium conducted by Computer Science and Engineering department of Coimbatore Institute of Technology. CRYPTERA is a series of events both technical and non-technical along with webinars and workshops for students to participate.
      </div>
      
    <div className="contentx">
      <div className="oney">
          <div className="titley">About CIT</div>
          <div className="descriptiony">
          The V. Rangasamy Naidu Educational Trust devoted to the cause of promoting technical and scientific literacy, established Coimbatore Institute of Technology (CIT) in Coimbatore, Tamil Nadu, South India in 1956. CIT is one of the most reputed and prestigious educational institutions in India. The Institute backed by World Class research and development over the years attained autonomous status in 1987.
            </div>
      </div>
      <div className="twoy">
        <img src={college_logo} alt="logo" />
      </div>
    </div>
    <div className="contentx">
      <div className="oney">
          <div className="titley">About the Department</div>
          <div className="descriptiony">
          The department imparts world class training and research. The department provides state of the art computing facilities to the students. Graduates from the department are most wanted by both academia and corporates like Microsoft, Yahoo, IBM, Oracle, EMC2. All over the world, alumni of the department occupy top positions in both academia and industry especially one of the alumni occupies as Ambassador of India in Israel. Important research and technical patents are registered by our alumnus. The department has generated funds from various government organizations like AICTE, MHRD, and DST for promoting research activities and modernization.
            </div>
      </div>
      <div className="twoy">
        <img src={department_logo} alt="logo" />
      </div>
    </div>
    <div className="titley" style={{textAlign:"center",marginTop:"30px"}}>Our Sincere thanks to</div>
      <div className="container5">
        <Staffcard image={image1} Name={"Faculty1"} position={"Professor"} />
        <Staffcard image={image1} Name={"Faculty1"} position={"Professor"} />
        <Staffcard image={image1} Name={"Faculty1"} position={"Professor"} />
        <Staffcard image={image1} Name={"Faculty1"} position={"Professor"} />
      </div>
    </div>
  );
}

export default AboutUs;
