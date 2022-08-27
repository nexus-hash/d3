import React, { Component } from 'react';
import { Slider, Checkbox, Divider } from 'antd';
import './view3.css';
import RadioGroup from 'antd/lib/radio/group';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Active", "Deaths"];

export default class View3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkedList: "Active",
            indeterminate: true,
            checkAll: false,
        };
    }

    onChangeCheckbox = checkedList => {
        console.log(checkedList.target.value)
        this.setState({
            checkedList: checkedList.target.value,
        });
        this.props.changeIncludedGender(checkedList.target.value);
    };

    onChangeSilder = value => {
        this.props.changeGreaterThenAge(value);
    }

    render() {
        return (
            <div id='view3' className='pane'>
                <div className='header'>Filter</div>
                <h3>Cases Type</h3>
                <div style={{ width: 275, margin: 5 }}>
                    <RadioGroup
                        options={plainOptions}
                        value={this.state.checkedList}
                        onChange={this.onChangeCheckbox}
                    />
                </div>
                <Divider />
            </div>
        )
    }
}