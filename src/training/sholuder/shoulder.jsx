import React, {useRef, useState} from "react";
import "./shoulder.scss";
import shoulderPng from "../../images/shoulder.png";
import {Link} from "react-router-dom";
import videoShoulder from "../../video/videoShoulder.mp4";
import playPng from "../../images/play.png";

const Shoulder = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video) {
      if (video.paused) {
        video.play().catch((error) => {
          // Handle any errors if necessary
          console.error("Error playing video:", error);
        });
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };
  return (
    <div className="shoulder-container">
      <div className="shoulder">
        <div className="shoulder-title">
          <img className="png-right" src={shoulderPng} alt="arm" />
          <h2>Shoulder Training</h2>
          <img className="png-left" src={shoulderPng} alt="arm" />
          <p className="shoulder-description">
            Shoulder training is divided into three different shoulder muscles:
            front shoulder, middle shoulder, and rear shoulder. Here, we will
            demonstrate one basic exercise for each shoulder muscle. For more
            exercises and better results, purchase our premium training program.
          </p>
          <Link to="/trainingPlan" className="training-plan">
            Buy training plan
          </Link>
        </div>
      </div>
      <div className="exercise-container">
        <h3>Excercises</h3>

        <div className="exercise-video">
          <video
            width="620"
            height="340"
            controls
            src={videoShoulder}
            ref={videoRef}
            onClick={handleVideoClick}
          />
          {isPlaying ? (
            <div className="pause-button" onClick={handleVideoClick}>
              &#9868;
            </div>
          ) : (
            <div className="play-button" onClick={handleVideoClick}>
              <img src={playPng} alt="play" />
            </div>
          )}
        </div>

        <div className="exercise-one">
          <p>Exercise 1: Overhead Press </p>
          <img
            src="https://www.nerdfitness.com/wp-content/uploads/2014/05/military-press.gif"
            alt="exercise-1"
          />
          <span>
            1. Set the bar up in a squat rack or cage, and grasp it just outside
            shoulder width.<br></br>2. Take the bar off the rack and hold it at
            shoulder level with your forearms vertical.<br></br>3. Squeeze the
            bar and brace your abs.<br></br>4. Press the bar overhead, pushing
            your head forward and shrugging your traps at the top of the
            movement.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 2: Face Pull </p>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/12/bandfacepull-1480628546.gif"
            alt="exercise-2"
          />
          <span>
            1. Attach a rope handle to the top pulley of a cable station.
            <br></br>2. Grasp an end in each hand with palms facing each other.
            <br></br>3. Step back to place tension on the cable.<br></br>4. Pull
            the handles to your forehead so your palms face your ears and your
            upper back is fully contracted.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 3: Standing Dumbbell Flye </p>
          <img
            src="https://img.livestrong.com/630x/ppds/a32e5b4f-ca57-46b1-89af-069054c91212.gif"
            alt="exercise-2"
          />
          <span>
            1. Hold a dumbbell in each hand by your sides.<br></br>2. Without
            shrugging, use your upper body to swing the weights up a few inches.
            <br></br> 3. Your arms and torso will form an upside down V shape.
            <br></br> 4.Think of it as a lateral raise with momentum but without
            full range of motion.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Shoulder;
