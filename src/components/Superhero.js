import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spiderman from "../assets/images/superhero/spiderman.jpg"
import superman from "../assets/images/superhero/superman.jpg"




const SuperHero =() =>{
    return(
        <div>
            <Container>
                <br />
                
                <h1 className="text-white">Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                        <Image src={antman} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ANTMAN</Card.Title> 
                                    <Card.Text className="text-left">
                                    This is a wider cardelow as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                </div>
                            </div>
                           
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={avenger} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">AVENGER</Card.Title> 
                                    <Card.Text className="text-left">
                                    This is a wider cardelow as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                </div>
                            </div>
                           
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={batman} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">BATMAN</Card.Title> 
                                    <Card.Text className="text-left">
                                    This is a wider cardelow as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                </div>
                            </div>
                           
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={robinhood} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">ROBINHOOD</Card.Title> 
                                    <Card.Text className="text-left">
                                    This is a wider cardelow as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                </div>
                            </div>
                            
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={spiderman} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SPIDERMAN</Card.Title> 
                                    <Card.Text className="text-left">
                                    This is a wider cardelow as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                </div>
                            </div>
                           
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={superman} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">SUPERMAN</Card.Title> 
                                    <Card.Text className="text-left">
                                    This is a wider cardelow as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default SuperHero