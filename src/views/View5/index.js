import React, { Component } from 'react';
import { useEffect } from 'react';
import BarChart from '../../charts/BarChart';
import './view5.css';

export default class View5 extends Component {
    render() {
        const {data, filter} = this.props;
        return (
            <div id='view5' className='pane'>
                <div className='header'>Comparision</div>
                <div style={{ overflowX: 'scroll',overflowY:'hidden' }}>
                    <BarChart data={data} width={400} filter={filter} height={550}/>
                </div>                
            </div>
        )
    }
}