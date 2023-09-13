import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import azad from "../../Assets/abul-kalam.jpeg";
import jinnah from "../../Assets/jinnah.jpeg";
import iqbal from "../../Assets/allama.jpeg";

const FavoritePersonalities = () => {
  return (
    <section>
      <Container>
        <Row className="mt-6 align-items-center">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Abul Kalam Azad</i>
          </h1>
          <Col className="col-md-6 py-4">
            <div>
              <img src={azad} alt="Azad" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
                Abul Kalam Ghulam Muhiyuddin Ahmed bin Khairuddin Al-Hussaini
                Azad: Abul Kalam Azad, a prominent freedom fighter and scholar,
                made significant contributions to India's struggle for
                independence. His dedication to education and the promotion of a
                secular, inclusive India earned him respect as a statesman and
                intellectual.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1001" height="567" 
            src="https://www.youtube.com/embed/n72A1VUYkF4" 
            title="Inspirational Speech of Maulana Abul Kalam Azad" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
        {/* Iqbal */}
        <Row className="mt-6 align-items-center">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Allama Iqbal</i>
          </h1>
          <Col className="col-md-6 py-4">
            <div>
              <img src={iqbal} alt="Iqbal" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              Dr. Allama Iqbal, a renowned philosopher, poet, and visionary thinker, 
              played a pivotal role in inspiring the idea of an independent Muslim state. 
              His poetry continues to resonate with people, emphasizing self-discovery, 
              unity, and the realization of human potential.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1001" height="567" 
            src="https://www.youtube.com/embed/WMOGt2LlFro" 
            title="Original voice of Allama Iqbal | Humne tujhe jana hai faqat teri ata se" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
        {/* Quaid */}

        <Row className="mt-6 align-items-center">
          <h1>
            {" "}
            <i className="text-white pt-2 underline-text  ">Muhammad Ali Jinanh</i>
          </h1>
          <Col className="col-md-6 py-4">
            <div>
              <img src={jinnah} alt="Jinnah" className="img-fluid" />
            </div>
          </Col>
          <Col className="col-md-6">
            <div>
              <h4 className="text-white justify-text">
              Quaid-e-Azam Muhammad Ali Jinnah, often referred to as the "Father of the Nation," 
              was the driving force behind the creation of Pakistan. His visionary leadership 
              and unwavering determination paved the way for an independent and sovereign 
              nation for the people of South Asia.
              </h4>
            </div>
          </Col>
          {/* video */}
          <Col className="py-5">
            {" "}
            <div>
            <iframe width="1001" height="567" 
            src="https://www.youtube.com/embed/ljwTaMfORzs" 
            title="MUHAMMAD ALI JINNAH - PAKISTANI STATESMAN" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
            </div>
          </Col>
          {/* video end */}
        </Row>
      </Container>
    </section>
  );
};

export default FavoritePersonalities;
