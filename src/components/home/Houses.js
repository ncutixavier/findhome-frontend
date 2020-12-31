import React, { Component } from "react";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import Title from "./Title";
import { fetchHousesAction } from "../../redux/actions/fetchHousesActions";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";

const imgStyle = {
  width: "100%",
  height: "200px",
};

class Houses extends Component {
  // componentDidMount() {
  //   this.props.fetchHousesAction();
  // }

  render() {
    return (
      <div style={{ margin: "5% auto" }} name="houses">
        <Title
          mainTitle="Available houses🏡"
          subTitle="Choose your favorite house"
        />

        {/* <div>
          <Skeleton />
        </div>
        {this.props.fetchHouses.loading == "none" ? (
          this.props.fetchHouses.items.houses.map((house) => {
            <CardDeck className="p-5 m-0">
              <Card>
                <CardImg
                  top
                  style={imgStyle}
                  src="https://live.staticflickr.com/3787/13721936275_7feabeb8fd_b.jpg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Posted on {house.createdAt}
                  </CardSubtitle>
                  <CardText>{house.description}</CardText>
                  <Button outline color="primary">
                    View Details
                  </Button>
                </CardBody>
              </Card>
              ;
            </CardDeck>;
          })
        ) : (
          <div>Loading...</div>
        )}
        <div>
          <Skeleton />
        </div> */}

        <CardDeck className="p-5 m-0">
          <Card>
            <CardImg
              top
              style={imgStyle}
              src="https://live.staticflickr.com/3787/13721936275_7feabeb8fd_b.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Posted on December 18, 2020
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button outline color="primary">
                View Details
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              style={imgStyle}
              src="https://live.staticflickr.com/2716/4270214259_277cdaa8b6_z.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Posted on December 18, 2020
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button outline color="primary">
                View Details
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              style={imgStyle}
              src="https://live.staticflickr.com/148/337587776_cfd17e23e4_b.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Posted on December 18, 2020
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button outline color="primary">
                View Details
              </Button>
            </CardBody>
          </Card>

          <Card>
            <CardImg
              top
              style={imgStyle}
              src="https://live.staticflickr.com/7011/6539765469_eb1b42c647_b.jpg"
              alt="Card image cap"
            />
            <CardBody>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Posted on December 18, 2020
              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button outline color="primary">
                View Details
              </Button>
            </CardBody>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchHouses: state.fetchHouses,
  };
};

export default connect(mapStateToProps, { fetchHousesAction })(Houses);
