import { React, useEffect, useState } from "react";
import ContainerHeader from "../../components/ContainerHeader";
import PageContainer from "../../components/PageContainer";
import { PaginaReuniaoStyle } from "./style";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Reuniao() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     const dummyData = [
  //       { id: 1, title: "Title 1", description: "Description 1" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //       { id: 2, title: "Title 2", description: "Description 2" },
  //     ];
  //     setData(dummyData);
  //   }, []);

  return (
    <ContainerHeader titulo={"Reuniao X"} Extra={true}>
      <PageContainer>
        <PaginaReuniaoStyle>
          <Col className="infoReuniao" xs={4}>
            <Card style={{ width: "20rem" }}>
              <Card.Img
                className="cardImg"
                src="https://www.maxpetfood.com.br/wp-content/uploads/2023/01/image-34.png"
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col className="conteudoReuniao" xs={8}>
            <div className="video">
              <iframe
                width="798"
                height="450"
                src="https://www.youtube.com/embed/n9-TUXIHDiI?si=dyIkqxCrcl8mzuJ0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Card style={{ width: "50rem" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </Col>
        </PaginaReuniaoStyle>
      </PageContainer>
    </ContainerHeader>
  );
}
