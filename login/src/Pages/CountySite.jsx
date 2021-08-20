import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './CountySite.css';

function CountySite() {
  return (
    <div className='countySiteBody'>

      <h1> County Site </h1>

      <Row xs={1} md={2} className="g-4">

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>County of Monterey Home</Card.Title>
              <Card.Text>
                Quick Access to Monterey County Recources And COIVID-19 Information
              </Card.Text>
              <Button href="https://www.co.monterey.ca.us/home" variant="primary">Click Here</Button>
            </Card.Body>
          </Card>
        </Col> 
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Emergency Shelters</Card.Title>
              <Card.Text>
                See Emergenacy Shelters Currently Open In Monterey County
              </Card.Text>
              <Button href="https://arcg.is/Hfefy" variant="primary">Click Here</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Monterey County Career Opportunities</Card.Title>
              <Card.Text>
                Find Local Job Opportunities In The Monterey County
              </Card.Text>
              <Button href="https://www.governmentjobs.com/careers/montereycounty" variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Cal Jobs Employment Oppotunities</Card.Title>
              <Card.Text>
                Find Exciting Career Opportunities Across California
              </Card.Text>
              <Button href="https://www.caljobs.ca.gov/vosnet/Default.aspx" variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
     
     <Card className="special">
        <Card.Body>
          <Card.Title>Special Events in Monterey County</Card.Title>
          <Card.Text>
            Follow This Link To See The Latest Events Happening In Montrey County
          </Card.Text>
          <Button href="http://montereyco.maps.arcgis.com/apps/Shortlist/index.html?appid=d24344d65e7443889cf6cae29f95bd75" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    </div>
  );
}

export default CountySite;