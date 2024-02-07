import envelope from "../assets/email-envelope-black.svg";
import github from "../assets/github-mark.svg";

function Home() {
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="dark:invert transition-all flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10">
        <a href="https://github.com/jmalinkiewicz" target="_blank">
          {" "}
          <img
            src={github}
            alt="github"
            className="w-48 h-48 hover:drop-shadow-github-4xl transition-all duration-300"
          />
        </a>
        <a href="mailto:me@jmalinkiewicz.pl" target="_blank">
          <img
            src={envelope}
            alt="e-mail"
            className="w-48 h-48 hover:drop-shadow-envelope-4xl transition-all duration-300"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
