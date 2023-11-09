import React from "react";
import "./chest.scss";
import {Link} from "react-router-dom";
import chestPng from "../../images/chest.png";

const Chest = () => {
  return (
    <div className="chest-container">
      <div className="chest">
        <div className="chest-title">
          <img className="png-right" src={chestPng} alt="arm" />
          <h2>Chest Training</h2>
          <img className="png-left" src={chestPng} alt="arm" />
        </div>
        <p className="chest-description">
          Chest training consists of training three different chest muscles:
          upper chest, middle chest, and lower chest. In the following
          exercises, we will demonstrate some chest exercises. For better and
          bigger results, purchase our premium training plan.
        </p>
        <Link to="/trainingPlan" className="training-plan">
          Buy training plan
        </Link>
      </div>
      <div className="exercise-container">
        <h3>Excercises</h3>

        <div className="exercise-one">
          <p>Exercise 1: Dumbbell press-to-fly </p>
          <img
            src="https://hips.hearstapps.com/menshealth-uk/main/assets/neutralgripchestpress.gif?resize=980:*"
            alt="exercise-1"
          />
          <span>
            1. Lay flat on a bench, your knees bent, pushing your feet into the
            floor.<br></br>2. Press a pair of dumbbells into the air, locking
            out your elbows. Keep your arms locked with a slight bend in the
            elbows and slowly lower your bells outwards, opening up your arms to
            the sides of your body.
            <br></br>3. Pause when you feel a deep stretch before explosively
            pressing back upwards and repeating.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 2: Pushup </p>
          <img
            src="https://www.inspireusafoundation.org/wp-content/uploads/2021/08/close-grip-pushup.gif"
            alt="exercise-1"
          />
          <span>
            1. Get into a pushup position with hands under your shoulders.
            <br></br>2. Your entire body should be straight and your core
            braced.<br></br>3. Lower your body, keeping your elbows tucked near
            your torso and your head neutral, until your chest is almost
            touching the floor.
            <br></br>4. Fire your chest and triceps and raise your body back to
            the pushup position.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 3: Wide-Grip Dips </p>
          <img
            src="https://fitnessvolt.com/wp-content/uploads/2015/08/parallel-bar-dips.gif"
            alt="exercise-1"
          />
          <span>
            1. Keeping your arms straight, hold your body up on two parallel
            bars that are a couple inches wider than shoulder-width apart.
            <br></br>2. Descend until your chest is roughly in line with your
            hands, then push back up to the starting position, locking out your
            elbows.
            <br></br>3. Descend while keeping your torso slightly horizontal to
            the ground, which emphasizes the chest muscles over your triceps.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 4: Landmine Press </p>
          <img
            src="https://fitnessprogramer.com/wp-content/uploads/2022/12/Kneeling-Landmine-Press.gif"
            alt="exercise-1"
          />
          <span>
            1. Wedge the end of the barbell into a corner of the room (to avoid
            damage to the walls, you may have to wrap a towel around it).
            <br></br>2. Load the opposite end with weight and grasp it toward
            the end of the barbell sleeve with your right hand.
            <br></br>3. Stagger your stance so your left leg is in front. Press
            the bar straight overhead.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chest;
