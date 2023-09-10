const element = (
  <div className="bg-container">
    <h1 className="heading">Congrulations</h1>
    <div className="card">
      <div className="inside-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
        <p className="para">Vishnu computer and Technology Education</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
