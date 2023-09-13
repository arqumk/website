import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hunza from "../../Assets/hunza.jpeg";
import swat from "../../Assets/swat.jpeg";
import neelum from "../../Assets/neelum.jpeg";
import deosai from "../../Assets/Deosai.jpeg";
import badshahi from "../../Assets/Badshahi.jpeg";
import wazeer from "../../Assets/wazir.jpeg";

const TouristSpots = () => {
  return (
    <section>
      <Container>
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Hunza Valley</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={hunza} alt="Hunza" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              Located in Gilgit Baltistan, the Hunza Valley is one of Pakistan’s hidden gems. 
              This isolated valley is nestled between the Himalayas and the Karakoram mountain peaks. 
              This is one of the best places to visit in Pakistan because of its lush farmlands. 
              Here you can find markhors, ounces, ibexes, and red foxes. In this valley, 
              a glorious view awaits you, and the locals are warm and friendly.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/t7-UCywaw1U" 
            title="Trip to Hunza Valley 2019 - Gilgit Baltistan Drone 4k" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
        {/* 2nd */}
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Swat Valley</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={swat} alt="Swat" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              Despite its tragic history, Swat Valley’s present situation is very promising. 
              There’s something fairytale-like about this spectacular valley in Pakistan’s 
              Khyber Pakhtunkhwa province. Being one the most beautiful places to visit in 
              Pakistan among all other attractions, this valley has great weather and 
              friendly locals. Visitors can enjoy trekking, hiking, backpacking, or 
              simply enjoy in the natural environment.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/BbrjWo9z-Wg" 
            title="Swat 4k Drone Shots | Discover Pakistan TV" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
        {/* 3rd */}
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Neelum Valley</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={neelum} alt="Neelum" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              The Neelum Valley in northern Azad Kashmir is a bow-shaped 
              valley situated between peaks that soar 13,000 feet into the sky, 
              surrounded by verdant forests and flowing streams. 
              Neelum Valley is one of the most beautiful places to see in Pakistan. 
              This valley has pristine rivers, mirror-like lakes, and lush landscapes.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/9ZuZavbq5po" 
            title="Believer | Cinematic Video Nature | Melody | Neelam Valley Pakistan | Mobile Cinematography" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
        {/* 4th */}
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Deosai National Park</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={deosai} alt="Deosai" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              Deosai National Park, known as the Land of Giants, has a landscape of 
              snow-capped mountains rising from the highland. This area has an astounding 
              amount of biodiversity, including Himalayan wolves, Siberian ibex, 
              red foxes, and yellow-bellied marmots. For someone who loves biodiversity 
              and is seeking the best tourist places in Pakistan, Deosai National Park is an ideal place.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/w6XfRGudX6c" 
            title="DEOSAI NATIONAL PARK | DISCOVER PAKISTAN TV" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
        {/* 5th */}
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Badshahi Mosque</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={badshahi} alt="Badshahi" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              Originally built during the 1670s, Badshahi Mosque is a monument of 
              the Mughal Empire, which ruled over the Indian subcontinent for nearly 
              three centuries. Located in Lahore, this mosque is a great representation 
              of Mughal architecture, with four minarets and three domes forming the courtyard. 
              The mosque is a UNESCO World Heritage Site. The monument truly justifies being 
              one of the beautiful tourist places in Pakistan.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/3eOqtpWyoKw" 
            title="Badshahi Masjid &quot;The Imperial Mosque&quot; Lahore, Pakistan | The Epitome of Mughal Architecture [4K] UHD" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
        {/* 6th */}
        <Row className="mt-6 align-items-center ">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Masjid Wazeer Khan</i>
          </h1>
          <Col className="col-md-6 py-4 ">
            <div>
              <img src={wazeer} alt="Wazeer" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              The Wazir Khan Mosque is a 17th-century mosque located in the city of Lahore, 
              Punjab, Pakistan. The mosque was commissioned during the reign of the Mughal 
              Emperor Shah Jahan as a part of an ensemble of buildings that also included 
              the nearby Shahi Hammam baths.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1008" height="567" src="https://www.youtube.com/embed/k9gLC31tu5E" 
            title="Masjid Wazir Khan - Lahore Pakistan" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
      </Container>
    </section>
  );
};

export default TouristSpots;
