import { useRouteError, Link } from "react-router-dom";
import NeuButton from "./components/NeuButton";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="absolute inset-0 flex justify-center items-center flex-col dark:text-white"
      id="error-page"
    >
      <h1 className="text-9xl font-bold">{error.status}</h1>
      <h2 className="text-2xl">{error.statusText} 😔</h2>
      <div className="mt-4">
        <Link to="/">
          <NeuButton text="Take me Home" />
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
