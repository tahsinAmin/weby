import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Webcam from "react-webcam";
import React from "react";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { webcamEnabled: false };
  }

  enableWebcam = () =>
    this.setState({ webcamEnabled: !this.state.webcamEnabled });

  setRef = (webcam) => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.enableWebcam;
    alert(imageSrc);
  };
  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user",
    };

    return (
      <div>
        {this.state.webcamEnabled ? (
          <div>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat='image/jpeg'
              width={350}
              videoConstraints={videoConstraints}
            />
            <button onClick={this.capture}>Capture and Submit photo</button>
          </div>
        ) : (
          <button type='button' onClick={this.enableWebcam}>
            Enable webcam
          </button>
        )}
      </div>
    );
  }
}

export default index;
