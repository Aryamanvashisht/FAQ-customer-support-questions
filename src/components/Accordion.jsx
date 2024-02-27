import { useState } from "react";
import PropTypes from "prop-types";

export default function Accordion(props) {
	const [open, setOpen] = useState(props.question.open);

	const styles = {
		backgroundImage: open
			? `url("./src/assets/icon-minus.svg")`
			: `url("./src/assets/icon-plus.svg")`,
	};

	function toggle() {
		setOpen((prevOpen) => !prevOpen);
	}
	return (
		<>
			<div className="single-question" onClick={toggle}>
				<div className="question-heading">
					<h2>{props.question.question}</h2>
					<button type="button" style={styles}></button>
				</div>
				{open && <p className="answer">{props.question.answer}</p>}
			</div>
		</>
	);
}

Accordion.propTypes = {
	question: PropTypes.shape({
		question: PropTypes.string,
		answer: PropTypes.string,
		open: PropTypes.bool.isRequired,
	}).isRequired,
};
