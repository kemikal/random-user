import React from 'react';

class ShowUser extends React.Component {
    render() {
        return (
            <div>
                <h2>Show user {this.props.user}</h2>
            </div>
        );
    }
}

export default ShowUser;