import "./App.css";

function App() {
	return (
		<>
			<div className="card">
				<div className="top">
					<div className="social-buttons">
						<button>
							<i className="fab fa-facebook-f"></i>
						</button>
						<button>
							<i className="fab fa-instagram"></i>
						</button>
						<button>
							<i className="fab fa-twitter"></i>
						</button>
					</div>
					<div className="social-buttons right">
						<button>
							<i className="fab fa-linkedin"></i>
						</button>
						<button>
							<i className="fab fa-github"></i>
						</button>
					</div>
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
				</div>
				<div className="bottom">
					<div className="desc">
						<p>
							Nama saya <b>Rendra Zuriansyah</b>. Saya seorang
							developer yang berpengalaman dalam pengembangan dan
							mengintegrasikan solusi teknologi yang dapat
							meningkatkan produktivitas dan kualitas dalam
							pekerjaan.
						</p>
						<p>
							Jika Anda memiliki pertanyaan atau memiliki proyek
							yang ingin saya bantu, silakan hubungi saya.
						</p>
					</div>
					<div className="buttons">
						<button>
							<i className="fas fa-envelope"></i>
						</button>
						<button>
							<i className="fas fa-phone"></i>
						</button>
						<button>
							<i className="fas fa-share-alt"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
