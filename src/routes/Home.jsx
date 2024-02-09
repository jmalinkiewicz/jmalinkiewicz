import GithubMark from "../assets/GithubMark";
import Envelope from "../assets/Envelope";

function Home() {
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="z-10 transition-all flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        <a href="https://github.com/jmalinkiewicz" target="_blank">
          {" "}
          <GithubMark />
        </a>
        <a href="mailto:me@jmalinkiewicz.pl" target="_blank">
          <Envelope />
        </a>
      </div>
    </div>
  );
}

export default Home;
