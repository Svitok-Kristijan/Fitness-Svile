import React from "react";
import "./stomach.scss";
import stomackPng from "../../images/stomack.png";
import {Link} from "react-router-dom";

const Stomack = () => {
  return (
    <div className="stomack-container">
      <div className="stomack">
        <div className="stomack-title">
          <img className="png-right" src={stomackPng} alt="arm" />
          <h2>Stomach Training</h2>
          <img className="png-left" src={stomackPng} alt="arm" />
        </div>
        <p className="stomack-description">
          Training the stomach (abs) consists of several muscle groups: lower
          abdominal muscles, middle abdominal muscles, and upper abdominal
          muscles, as well as the muscles on the sides. Here are some basic
          stomach muscle exercises. For greater and better results, purchase our
          premium training plan.
        </p>
        <Link to="/trainingPlan" className="training-plan">
          Buy training plan
        </Link>
      </div>
      <div className="exercise-container">
        <h3>Excercises</h3>

        <div className="exercise-one">
          <p>Exercise 1: Upper Abs </p>
          <img
            src="https://i.pinimg.com/originals/40/f7/d0/40f7d01c697c5f43645e7bad2ae2631f.gif"
            alt="exercise-1"
          />
          <span>
            1. Starting on your back, extend your legs and keep your arms by
            your side<br></br>2. In one movement, lift your upper-body, arms and
            legs to balance on your tailbone, forming a 'V' shape
            <br></br>3. Lower your body down. That's one rep
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 2: Side Jackknife </p>
          <img src="https://i.imgur.com/HjyLvkX.gif" alt="exercise-1" />
          <span>
            1. Lay on your side with your left arm extended out on the floor and
            you right arm bent to your head with your elbow bent out.
            <br></br>2. Make sure your right leg is on top of your left.
            <br></br>3. Bring your right elbow to your left leg as you raise
            your body up, contracting your obliques and slowly lower down before
            swapping sides after reps.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 3: Hanging Leg Raise </p>
          <img
            src="https://www.inspireusafoundation.org/wp-content/uploads/2022/06/hanging-leg-raise-movement.gif"
            alt="exercise-1"
          />
          <span>
            1. Grab a pull-up bar making a V shape with your arms and lower
            yourself into a dead hang.<br></br>2.Put your feet together and
            raise your legs until they are perpendicular to your torso whilst
            keeping them straight.
            <br></br>3. Slowly lower back to the starting position.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 4: Cable Crunch</p>
          <img
            src="https://hips.hearstapps.com/menshealth-uk/main/assets/cable-crunch.gif?resize=980:*"
            alt="exercise-1"
          />
          <span>
            1. Attach a rope to a high pulley and kneel in front of it, with the
            handles held either side of your neck.<br></br>2. Without moving
            your hips, contract your abs to bring your elbows to your thighs.
            <br></br>3. Pause for a moment then slowly return to the starting
            position.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stomack;
