import React from "react";
import "./legs.scss";
import legsPng from "../../images/legs.png";
import {Link} from "react-router-dom";

const Legs = () => {
  return (
    <div className="legs-container">
      <div className="legs">
        <div className="legs-title">
          <img className="png-right" src={legsPng} alt="arm" />
          <h2>Leg Training</h2>
          <img className="png-left" src={legsPng} alt="arm" />
        </div>
        <p className="legs-description">
          Leg training consists of several leg muscles, with the largest being
          the quadriceps. Legs are the largest muscle group in the body, and
          that's why it's essential not to neglect them in your training. For
          better and larger results, purchase our premium training program.
        </p>
        <Link to="/trainingPlan" className="training-plan">
          Buy training plan
        </Link>
      </div>
      <div className="exercise-container">
        <h3>Excercises</h3>

        <div className="exercise-one">
          <p>Exercise 1: Back Squat </p>
          <img
            src="https://media.tenor.com/pANVg22G1JAAAAAC/workouts-squats.gif"
            alt="exercise-1"
          />
          <span>
            1. Set a barbell in a power rack to shoulder height, loaded with an
            appropriate amount of weight.<br></br>2. Get under the barbell, set
            the bar across your upper traps, or set the bar across your shoulder
            blades if you’re performing low-bar back squats.
            <br></br>3. Brace your core and lift the weight out of the rack.
            Take small steps back one foot at a time to get yourself into
            position.<br></br>4. With your chest up, squat down until the
            bottoms of your thighs are parallel to the floor. Now, drive back up
            by pushing your feet through the floor.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 2: Leg Press </p>
          <img
            src="https://media.tenor.com/e0qeS17dv7QAAAAC/legpress45-leg-press.gif"
            alt="exercise-1"
          />
          <span>
            1. Sit in the leg press seat, and place your feet in the middle of
            the sled, about shoulder-width apart.
            <br></br>2. Press the sled out of the rack, lower the safety bars,
            and then slowly lower the sled towards your chest until your thighs
            break 90 degrees.<br></br>3. Press the sled back up but do not lock
            out your knees.
            <br></br>4. If your lower back or hips lift off the seat as you
            drive the weight back up, you’re going too far down.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 3: Reverse Lunge </p>
          <img
            src="https://i.pinimg.com/originals/82/67/5f/82675fc1cc50ec43d7b83483b3a6959c.gif"
            alt="exercise-1"
          />
          <span>
            1. Stand with your feet together, and keep your hands at your sides
            or on your hips.
            <br></br>2. Take a step back with one leg until it’s behind you and
            your knee is an inch or so above the floor.
            <br></br>3. Take a step back with one leg until it’s behind you and
            your knee is an inch or so above the floor.<br></br>4. Take a step
            back with one leg until it’s behind you and your knee is an inch or
            so above the floor.
          </span>
        </div>
        <div className="exercise-one">
          <p>Exercise 4: Barbell Hip Thrust </p>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/hipthrustshoulderselevateddynamic-1472221727.gif"
            alt="exercise-1"
          />
          <span>
            1. Load a barbell with rubber bumper plates (if possible), as you
            want the bar higher up off of the ground.
            <br></br>2. Now, roll the barbell towards you, so it’s sitting on
            your hips.
            <br></br>3. Place your upper back on a bench and bend your knees
            with your feet flat on the floor.<br></br>4. Squeeze your glutes and
            drive your hips up, holding onto the barbell with both hands to
            prevent it from falling until your body is in a straight line from
            knee to chin.<br></br>5. Hold this position for a beat and then
            lower the weight back down.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Legs;
