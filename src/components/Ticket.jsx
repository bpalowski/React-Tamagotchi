import React from 'react';
import PropTypes from 'prop-types';
import vader from '../img/One.jpg';

function Ticket(props){
  // var myStyledComponentStyles = {
  //   textAlign: 'center',
  //   fontSize: '50px',
  //   // backgroundColor: 'lightblue',
  //   fontFamily: 'cursive',
  //   // paddingTop: '10px',
  //   color: 'red'
  // };

  return (
    // <div style={myStyledComponentStyles}>
    <div>

      <style jsx global>{`
        div {
          background-color: #00FA9A;
          text-align: center;
          font-size: 50px;
          font-famiy: cursive;
          color: blue;
        }
        div p {
          font-size: 100px;
          color: #808000;
        }
        div h3.box {
          height: 100px;
        }
        div h3.box:hover {
          background-color: #FF00FF;
          font-size: 70px;
        }
      `}</style>

      <h3 className="box">{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <img src={vader}/>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
};

export default Ticket;
