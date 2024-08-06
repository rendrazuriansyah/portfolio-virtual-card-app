import "./App.css";

const socialMedia = [
	{
		icon: "fa-facebook-f",
		href: "https://www.facebook.com/profile.php?id=100078075274227",
	},
	{
		icon: "fa-instagram",
		href: "https://instagram.com/twingqywingqy",
	},
	{
		icon: "fa-twitter",
		href: "https://x.com/twingqywingqy",
	},
	{
		icon: "fa-linkedin",
		href: "https://www.linkedin.com/in/abdullahrendrazuriansyah/",
	},
	{
		icon: "fa-github",
		href: "https://github.com/rendrazuriansyah",
	},
];

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

function SocialButton({ icon, link }) {
	return (
		<button onClick={() => window.open(link, "_blank")}>
			<i className={`fab ${icon}`}></i>
		</button>
	);
}

function Header() {
	const middleIndex = Math.floor(socialMedia.length / 1.5);
	const socialLeft = socialMedia.slice(0, middleIndex);
	const socialRight = socialMedia.slice(middleIndex);

	return (
		<>
			<div className="social-buttons">
				{socialLeft.map((data) => (
					<SocialButton
						icon={data.icon}
						link={data.href}
					/>
				))}
			</div>
			<div className="social-buttons right">
				{socialRight.map((data) => (
					<SocialButton
						icon={data.icon}
						link={data.href}
					/>
				))}
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
