import React, { Component } from 'react';
import { Link } from 'react-router';


export default class extends Component {
    render() {
        return (
            <div>
                <h1>Info</h1>
                <Link to={`/questions`}>Questions</Link>
            </div>
        )
    }
}