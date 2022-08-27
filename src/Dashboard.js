import React, { Component } from 'react';
import data from './data/index2';
import { Layout } from 'antd';
import View1 from './views/View1';
import View2 from './views/View2';
import View3 from './views/View3';
import View4 from './views/View4';
import View5 from './views/View5';
import View6 from './views/View6';
import './dashboard.css';

const { Sider, Content, Footer } = Layout;

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: data[0],
            greaterThenAge: 0,
            includedGender: "Active",
        }
        console.log(data)
    }

    changeSelectUser = value => {
        this.setState({
            selectedUser: value
        })
    }

    changeGreaterThenAge = value => {
        this.setState({
            greaterThenAge: value
        })
    }

    changeIncludedGender = value => {
        this.setState({
            includedGender: value
        })
    }

    render() {
        const {selectedUser, greaterThenAge, includedGender} = this.state;
        const dataBar = data
        dataBar.forEach(function (d) {
            console.log(includedGender)
            if (includedGender === "Active") {
              d.active = d.data[d.data.length - 1].active;
              console.log(d.data[d.data.length - 1].active);
            } else if (includedGender === "Deaths") {
              d.active = d.data[d.data.length - 1].deaths;
              console.log(d.data[d.data.length - 1].deaths);
            }
          });
          console.log(dataBar)
        return (
          <div>
            <Layout style={{ height: 920 }}>
              <Sider width={300} style={{ backgroundColor: "#eee" }}>
                <Content style={{ height: 200 }}>
                  <View1 user={selectedUser} />
                </Content>
                <Sider width={300} style={{ backgroundColor: "#eee" }}>
                  <View6 data={data} changeSelectUser={this.changeSelectUser} />
                </Sider>
              </Sider>
              <Layout>
                <Content style={{ height: 300 }}>
                  <View4 user={selectedUser} />
                </Content>
                <Layout style={{ height: 600 }}>
                  <Content>
                    <View5 data={dataBar} filter={includedGender} />
                  </Content>
                  <Sider width={300} style={{ backgroundColor: "#eee" }}>
                    <Content style={{ height: 300 }}>
                      <View2 data={selectedUser} />
                    </Content>
                    <Content style={{ height: 400 }}>
                      <View3
                        changeGreaterThenAge={this.changeGreaterThenAge}
                        changeIncludedGender={this.changeIncludedGender}
                      />
                    </Content>
                  </Sider>
                </Layout>
              </Layout>
            </Layout>
          </div>
        );
    }
}
