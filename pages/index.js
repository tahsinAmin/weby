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
          <div></div>
        )}
        <button type='button' onClick={this.enableWebcam}>
          {this.state.webcamEnabled ? "Disable" : "Enable"} webcam
        </button>
      </div>
    );
  }
}

export default index;

// https://github.com/mozmorris/react-webcam/issues
// https://github.com/mozmorris/react-webcam/issues/333
// https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
// https://www.youtube.com/watch?v=0HJ1cMBkWJ4
// https://www.youtube.com/watch?v=BvkDFX8K5LE
// https://stackoverflow.com/questions/54443545/reactjs-how-to-off-and-on-webcam-in-reactjs
