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
import {getSummonerInfo, getChampionImg, getMasteryById} from './api/summoner'
import {getChampionData} from './api/champion'
import moment from "moment";
import "moment/locale/ko";

class irisProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      accountId: '',
      profileIconId: '', //num
      summonerLevel: '',
      revisionDate: '',
      puuid: '',
      champImg: '',
      mastery: '', //mastery array,
      best3champ: [],
      best3champName: [],
      champData: {}
    };
  }

  componentDidMount() {
    getSummonerInfo('%C5%82Iris')
    .then(res=> {
      const { id, name, accountId, profileIconId, summonerLevel, revisionDate, puuid } = res.data
      this.setState({ id, name, accountId, profileIconId, summonerLevel, revisionDate, puuid })
      getMasteryById (id)
      .then(res=> {
        this.setState({mastery: res.data}, this.getBest3Champ)
      })
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
    })
    .catch(err=>console.log(err))

    getChampionData()
    .then(res=> this.setState({champData: res.data.data}))
    .catch(err=>console.log(err))
  }

// championId: 267
// championLevel: 7
// championPoints: 522368
// championPointsSinceLastLevel: 500768
// championPointsUntilNextLevel: 0
// chestGranted: true
// lastPlayTime: 1570591765000
// summonerId: "ds_QfwdhDvwLBlSfi-XWzk3jozxw_3ylwDNVDpSPumDr0NQ"
// tokensEarned: 0
  getBest3Champ(){
    let array = this.state.mastery 
    let best3champ = []
    for (let i=0; i<3; i++){
      best3champ.push(array[i])
    }
    this.setState({ best3champ })
    if(best3champ){
      let champ =[]
      best3champ.map( (obj)=>{
        let result = this.findChampWithId(obj.championId)
        champ.push(result)
        this.setState({ best3champName : champ })
      })}
  }

  findChampWithId(champId){
    let champName
    let champData = this.state.champData //nested obj
    for( let value in champData){
      let id = parseInt(champData[value].key)
      if(id === champId){
        champName = value
      }
    } 
    return champName
    // let champObj = champData.find( obj=>{
    //   return obj.key === champId
    // })
    
  }
  render() {
    console.log('this.state', this.state)
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
                  <div className="card-description">
                   TOP 3 champion:
                  </div>
                  {this.state.best3champName.map( champ => {
                 return (
                  <span className="card-description">
                   {champ+' '}
                  </span>
                 )
                })}
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
