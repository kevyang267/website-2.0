import "./App.css";

function App() {
  return (
    <div class="h-screen w-screen flex flex-row justify-center bg-black">
      {/* This is the header for the project */}
      <header class="absolute w-screen h-20  ">
        {/* Flex container */}
        <div class="flex flex-row w-full h-full items-center justify-between px-2">
          {/* Text on left side of header */}
          <div class=" ">
            <p class="text-white text-4xl ">K.Y.</p>
          </div>
          {/* Connect button on the right side */}
          <div class=" ">
            <a href="./resume/Resume.pdf" target="_blank">
              {" "}
              <button class=" rounded-lg w-20 h-9 text-white font-semibold translation ease-in-out delay-150 bg-gray-600 hover:bg-gray-500 duration-300">
                Resume
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Body div */}
      <div class="flex flex-col  mt-20 mx-4 w-[472px]">
        {/* Container for information */}
        <div class="flex flex-row  items-center mb-5">
          {/* Image */}
          <div class="mr-2 h-28 w-28">
            <img
              src={require("./images/pixel.png")}
              class="rounded-full object-cover max-h-full max-w-full"
            ></img>
          </div>
          {/* For text  */}
          <div class=" flex flex-col  ">
            <h1 class="text-white text-2xl   ">Kevin Yang</h1>
            <p class="text-gray-400 text-base   ">
              Programmer and Photographer
            </p>
            <a class="text-gray-500 text-base hover:underline" target="_blank">
              photographs
            </a>
          </div>
        </div>

        {/* About section */}
        <div class=" flex flex-col mb-10 ">
          <p class="text-white text-sm">About</p>
          <p class="text-gray-400 text-sm break-words">
            Hey there! I'm Kevin. I love building projects and learning new
            technologies. I particularly like unique UX/UI designs. Currently, I
            am polishing up on creating cool webprojects. Click on the
            photographs link to see some of my photographs!
          </p>
        </div>

        {/* Work experience section */}

        <div class=" flex flex-col mb-3">
          <div class="mb-8">
            <p class="text-white text-sm">Work Experience</p>
          </div>

          {/* Single container for experience */}
          <div class="flex flex-row justify-center mb-7  ">
            {/* Date */}
            <div class="mr-5">
              <p class="text-gray-500 text-sm truncate   ">2024 - Curr</p>
            </div>
            {/* Experience item */}
            <div>
              <a
                class="text-white hover:underline"
                href="https://www.computer-talk.com/"
                target="_blank"
              >
                Application Automation Engineer - ComputerTalk{" "}
                <span class="inline-block">&#8599;</span>
              </a>
              <p class="text-gray-400 text-sm mt-1   ">
                Lead automation implementation for new features including login
                and session caching, Excel sheet manipulation, image
                compression, and sFTP testing.
              </p>
              <p class="text-gray-500 text-sm mt-1   ">
                TypeScript &#x2022; PlayWright &#x2022; Python &#x2022; SQL
              </p>
            </div>
          </div>

          {/* Single container for experience */}
          <div class="flex flex-row justify-center mb-8">
            {/* Date */}
            <div class="mr-5">
              <p class="text-gray-500 text-sm truncate"> 2022 - 2023</p>
            </div>
            {/* Experience item */}
            <div class=" ">
              <a
                class="text-white hover:underline"
                href="https://canada.jdpower.com/"
                target="_blank"
              >
                Automation Analyst Engineer - J.D. Power{" "}
                <span class="inline-block">&#8599;</span>
              </a>
              <p class="text-gray-400 text-sm mt-1   ">
                Pushed for automation - helped test over 5 webpages, 40 rest
                endpoints, and numerous SQL instances. Helped improve test
                coverage by over 90%.
              </p>
              <p class="text-gray-500 text-sm mt-1   ">
                Java &#x2022; Serenity &#x2022; Selenium &#x2022; SQL &#x2022;
                TypeScript
              </p>
            </div>
          </div>
        </div>

        {/* Project section*/}

        <div class=" flex flex-col mb-5">
          <div class="mb-8">
            <p class="text-white text-sm   ">Projects</p>
          </div>

          {/* Single container for project */}
          <div class="flex flex-row justify-center mb-9  ">
            {/* Date */}
            <div>
              <p class="text-gray-500 text-sm truncate mr-10   ">Curr</p>
            </div>
            {/* Project item */}
            <div>
              <p class="text-white   ">Image Website </p>
              <p class="text-gray-400 text-sm mt-1   ">
                Learning new frameworks to showcase photography portfolio in a
                modern and responsive website.
              </p>
              <p class="text-gray-500 text-sm mt-1   ">
                React &#x2022; TailWindCSS &#x2022; GSAP &#x2022; Three.js
              </p>
            </div>
          </div>

          {/* Single container for project */}
          <div class="flex flex-row justify-center mb-9  ">
            {/* Date */}
            <div>
              <p class="text-gray-500 text-sm truncate mr-10   ">2024</p>
            </div>
            {/* Project item */}
            <div>
              <img
                src={require("./images/western.png")}
                class="w-10 h-10 mb-1 "
              ></img>
              <p class="text-white   ">FOEChatBot </p>
              <p class="text-gray-400 text-sm mt-1   ">
                Worked with the UWO Faculty of Education to create a chatbot to
                improve their manual workflow. Stored data to track metrics such
                as geographic location and education level for data analysis.
              </p>
              <p class="text-gray-500 text-sm mt-1   ">
                JavaScript &#x2022; Express &#x2022; node.JS &#x2022; MySQL
              </p>
            </div>
          </div>

          {/* Single container for experience */}
          <div class="flex flex-row justify-center mb-9">
            {/* Date */}
            <div>
              <p class="text-gray-500 text-sm truncate mr-10">2024</p>
            </div>
            {/* Experience item */}
            <div>
              <img
                src={require("./images/grpc.png")}
                class="w-10 h-10 mb-1 "
              ></img>
              <a
                class="text-white    hover:underline"
                href="https://github.com/kyasuigit/cs4459_proj"
                target="_blank"
              >
                Chord Consistent Hashing Visualizer{" "}
                <span class="inline-block">&#8599;</span>
              </a>
              <p class="text-gray-400 text-sm mt-1   ">
                Created a Visualizer for the chord consistent hashing algorithm
                in Python. Used a distributed heartbeat protocol to ensure that
                primary and secondary servers were active.
              </p>
              <p class="text-gray-500 text-sm mt-1   ">
                Python &#x2022; Redis &#x2022; tkinter &#x2022; grpc
              </p>
            </div>
          </div>

          {/* Single container for experience */}
          <div class="flex flex-row justify-center mb-10">
            {/* Date */}
            <div>
              <p class="text-gray-500 text-sm mr-10">2020</p>
            </div>
            {/* Experience item */}
            <div>
              <img
                src={require("./images/qt.png")}
                class="w-10 h-10 mb-1 "
              ></img>
              <a
                class="text-white    hover:underline"
                href="https://github.com/kevyang267/ChordBoard"
                target="_blank"
              >
                ChordBoard <span class="inline-block">&#8599;</span>
              </a>
              <p class="text-gray-400 text-sm mt-1   ">
                Create a Windows application that allows users to experiment
                with various instruments. Based on music theory, records
                sequence of inputted notes and recommends a string of additional
                notes that may sound good.
              </p>
              <p class="text-gray-500 text-sm mt-1   ">
                C++ &#x2022; QT &#x2022; QT Creator &#x2022;
              </p>
            </div>
          </div>
        </div>
        {/* Section for links*/}
        <div class=" flex flex-col mb-10">
          <p class="text-white text-sm mb-3">Links</p>

          {/* Links */}
          <div class="flex flex-col mt-3">
            {/* Individual links */}
            <div class="flex flex-row items-center justify-between">
              <p class="text-gray-500">GitHub</p>
              <a
                class="text-white pl-5 hover:underline"
                href="https://github.com/kevyang267"
              >
                kevyang267 <span class="inline-block">&#8599;</span>
              </a>
            </div>

            {/* Individual links */}
            <div class="flex flex-row items-center justify-between">
              <p class="text-gray-500">LinkedIn</p>
              <a
                class="text-white pl-3 hover:underline"
                href="https://www.linkedin.com/in/kevin-yang-23102a222/"
              >
                kevin-yang-23102a222 <span class="inline-block">&#8599;</span>
              </a>
            </div>

            {/* Individual links */}
            <div class="flex flex-row items-center justify-between mb-12">
              <div>
                <p class="text-gray-500">Email</p>
              </div>
              <div>
                {" "}
                <a class="text-white hover:underline" href="kev4238@gmail.com">
                  kev4238@gmail.com <span class="inline-block">&#8599;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
