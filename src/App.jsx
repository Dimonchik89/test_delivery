import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Info from './components/info/Info';
import OurDrivers from './components/ourDrivers/OurDrivers';
import Service from './components/service/Service';
import Reviews from './components/reviews/Reviews';

import './App.css';

function App() {
	return (
		<div className="wrapper">
			<div className="content">
				<Header />
				<About />
				<Info />
				<OurDrivers />
				<Service />
				<Reviews />
			</div>
			<Footer />
		</div>
	);
}

export default App;
