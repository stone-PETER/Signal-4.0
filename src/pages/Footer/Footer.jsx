import {Typography} from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full bg-indigo-950 text-white p-8" id="footer">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
            {/* <iframe className="w-10" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.086625423994!2d76.8262!3d9.6736396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07b56200e0d90f%3A0x9924d34156f3bc17!2sCollege%20of%20Engineering%20Poonjar%20CEP!5e0!3m2!1sen!2sin!4v1735354180658!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        <img src="Signal.png" alt="logo-ct" className="w-[25%]" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#registration"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >Registration
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="sps.ieeekerala.org"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              SPS Kerala Chapter
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
        {/* <ul className="flex flex-wrap justify-start flex-col gap-y-2 gap-x-8">
          <li>
            Contacts<br />
            Adil :

          </li>
          <li>
            <Typography
              as="a"
              href="#registration"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >Registration
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="sps.ieeekerala.org"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              SPS Kerala Chapter
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul> */}
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Signal Web Team
      </Typography>
    </footer>
  );
}