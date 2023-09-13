import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tokyo from "../../Assets/Tokyo.jpg";
import newYork from "../../Assets/Newyork.jpeg";
import mecca from "../../Assets/Mecca.jpeg";

const Cities = () => {
  return (
    <section>
      <Container>
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Tokyo</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={tokyo} alt="Azad" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
                Tokyo, Japan’s busy capital, mixes the ultramodern and the
                traditional, from neon-lit skyscrapers to historic temples. The
                opulent Meiji Shinto Shrine is known for its towering gate and
                surrounding woods. The Imperial Palace sits amid large public
                gardens. The city's many museums offer exhibits ranging from
                classical art (in the Tokyo National Museum) to a reconstructed
                kabuki theater (in the Edo-Tokyo Museum).
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TNomzoYXWMc?si=tUcS1l4OKohtu6m2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* 2nd city */}
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">New York</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={newYork} alt="Newyork" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              New York City comprises 5 boroughs sitting where the Hudson River 
              meets the Atlantic Ocean. At its core is Manhattan, a densely 
              populated borough that’s among the world’s major commercial, 
              financial and cultural centers. Its iconic sites include 
              skyscrapers such as the Empire State Building and sprawling 
              Central Park. Broadway theater is staged in neon-lit Times Square.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ThfY5-aY2PM" 
            title="&quot; NEW YORK CINEMATIC TRAVEL VIDEO || Sony Alpha a6500 &quot;" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
        {/* 3rd city */}
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Mecca</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={mecca} alt="Mecca" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              Mecca, in a desert valley in western Saudi Arabia, is Islam’s holiest city, 
              as it’s the birthplace of the Prophet Muhammad and the faith itself. 
              Only Muslims are allowed in the city, with millions arriving for the 
              annual Hajj (pilgrimage). Dating from the 7th century, the central 
              Masjid al-Haram (Sacred Mosque) surrounds the Kaaba, the cloth-covered 
              cubic structure that’s Islam’s most sacred shrine.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/o84G0yPr6oE" 
            title="‏Makkah Clock Tower-The Opening Night" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cities;
