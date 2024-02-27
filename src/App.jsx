import Accordion from "./components/Accordion";
import { data } from "./utils/data";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
	const questionArray = data.map((singleQuestion) => {
		return <Accordion key={singleQuestion.id} question={singleQuestion} />;
	});
	return (
		<>
			<div className="app flex flex-col">
				<h1>
					<img src="./src/assets/icon-star.svg" alt="" className="star-icon" />
					<span className="container">FAQs</span>
				</h1>
				<div className="single-question-container">{questionArray}</div>
			</div>
			<hr className="my-6 border-b border-dashed border-slate-500" />
			<Footer />
		</>
	);
};

export default App;
