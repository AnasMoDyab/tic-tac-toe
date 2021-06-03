import React from 'react';

const boardStyle = {
	border: "1px solid teal ",
	borderRadius: "0px",
	width: "350px",
	height: "350px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
	boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
	marginTop:"40px"
};

const squareStyle= {
	background: "orange",
	boxShadow:"rgba(0, 0, 0, 0.45) 5px 5px 15px",
	fontSize: "60px",
	fontWeight: "800",
	cursor: "pointer",
	outline: "none",
	color:'teal'

};

const Board = ({ squares, onClick }) => (
	<div style={boardStyle}>
		{squares.map((square, i) => (
            	<button key={i} style={squareStyle} onClick={() => onClick(i)}>
                {square}
            </button>
		
		))}
	</div>
);

export default Board;