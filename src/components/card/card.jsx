import "./card.css";

const Card = props => {
  return (
    <>
      <div className="card-cont">
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
      </div>
    </>
  );
};

export default Card;
