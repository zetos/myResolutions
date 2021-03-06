import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

	setVar() {
		Session.set('Meteor.loginButtons.dropdownVisible', true);
	}

	render() {
		return (
			<ReactCSSTransitionGroup
					component="div"
					transitionName="route"
					transitionEnterTimeout={600}
					transitionAppearTimeout={600}
					transitionLeaveTimeout={400}
					transitionAppear={true}>
					<h1>About Us</h1>
					<p>The Caterpillar was the first to speak.
					'What size do you want to be?' it asked.
					'Oh, I'm not particular as to size,' Alice hastily replied; 'only one doesn't like changing so often, you know.'
					'I DON'T know,' said the Caterpillar.
					Alice said nothing: she had never been so much contradicted in her life before, and she felt that she was losing her temper.
					'Are you content now?' said the Caterpillar.
					'Well, I should like to be a LITTLE larger, sir, if you wouldn't mind,' said Alice: 'three inches is such a wretched height to be.'
					'It is a very good height indeed!' said the Caterpillar angrily, rearing itself upright as it spoke (it was exactly three inches high).
					'But I'm not used to it!' pleaded poor Alice in a piteous tone. And she thought of herself, 'I wish the creatures wouldn't be so easily offended!'
					'You'll get used to it in time,'' said the Caterpillar; and it put the hookah into its mouth and began smoking again.</p>
			<button onClick={this.setVar} >Sign Up</button>
			</ReactCSSTransitionGroup>
		)
	}
}
