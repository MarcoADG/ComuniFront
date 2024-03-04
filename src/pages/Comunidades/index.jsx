import { React, useEffect, useState } from "react";
import ContainerHeader from "../../components/ContainerHeader";
import PageContainer from "../../components/PageContainer";
import { PaginaComunidadeStyle } from "./style";
import InforCard from "../../components/InfoCard";
import { Col, Row } from "react-bootstrap";

export default function Comunidades() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dummyData = [
      { id: 1, title: "Title 1", description: "Description 1" },
      { id: 2, title: "Title 2", description: "Description 2" },
      { id: 2, title: "Title 2", description: "Description 2" },
      { id: 2, title: "Title 2", description: "Description 2" },
      { id: 2, title: "Title 2", description: "Description 2" },
      { id: 2, title: "Title 2", description: "Description 2" },
    ];
    setData(dummyData);
  }, []);

  return (
    <ContainerHeader>
      <PageContainer>
        <PaginaComunidadeStyle>
          <div className="containerScroll">
            <Row className="row2">
              {data.map((item) => (
                <Col key={item.id} xs={6} className="colComu">
                  <InforCard
                    title={item.title}
                    description={item.description}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </PaginaComunidadeStyle>
      </PageContainer>
    </ContainerHeader>
  );
}
