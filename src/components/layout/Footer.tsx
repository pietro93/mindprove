
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full py-6 border-t bg-white mt-auto">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-block">
              <span className="text-lg font-bold text-primary">MindProve</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Free mental health assessments and resources.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/tests" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Tests
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="mailto:contact@mindprove.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                  contact@mindprove.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MindProve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
