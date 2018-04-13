import React from 'react';

export default class About extends React.Component{
  render(){
    const style = {
      height: 300,
      display: 'flex',
      alignItems: 'center'
    }

    return (
      <div className={'container'}>
        <h5 className={'teal-text'}>About Us</h5>
        <div className={'card-panel z-depth-5 teal'}>
          <div className={'container white-text'} style={style}>
            <p>
                Loren ipsum Loren ipsum Loren ipsum Loren ipsum
            </p>
          </div>
        </div>
      </div>
    );
  }
}