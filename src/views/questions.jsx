import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadQuestions } from '../actions/questions'
import { Link } from 'react-router'
import _ from 'lodash'
import Questions from '../components/questions.jsx'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class QuestionContainer extends Component {
    static fetchData({ store }) {
        return store.dispatch(loadQuestions())
    }

    componentDidMount() {
        this.props.loadQuestions()
    }
    render() {
        return (
            <div>
                <Helmet
                    title="Questions"
                />
                <h2>Question</h2>
                <Questions questions={this.props.questions} />
                <Link to="/">Back to Home</Link>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return { questions: state.questions }
}

export { QuestionContainer }
export default connect(mapStateToProps, { loadQuestions })(QuestionContainer);