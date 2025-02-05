import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex flex-col items-center justify-between pt-16 pb-4 h-full">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
           <h1 className="text-4xl">Quick review concepts for Machine Learning</h1> 
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <ul>
              <li><Link to='/math'>to math</Link></li>
              <li><Link to='/math/ml-literature'>to ml literature</Link></li>
              <li><Link to='/biomed'>to biomed</Link></li>
              <li><Link to='/mit-edx'>to mit-edx</Link></li>
              <li><Link to='/ml-projects'>to ml-projects</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <footer className="flex flex-row justify-center items-center w-full py-4">
        {resources.map(({ href, text, icon }) => (
          <>
            <span key={href}>Created with{" "}</span>
                <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}
                  </a>
              </>
              ))}
      </footer>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
