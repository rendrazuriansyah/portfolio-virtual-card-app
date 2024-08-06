import "./App.css";

function App() {
	return (
		<>
			<div className="card">
				<div className="top">
					<Header />
					<Identity />
				</div>
				<div className="bottom">
					<Biodata />
					<Highlight />
				</div>
			</div>
		</>
	);
}

function SocialButton({ icon }) {
	return (
		<button>
			<i className={`fab ${icon}`}></i>
		</button>
	);
}

function Header() {
	return (
		<>
			<div className="social-buttons">
				<SocialButton icon="fa-facebook-f" />
				<SocialButton icon="fa-instagram" />
				<SocialButton icon="fa-twitter" />
			</div>
			<div className="social-buttons right">
				<SocialButton icon="fa-linkedin" />
				<SocialButton icon="fa-github" />
			</div>
		</>
	);
}

function Identity() {
	return (
		<>
			<button className="like">
				<i className="far fa-heart"></i>
			</button>
			<div className="text">
				<div className="name-wrapper">
					<i></i>
				</div>
				<div className="name">Rendra Zuriansyah</div>
				<div className="title">Fullstack Developer</div>
			</div>
		</>
	);
}

function Biodata() {
	return (
		<>
			<div className="desc">
				<p>
					Nama saya <b>Rendra Zuriansyah</b>. Saya seorang developer
					yang berpengalaman dalam pengembangan dan mengintegrasikan
					solusi teknologi yang dapat meningkatkan produktivitas dan
					kualitas dalam pekerjaan.
				</p>
				<p>
					Jika Anda memiliki pertanyaan atau memiliki proyek yang
					ingin saya bantu, silakan hubungi saya.
				</p>
			</div>
		</>
	);
}

function Badge({ text }) {
	return (
		<button>
			<div className="height">
				<i className={`fas fa-${text}`}></i>
			</div>
		</button>
	);
}

function Highlight() {
	return (
		<div className="buttons">
			<Badge text="envelope" />
			<Badge text="phone" />
			<Badge text="share-alt" />
		</div>
	);
}

export default App;
