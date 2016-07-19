import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {

	resolutions() {
		return Resolutions.find().fetch();
	}

	addResolution(event){
		event.preventDefault();
		const text = this.refs.resolution.value.trim();

		Resolutions.insert({
			text: text,
			complete: false,
			createdAt: new Date()
		});

		this.refs.resolution.value = "";
	}

	render(){
		let res = this.resolutions();
		if(res.length < 1) {
			return ( <div>Loading..</div> )
		}
		
		return (
			<div>
				<h1>My Resolutions</h1>
				<form className="new-resoltuion" onSubmit={this.addResolution.bind(this)}>
					<input 
					type="text" 
					ref="resolution" 
					placeholder="Finish React Meteor Series" />
				</form>
				<div>
					{res[0].text}
				</div>
			</div>
		)
	}
}