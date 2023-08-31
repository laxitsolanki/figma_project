import React from "react";
import "../pages/Home.css";

const Home = () => {
  return (
    <>
      <div className="sidebar">
        <h2 className="filter">Filter:</h2>
        <hr className="hr" />
        <div className="Language">Language</div>
        <ul className="nav">
          <br />
          <form action="" className="form">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              defaultValue="Bike"
            />
            <label htmlFor="vehicle1">Gujrati</label>
            <br />
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              defaultValue="Car"
            />
            <label htmlFor="vehicle2">Hindi</label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              defaultValue="Boat"
            />
            <label htmlFor="vehicle3"> marathi</label>
            <br />
            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              defaultValue="Boat"
            />
            <label htmlFor="vehicle3"> bengoli</label>
            <br />
            <hr className="hr" />
            <h2 className="filter">star</h2>
            <select id="cars" name="cars">
              <option value="volvo">Volvo XC90</option>
              <option value="saab">Saab 95</option>
              <option value="mercedes">Mercedes SLK</option>
              <option value="audi">Audi TT</option>
            </select>

            <hr className="hr" />
            <h2 className="filter">Director</h2>
            <select id="cars" name="cars">
              <option value="volvo">Volvo XC90</option>
              <option value="saab">Saab 95</option>
              <option value="mercedes">Mercedes SLK</option>
              <option value="audi">Audi TT</option>
            </select>

            <hr className="hr" />
            <h2 className="filter">Producer</h2>
            <select id="cars" name="cars">
              <option value="volvo">Volvo XC90</option>
              <option value="saab">Saab 95</option>
              <option value="mercedes">Mercedes SLK</option>
              <option value="audi">Audi TT</option>
            </select>

          </form>
        </ul>
      </div>
      <div className="main">
        <h2>main</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          voluptatem suscipit consequuntur sit, reiciendis temporibus voluptate
          dolorum ipsum accusantium facilis, eum delectus? Adipisci, harum
          perferendis nihil vero incidunt iusto mollitia?
        </p>
      </div>
    </>
  );
};

export default Home;
