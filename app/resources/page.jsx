import React from 'react'

const sections = [
  {
    title: "Section 1: Getting Started with iOS Development and Swift 5",
    links: [
      { name: "Download the Complete Course Syllabus", url: "#" },
      { name: "App Brewery Cornell Notes Template", url: "#" },
      { name: "Hackintosh reference guide", url: "#" },
      { name: "Minimum Xcode Requirements", url: "#" },
      { name: "Sign up for the App Brewery Newsletter", url: "#" },
      { name: "The Story of the 7 Minute Workout App", url: "#" },
    ],
  },
  {
    title: "Section 2: Xcode Storyboards and Interface Builder",
    links: [
      { name: "Map of Xcode", url: "#" },
      { name: "Xcode Shortcuts", url: "#" },
      { name: "Colorhunt.co", url: "#" },
      { name: "Ultimate Guide to iPhone Resolutions", url: "#" },
      { name: "I Am Rich Image Assets", url: "#" },
    ],
  },
  {
    title: "Section 3: Xcode Storyboard and Interface Builder Challenge",
    links: [
      { name: "I Am Poor Starting Assets", url: "#" },
    ],
  },
  {
    title: "Section 4: Swift Programming Basics - Collections, Constants & Variables",
    links: [
      { name: "Dicee Starting Project", url: "#" },
      { name: "Dkhamsing's List of Open Source iOS Apps", url: "#" },
      { name: "21 Open Source iOS Apps", url: "#" },
      { name: "FlappySwift: Swift version of Flappy Bird", url: "#" },
      { name: "Challenge Solution: Setting the Alpha Value", url: "#" },
      { name: "Swift Cheat Sheet", url: "#" },
      { name: "Khan Academy - Pseudorandom Number Generators", url: "#" },
      { name: "Dicee Completed Project", url: "#" },
      { name: "Coding Exercise 1 - Variables", url: "#" },
      { name: "Coding Exercise 2 - Arrays", url: "#" },
      { name: "Coding Exercise 3 - Randomisation", url: "#" },
      { name: "Coding Exercise 4 - Constants", url: "#" },
      { name: "repl.it Variables Challenge Solution", url: "#" },
      { name: "repl.it Arrays Challenge Solution", url: "#" },
      { name: "repl.it Randomisation Challenge Solution", url: "#" },
      { name: "repl.it Contants Challenge Solution", url: "#" },
    ],
  },
  {
    title: "Section 5: Swift Programming Basics Challenge",
    links: [
      { name: "Magic 8 Ball Starting Project", url: "#" },
      { name: "Magic 8 Ball Completed Project", url: "#" },
    ],
  },
  {
    title: "Section 6: Auto Layout and Responsive UIs",
    links: [
      { name: "Auto Layout Starting Project", url: "#" },
      { name: "Auto Layout Completed Project", url: "#" },
      { name: "Calculator Layout Challenge Starting Project", url: "#" },
      { name: "Calculator Layout Challenge Completed Project", url: "#" },
    ],
  },
  {
    title: "Section 7: Using and Understanding Apple Documentation",
    links: [
      { name: "Xylophone Starting Project", url: "#" },
      { name: "Apple Developer Documentation", url: "#" },
      { name: "Audio Track Engineering Documentation", url: "#" },
      { name: "Bundle Documentation", url: "#" },
      { name: "AVAudioSession Documentation", url: "#" },
      { name: "Xylophone Completed Project", url: "#" },
      { name: "Coding Exercise 5 - Functions Part 1", url: "#" },
      { name: "Coding Exercise 6 - Functions Part 2", url: "#" },
      { name: "repl.it Functions 1 Challenge Solution", url: "#" },
      { name: "repl.it Functions 2 Challenge Solution", url: "#" },
    ],
  },
  {
    title: "Section 8: Intermediate Swift Programming - Control Flow and Optionals",
    links: [
      { name: "Egg Timer Starting Project", url: "#" },
      { name: "Swift Operators", url: "#" },
      { name: "If Programming Languages were Weapons", url: "#" },
      { name: "Egg Timer Completed Project", url: "#" },
      { name: "Coding Exercise 7 - if else", url: "#" },
      { name: "Coding Exercise 8 - Switch Statements", url: "#" },
      { name: "Coding Exercise 9 - Dictionaries", url: "#" },
      { name: "Coding Exercise 10 - Optionals", url: "#" },
      { name: "repl.it If-Else Challenge Solution", url: "#" },
      { name: "repl.it Switch Challenge Solution", url: "#" },
      { name: "repl.it Dictionaries Challenge Solution", url: "#" },
      { name: "repl.it Optionals Challenge Solution", url: "#" },
    ],
  },
  {
    title: "Section 9: iOS App Design Patterns and Code Structuring",
    links: [
      { name: "Quizzler Starting Project", url: "#" },
      { name: "Quizzler Auto Layout Practice Starting Project", url: "#" },
      { name: "Quizzler Completed Project", url: "#" },
      { name: "Quizzler Multiple Choice Challenge Solution", url: "#" },
      { name: "Coding Exercise 11 - Structures", url: "#" },
      { name: "Coding Exercise 12 - Functions Part 3", url: "#" },
      { name: "repl.it Functions 3 Challenge Solution", url: "#" },
      { name: "repl.it Structures Challenge Solution", url: "#" },
    ],
  },
  {
    title: "Section 10: iOS App Design Pattern Challenge",
    links: [
      { name: "Destini Starting Project", url: "#" },
      { name: "Destini Auto Layout Practice Starting Project", url: "#" },
      { name: "Destini Completed Project", url: "#" },
    ],
  },
];

const page = () => {
  return (
  <div className="min-h-screen bg-black text-white items-center">
      {/* ✅ Top Banner */}
      <div className="w-full py-2.5 font-medium text-sm text-white text-center bg-gray-800">
        <p>iOS Course Resources List</p>
      </div>

      {/* ✅ Resources Sections */}
      <div className="px-6 py-10 md:ml-70">
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            <ul className="list-disc ml-6 space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="text-white-400 hover:text-orange-400 transition duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page