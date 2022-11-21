import { useState, useEffect } from "react";
import useSpeech from "use-speech18";

function App() {
  const [index, setIndex] = useState(0);
  const [speaktext, setSpeaktext] = useState(
    ``
  );
  const { Speak, speak_utils } = useSpeech();

  useEffect(() => {
    speak_utils.setVoice(
      speak_utils.Voices[index % speak_utils.Voices.length].name
    );
  }, [index]);

  return (
    <div className="app">
      <h3 className="text-3xl font-bold mb-8">
        Current Voice: {speak_utils.selectedVoice?.name}
      </h3>
      <div className="flex items-center justify-center">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
            type="button"
            className="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            onClick={() => Speak(speaktext)}
          >
            Speak
          </button>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            onClick={() => setIndex((prev) => prev + 1)}
          >
            Next Voice
          </button>
          <button
            type="button"
            className=" rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            onClick={() => setIndex((prev) => prev - 1)}
          >
            Prev Voice
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            for="exampleFormControlInput1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Please enter the text you want the computer to speak!
          </label>
          <input
            type="text"
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            onChange={(event) => setSpeaktext(`${event.target.value}`)}
            id="exampleFormControlInput1"
            placeholder="Enter text"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
