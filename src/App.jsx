import { useState } from 'react';
import phrases from './data/phrases.json';
import { getItemRandom } from './lib/utils';
import './App.css';

import gonImage from './assets/images/Gon.png';
import gokuImage from './assets/images/Goku.jpg';
import narutoImage from './assets/images/Naruto.jpg';
import senkuImage from './assets/images/Senku.png';
import erzaImage from './assets/images/Erza.jpeg';
import luffyImage from './assets/images/Luffy.jpg';
import dekuImage from './assets/images/Deku.jpg';
import zabuzaImage from './assets/images/Zabuza.jpeg';
import leeImage from './assets/images/Lee.png';
import zoroImage from './assets/images/Zoro.jpg';
import edwardImage from './assets/images/Edward.jpg';
import hinataImage from './assets/images/Hinata.png';
import itachiImage from './assets/images/Itachi.jpg';
import saitamaImage from './assets/images/Saitama.png';
import kagamiImage from './assets/images/Kagami.png';

const imageMap = {
	'Gon Freecss - Hunter x Hunter': gonImage,
	'Goku - Dragon Ball Z': gokuImage,
	'Naruto Uzumaki - Naruto': narutoImage,
	'Erza Scarlet - Fairy Tail': erzaImage,
	'Senku Ishigami - Dr. STONE': senkuImage,
	'Monkey D. Luffy - One Piece': luffyImage,
	'Izuku Midoriya (Deku) - My Hero Academia': dekuImage,
	'Zabuza - Naruto': zabuzaImage,
	'Rock Lee - Naruto': leeImage,
	'Roronoa Zoro - One Piece': zoroImage,
	'Edward Elric - Fullmetal Alchemist: Brotherhood': edwardImage,
	'Hinata Hyuga - Naruto': hinataImage,
	'Itachi Uchiha - Naruto': itachiImage,
	'Saitama - One Punch Man': saitamaImage,
	'Kagami Taiga - Kuroko no Basket': kagamiImage,
};

function App() {
	const [phrase, setPhrase] = useState(getItemRandom(phrases));

	const handleClick = () => {
		setPhrase(getItemRandom(phrases));
	};

	const backgroundImage = imageMap[phrase.author];

	const backgroundStyle = {
		backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${backgroundImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		minHeight: '100vh',
		padding: '2rem',
		color: 'white',
	};

	return (
		<div className="container" style={backgroundStyle}>
			<div
				className="card"
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.6))',
					color: '#fff',
					borderRadius: '1rem',
					padding: '2rem',
					maxWidth: '600px',
					margin: '0 auto',
					textAlign: 'center',
					boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
				}}
			>
				<h1>"{phrase.phrase}"</h1>
				<p>- {phrase.author}</p>
				<button onClick={handleClick}>Generar nueva frase</button>
			</div>
		</div>
	);
}

export default App;
