import { useState } from "react";
import "./Menu.css"; // Assuming you have the same CSS file
import logo from "../../images/newlogo.jpg";// Assuming you have this image in your project

const Cafes = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menuId) => {
    setActiveMenu(activeMenu === menuId ? null : menuId);
  };

  const cafes = [
    {
      name: "HOT 'N' SPICY",
      location: "Monginis Complex, Shop No. 1",
      phone: "(+91) 90334 46006",
      menuId: "menu1",
      items: [
        "Regular Puff - Rs.15/-",
        "Butter Puff - Rs.25/-",
        "Cheese Puff - Rs.40/-",
        "Pizza Puff - Rs.45/-",
        "Paneer Cheese Puff - Rs.50/-",
        "Peri Peri Puff - Rs.60/-",
        "Subway Puff - Rs.70/-",
        "Cheesy Liquid Puff - Rs.70/-",
        "Hot 'N' Spicy Special Puff - Rs.80/-",
      ],
    },
    {
      name: "Pinky Stall Wala",
      location: "Beside Charusat Main Gate, Shop No. 23",
      phone: "(+91) 99809 23651",
      menuId: "menu2",
      items: [
        "Pav Maska - Rs.45/-",
        "Samosa Pav - Rs.30/-",
        "Butter Garlic Pav - Rs.50/-",
        "Chilly Paneer Pav - Rs.60/-",
        "Tandoori Garlic Potatoes - Rs.50/-",
        "Lasoognia Pav Maska - Rs.60/-",
        "Salty Sub Chilli Potato - Rs.60/-",
      ],
    },
    // Add the rest of the cafes in the same format...
  ];

  return (
    <>
      <header>
        <nav>
          <div id="logo">
            <img src={logo} alt="FoodHub Logo" />
          </div>
          <h1>FoodHub: Nearby Cafés</h1>
          <ul>
            <li>
              <a href="#cafes">Cafés</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="cafes" className="cafes">
          <h2>Available Cafés Near You</h2>

          {cafes.map((cafe, index) => (
            <div className="cafe" key={index}>
              <h3>{cafe.name}</h3>
              <p>Location: {cafe.location}</p>
              <p>Phone: {cafe.phone}</p>
              <button onClick={() => toggleMenu(cafe.menuId)}>View Menu</button>
              <div
                id={cafe.menuId}
                className={`menu ${activeMenu === cafe.menuId ? "active" : ""}`}
              >
                <ul>
                  {cafe.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>
            Have questions? Reach out to our customer service at{" "}
            <a href="mailto:info@foodhub.com">info@foodhub.com</a> or call (123)
            987-6543.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 FoodHub. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Cafes;
