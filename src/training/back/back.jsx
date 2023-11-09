import React from "react";
import "./back.scss";
import backPng from "../../images/back.png";
import {Link} from "react-router-dom";

const Back = () => {
  return (
    <div className="back-container">
      <div className="back">
        <div className="back-title">
          <img className="png-right" src={backPng} alt="arm" />
          <h2>Back Training</h2>
          <img className="png-left" src={backPng} alt="arm" />
        </div>
        <p className="back-description">
          Back training is divided into several different back muscles, and
          different types of training are used to target specific back muscles.
          For bigger and better results, purchase our premium training plan.
        </p>
        <Link to="/trainingPlan" className="training-plan">
          Buy training plan
        </Link>
      </div>
      <div className="exercise-container">
        <h3>Excercises</h3>

        <div className="exercise-one">
          <p>Exercise 1: Wide dumbbell bent-over row </p>
          <img
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/400x400_10_Deadlift_Alternatives_to_Suit_Your_Needs_Bent_Over_Row.gif?h=840"
            alt="exercise-1"
          />
          <span>
            1. Hold a dumbbell in each hand with your palms facing your thighs,
            and stand with feet shoulder-width apart. Bend your knees slightly,
            keeping core engaged and neck neutral, and hinge at the hips until
            your torso forms a 45-degree angle with the floor. Allow the
            dumbbells to hang down in front of you.<br></br>2. Begin to row with
            your elbows at a 90-degree angle, pulling them up toward the
            ceiling. Squeeze your shoulder blades together at the top.
            <br></br>3. Return to the starting position and repeat, completing
            1–3 sets of 8–12 reps.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 2: Barbell deadlift </p>
          <img
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/HL-01.03.BarbellDeadlift.gif?h=840"
            alt="exercise-1"
          />
          <span>
            1. Stand behind a barbell with feet shoulder-width apart.<br></br>2.
            Keeping chest lifted, begin to hinge at your hips and slowly bend
            knees, reaching down to pick up the barbell. Keep back straight and
            grasp the bar with both palms facing you.
            <br></br>3. Keeping feet flat on the floor, push back up to a
            standing position. Your back should remain straight throughout the
            movement, and your shoulders should be down and back.<br></br>4.
            Return to the starting position, pushing your hips back and bending
            your knees until you bring the barbell back toward the floor.
            <br></br>5. Complete 1–3 sets of 8–12 reps.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 3: Single-arm dumbbell row </p>
          <img
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/400x400_Back_Moves_for_a_Stronger_Back_Single_Arm_Dumbbell_Row_off_Bench.gif?h=840"
            alt="exercise-1"
          />
          <span>
            1. Position yourself on a bench so your left knee and shin are
            resting on it, as well as your left hand — this will be your
            support. Your right leg should be straight with your foot on the
            floor. Pick up a dumbbell with your right hand. Maintain a straight
            torso.<br></br>2. Pull the dumbbell up, aiming your elbow toward the
            sky while keeping it close to your body. Squeeze your upper back as
            you bend your elbow.
            <br></br>3. Slowly lower back down to the starting position.
            Complete 1–3 sets of 8–12 reps on each side.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 4: Pullup </p>
          <img
            src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/400x400_Bodyweight_Back_Exercises_Wide_Grip_Pullup.gif?h=840"
            alt="exercise-1"
          />
          <span>
            1. Grab a pullup bar with an overhand grip, placing your hands wider
            than shoulder-width apart.<br></br>2. Lift your feet off the floor —
            or place them in the assist band — and hang from your arms.
            <br></br>3. Pull your body up to the bar by bending your arms and
            pulling your shoulder blades toward the floor.<br></br>4. Once your
            chin crosses the bar, lower your body back down. <br></br>5.
            Complete 1–3 sets of 8–12 reps.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Back;
