/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardText,
  Row,
  Col
} from "reactstrap";
import {api_key} from '../variables/key'
import axios from 'axios'
import moment from "moment";
import "moment/locale/ko";
import {getSummonerInfo, getChampionImg} from './api/summoner'

class irisProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      accoundId: '',
      profileIconId: '', //num
      summonerLevel: '',
      revisionDate: '',
      puuid: '',
      champImg: ''
    };
  }

  componentDidMount() {
    getSummonerInfo('%C5%82Iris')
    .then(res=> {
      const { name, accoundId, profileIconId, summonerLevel, revisionDate, puuid } = res.data
      this.setState({ name, accoundId, profileIconId, summonerLevel, revisionDate, puuid })
      console.log(this.state)
    })
    .catch(err=>console.log(err))

    getChampionImg('Nami')
    .then(res=> {
      const base64 = btoa(
        new Uint8Array(res.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          '',
        ),
      );
      this.setState({ champImg: "data:;base64," + base64 });
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        // src={require("assets/img/emilyz.jpg")}
                        src={this.state.champImg}
                      />
                      <h5 className="title">lv.{this.state.summonerLevel}</h5>
                    </a>
                    <p className="description">{this.state.name}</p>
                  </div>
                  <div className="card-description">
                   최근 접속 시간: {`${moment(this.state.revisionDate).fromNow()}`}
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default irisProfile;
