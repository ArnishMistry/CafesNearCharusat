import bgImage from "../../images/3.jpg";

const Home = () => {
  return (
    <section id="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div id="content">
        <h1 className="h-primary">Welcome to Online Meals</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dolor dolorem dignissimos laborum nostrum mollitia laboriosam maxime
          hic cum animi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam totam
          distinctio quod error obcaecati quas.
        </p>
        <a href="menu.html">
          <button className="btn">Order Now</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
