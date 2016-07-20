import React, {Component} from 'react';

export default class ResolutionsForm extends Component {

	addResolution(event){
		event.preventDefault();
		const text = this.refs.resolution.value.trim();

		Meteor.call('addResolution', text, ()=> {
			this.refs.resolution.value = "";
		});
	}

	render() {
		return (
				<form className="new-resoltuion" onSubmit={this.addResolution.bind(this)}>
					<input 
					type="text" 
					ref="resolution" 
					placeholder="Finish React Meteor Series" />
				</form>
		)
	}
}