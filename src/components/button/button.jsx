import "./button.css";
import { motion } from "framer-motion";

const BtnComp = props => {
  return (
    <div className="btn-cont">
      <motion.button
        onClick={props.onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        {props.btnTitle}
        <img src={props.img} alt="btn-txt" />
      </motion.button>
    </div>
  );
};

export default BtnComp;
