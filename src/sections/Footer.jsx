import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono  mb-10">
        <div className="flex gap-10 p-4  justify-center text-white  ">
          <a
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white"
            href="https://twitter.com/yourprofile"
            target="_blank"
          >
            <SlSocialLinkedin />
          </a>
          <a
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all  bg-gray-800 text-white"
            href="https://github.com/yourprofile"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white"
            href="https://github.com/yourprofile"
            target="_blank"
          >
            <FaXTwitter />
          </a>
        </div>
        <p>© 2025 Ishaq. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
