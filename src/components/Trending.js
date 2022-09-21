import { Card, Container, Row, Col, Image } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"




const Trending =() =>{
    return(
        <div>
            <Container>
                <br />
                
                <h1 className="text-white">Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="trending">
                        <Card className="movieImage">
                        <Image src={duneImage} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Dune</Card.Title> 
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
                        <Image src={everything} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Everything</Card.Title> 
                                    <Card.Text className="text-left">
                                    Everything is gone be okay
                                    </Card.Text>
                                </div>
                            </div>
                           
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src={infinite} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Infinite</Card.Title> 
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
                        <Image src={joker} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">joker</Card.Title> 
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
                        <Image src={lightyear} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Lightyear</Card.Title> 
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
                        <Image src={morbius} alt="Dune Movies" className="image"/>
                            <div className="bg-dark ">
                                <div className="p-2 m-1 text-white">
                                    <Card.Title className="text-center">Morbius</Card.Title> 
                                    <Card.Text className="text-left">
                                    Movius Film done calo
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

export default Trending