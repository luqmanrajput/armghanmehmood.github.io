import React from "react";
import "../Portfolio/Portfolio.css";
const Portfolio = () => {
  return (
    <>
      <div className="style__div"></div>
      <div id="portfolio">
        <div className="container">
          <h1 className="portfolio__title">Portfolio</h1>
          <div className="portfolio__projects">
            <div className="project">
              <img src="images/ladybug.jpeg" alt="..." />
              <div className="layer">
                <p>
                  I was thrilled when I came across a ladybug resting on flowers
                  during a visit to our fields. It was a stroke of luck that it
                  happened to be the golden hour, and I quickly grabbed my
                  camera to capture the moment.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/farmers1.jpeg" alt="..." />
              <div className="layer">
                <p>
                  One day, I took my camera and went to the fields. I saw farmer
                  was working in his fields, and from a distance, I captured a
                  picture of them. It turned out to be a beautiful photograph,
                  especially with the golden hour lighting, enhancing its
                  beauty.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/3.jpg" alt="..." />
              <div className="layer">
                <p>
                  I was standing far away from Baba G, and luckily, I had my
                  camera with me. When I saw that he was with a horse, I
                  approached him to see if I could take a picture. Maybe I could
                  get a good shot and luckily When they started walking, I took
                  this shot.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/4.jpg" alt="..." />
              <div className="layer">
                <p>
                  This tree is right next to our village, amidst the fields
                  where crops grow. When I first saw this tree, I had already
                  made up my mind to capture a picture of it during sunset.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/5.jpg" alt="..." />
              <div className="layer">
                <p>
                  I captured this photograph during the evening when the sun was
                  setting, and the farmer was spraying the guava tree.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/6.jpeg" alt="..." />
              <div className="layer">
                <p>
                  This is my favorite photograph when I went from the village
                  with the children to the road outside. In the frame, I placed
                  the child to the side and aimed to capture the beautiful
                  golden light. I achieved a satisfying picture.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/7.jpeg" alt="..." />
              <div className="layer">
                <p>
                  I captured this photograph during the early morning when the
                  sun was about to rise. My friend and I were together in the
                  ground of the university when I noticed this tree.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/81.jpg" alt="..." />
              <div className="layer">
                <p>
                  One day, my friend saw a picture I had taken, and he requested
                  me to take pictures of his niece. I agreed and told him that I
                  would be happy to take some good pictures of the child.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
            <div className="project">
              <img src="images/9.jpg" alt="..." />
              <div className="layer">
                <p>
                  I took this enchanting photo from the ground of
                  Minar-e-Pakistan, where the complete view of Badshahi Mosque
                  can be seen. When I had never been to Lahore before, I used to
                  think about capturing a picture of the Badshahi Mosque where
                  the entire view is visible, and this became possible.
                </p>
                {/* <a href="#services"><i className="fa-solid fa-anchor"></i></a> */}
              </div>
            </div>
          </div>
          <a
            className="btn"
            href="https://www.instagram.com/armghansphotography/"
          >
            View More
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
