import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './CountySite.css';

function CountySite() {
  return (
    <div className='countySiteBody'>

      <h1> County Site </h1>
{/* 
      <a href="https://www.co.monterey.ca.us/home" rel="noreferrer">
        <b> County of Monterey Home </b>
      </a>

      <br />

      <a href="https://arcg.is/Hfefy" rel="noreferrer">
        <b> Emergency Shelters </b>
      </a>

      <br />

      <a href="https://www.governmentjobs.com/careers/montereycounty" rel="noreferrer">
        <b> Monterey County Career Opportunities </b>
      </a>

      <br />

      <a href="https://www.caljobs.ca.gov/vosnet/Default.aspx" rel="noreferrer">
        <b> Cal Jobs Emploment Opportunities </b>
      </a>

      <br />

      <a href="http://montereyco.maps.arcgis.com/apps/Shortlist/index.html?appid=d24344d65e7443889cf6cae29f95bd75" rel="noreferrer">
        <b> Special Events In Monterey County </b>
      </a> */}

      <Row xs={1} md={2} className="g-4">

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>County of Monterey Home</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Emergency Shelters</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Monterey County Career Opportunities</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Cal JObs Employment Oppotunities</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Header>

        </Card.Header>
        <Card.Body>
          <Card.Title>Special Events in Monterey County </Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button href="/" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default CountySite;