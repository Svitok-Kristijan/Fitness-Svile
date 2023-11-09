import React from "react";
import "./arm.scss";
import armPng from "../../images/arm.png";
import {Link} from "react-router-dom";
const Arm = () => {
  return (
    <div className="whole-div">
      <div className="arm-container">
        <div className="arm">
          <img className="png-left" src={armPng} alt="arm" />
          <h3>Arm Training</h3>
          <img className="png-right" src={armPng} alt="arm" />
          <p className="arm-description">
            Arm training is divided into multiple arm workouts because the arm
            consists of several muscles. We will mention here two of the largest
            arm muscles, which are the biceps and triceps, and demonstrate some
            basic exercises. If you want more, you can always purchase our
            premium training plan.
          </p>
          <Link to="/trainingPlan" className="training-plan">
            Buy training plan
          </Link>
        </div>
      </div>
      <div className="exercises-container">
        <h2>Exercises</h2>
        <div className="exercise-biceps">
          <h4>Biceps</h4>
          <div className="exercise-one">
            <p>Exercise 1: Hammer Curl </p>
            <img
              src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3MzgyOTg1OTk5NTA1/1-hammer-curl.webp"
              alt="exercise-1"
            />
            <span>
              1. Curl with your hands inside shoulder width, in the middle of
              the bar.{" "}
            </span>
          </div>

          <div className="exercise-two">
            <p>Exercise 2: Behind-the-Back Cable Curl </p>
            <img
              src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3MzgyNzE5NjYxMjAx/12-behind-the-back-cable-curl.webp"
              alt="exercise-2"
            />
            <span>
              1. Attach a D-handle to the low pulley of a cable machine, grasp
              the handle in your left hand, and step forward (away from the
              machine) until there's tension on the cable and your arm is drawn
              slightly behind your body.<br></br>2. Stagger your feet so your
              right leg is in front.<br></br>
              3. Curl the handle but do not allow your elbow to point forward.
            </span>
          </div>
          <div className="exercise-three">
            <p>Exercise 3: Side Curl With Band </p>
            <img
              src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3MzgyOTg1Mjc4NjA5/49-side-curl-with-band.webp"
              alt="exercise-2"
            />
            <span>
              1. Attach two bands to sturdy objects at shoulder height that face
              each other.<br></br>2. Stand between them and hold an end in each
              hand.<br></br>3. Raise your arms out 90 degrees with elbows
              extended you should still feel some tension on the band in this
              starting position.<br></br>4. Curl the bands toward your ears and
              hold the contracted position for two seconds.
            </span>
          </div>
        </div>
        <div className="triceps-container">
          <h4>Triceps</h4>
          <div className="triceps-exercise-one">
            <p>Exercise 1: Neutral-grip Triceps Extension </p>
            <img
              src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3MzgzMjU1NjgwMTQ1/7-neutral-grip-triceps-extension.webp"
              alt="triceps"
            />
            <span>
              1. Lie back on a bench or the floor holding a dumbbell in each
              hand with palms facing each other.<br></br>2. Press the weights
              over your chest, then bend your elbows to lower the weights toward
              your face until you feel a stretch in your triceps. <br></br>
              3. Extend your elbows. Keep your elbows facing the ceiling the
              entire set.
            </span>
          </div>
          <div className="triceps-exercise-two">
            <p>Exercise 2: Diamond Pushup </p>
            <img
              src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3MzgzMjYwODU3NDg5/6-diamond-pushup.webp"
              alt="triceps"
            />
            <span>
              1. Get into a pushup position but place your hands close together
              so your thumbs and index fingers touch.<br></br>2. Keeping your
              body in a straight line with abs braced, lower your torso until
              your chest is just above the floor, then press back up.
            </span>
          </div>
          <div className="triceps-exercise-three">
            <p>Exercise 3: Pullover/Triceps Extension </p>
            <img
              src="https://www.mensjournal.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTk2MTM3MzgyNzE3NTY0MDQ5/17-pullovertriceps-extension.webp"
              alt="triceps"
            />
            <span>
              1. Hold the bar with an overhand, shoulder-width grip while lying
              on a flat bench.<br></br>2. Press the bar toward the ceiling and
              then reach it back over your head while bending your elbows until
              you feel a stretch in your lats.<br></br>3. Then pull the bar back
              over your chest and extend your elbows. That's one rep.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arm;
