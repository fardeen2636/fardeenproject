import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

function Video() {

  const vRef = useRef();

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {

    if (isPlaying) {

      vRef.current.play();

    } else {

      vRef.current.pause();

    }

    // const _ref = vRef;

    // vRef.current.play();

    // setTimeout(() => {

    //   _ref.current.load();

    //   vRef.current.play();

    // }, 5000);

  }, [isPlaying]);

  const handlePlayPause = () => {

    setIsPlaying(!isPlaying);

  };

  return (

    <center>

      <video

        style={{ border: "5px solid Black", marginTop: "10px" }}

        ref={vRef}

        muted

        src={

          "https://static.videezy.com/system/resources/previews/000/000/168/original/Record.mp4"

        }

        // loop

        playsInline

      />

      <div

        className="mb-2 "

        style={{ border: "2px", marginLeft: "20px", marginTop: "px" }}>

        <Button variant="dark" onClick={handlePlayPause}>

          {isPlaying ? "Stop" : "Play"}

        </Button>

      </div>

    </center>

  );
}

export default Video;

