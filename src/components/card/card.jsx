import "./card.css";
import { motion } from "framer-motion";

const Card = props => {
  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: "1",
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 100,
      },
    },
    exit: {
      y: "-100vh",
      opacity: "0",
    },
  };
  return (
    <>
      <motion.div
        className="card-cont"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="card-head">
          <h2>{props.name}</h2>
          <h2>{props.serve_size + " gm"}</h2>
        </div>
        <div className="card-body">
          <div className="card-left">
            <div className="parameter">
              <h4>Calories: &nbsp; </h4>
              <p>{props.calories + " cal"}</p>
            </div>

            <div className="parameter">
              <h4>Total Fat: &nbsp; </h4>
              <p>{props.fat + " g"}</p>
            </div>

            <div className="parameter">
              <h4>Saturated Fat: &nbsp; </h4>
              <p>{props.saturatedfat + " g"}</p>
            </div>

            <div className="parameter">
              <h4>Cholesterol: &nbsp; </h4>
              <p>{props.cholesterol + " mg"}</p>
            </div>
          </div>
          <div className="card-right">
            <div className="parameter">
              <h4>Protein: &nbsp; </h4>
              <p>{props.protein + " g"}</p>
            </div>

            <div className="parameter">
              <h4>Carbohydrate: &nbsp; </h4>
              <p>{props.carbs + " g"}</p>
            </div>

            <div className="parameter">
              <h4>Sugar: &nbsp; </h4>
              <p>{props.sugar + " g"}</p>
            </div>

            <div className="parameter">
              <h4>Fiber: &nbsp; </h4>
              <p>{props.fiber + " g"}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
