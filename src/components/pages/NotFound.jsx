import { Home} from "lucide-react";
import errorImg from "../../assets/images/404.png"; 
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className=" min-h-screen flex flex-col">
      
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="flex items-center gap-2 text-sm text-gray-500 py-6">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              color="currentColor"
              fill="none"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ><path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" />
              <path d="M15.0002 17C14.2007 17.6224 13.1504 18 12.0002 18C10.8499 18 9.79971 17.6224 9.00018 17" />
            </svg>
          <span>Home</span>
          <span className="mx-1">•</span>
          <span className="text-gray-400">404</span>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-16">

          <img
            src={errorImg}
            alt="404 illustration"
            className="w-[450px] max-w-full mb-10"
          />

          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            Oops!
          </h1>

          <p className="text-gray-500 text-sm max-w-md mb-8">
            Sorry, we couldn’t find that page. Try going back or
            checking out our homepage.
          </p>

          <Link
            to="/"
            className="bg-[#0e766e] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0b5e58] transition shadow-md"
          >
            Back To Home
          </Link>

        </div>

      </div>
    </section>
  );
}