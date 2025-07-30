import { useRef, useState } from "react";
import { BiSend, BiTrash, BiX } from "react-icons/bi";
import AnimatedSpin from "./AnimatedSpin";

export default function Notfiy({
  textVal,
  setTextVal,
  addNotToFireStore,
  loading,
  handleCloseNotfiy,
}) {
  const emojes = [
    { emo: "🔰" },
    { emo: "🔴" },
    { emo: "✖️" },
    { emo: "🧡" },
    { emo: "✅" },
    { emo: "🟥" },
    { emo: "🤣" },
    { emo: "😍" },
    { emo: "😪" },
    { emo: "🤮" },
    { emo: "🥵" },
    { emo: "💔" },
    { emo: "💯" },
    { emo: "🌹" },
    { emo: "🇸🇩" },
    { emo: "🔌" },
  ];
  const fixedMsgs = [
    "أم دباكر خارج الخدمة 🟥",
    "blackout - بلاك أوت ⬛",
    "أم دباكر داخل الخدمة 🟢",
    "كوستي داخل الخدمة 🟢",
    "تندلتي داخل الخدمة 🟩",
    "أم روابة داخل الخدمة 💚",
    "الرهد داخل الخدمة 🟢",
    "الأبيض داخل الخدمة 🟩",
  ];
  const [showEmo, setShowEmo] = useState(false);
  const textRef = useRef(null);

  const handleTextChange = (e) => {
    setTextVal(e.target.value);
  };

  const insertEmoje = (e) => {
    console.log("insert emo to text area");
    textRef.current.focus();
    let NewTextVal = textVal + " " + e.target.textContent;
    setTextVal(NewTextVal);
  };

  const insertFixedMsg = (e) => {
    textRef.current.focus();
    let newTextVal = textVal + " " + e.target.textContent;
    setTextVal(newTextVal);
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-cyan-600 p-3 [direction:rtl] space-y-3 w-[300px]">
      {/* close icon */}
      <button
        className="cursor-pointer bg-red-200 rounded hover:bg-red-300"
        onClick={handleCloseNotfiy}
      >
        <BiX size={30} color="red" />
      </button>
      {/* text area wrapper */}
      <div className="w-full flex items-center flex-col gap-3">
        <textarea
          value={textVal}
          onChange={handleTextChange}
          ref={textRef}
          className="bg-white w-full h-30 p-2 text-center mx-auto block [direction:rtl]"
          placeholder="سيتم إرسال ما تكتبه للمستخدمين عند فتح الموقع"
        ></textarea>
        {/* actions */}
        <div
          className={`flex self-center space-x-3 ${
            textVal !== "" ? `opacity-100 max-h-40` : `opacity-0 max-h-0`
          } transition-all duration-300 ease-in-out`}
        >
          {/* send icon */}
          <button
            onClick={addNotToFireStore}
            disabled={loading}
            className="bg-green-300 w-fit p-2 rounded-full self-center cursor-pointer hover:bg-green-400"
          >
            {!loading ? (
              <BiSend color="black" size={20} />
            ) : (
              <div className="flex items-center gap-2">
                <span>جار الإرسال</span>
                <AnimatedSpin />
              </div>
            )}
          </button>
          {/* trash icon */}
          <button
            onClick={() => setTextVal("")}
            className="bg-red-300 w-fit p-2 rounded-full self-center cursor-pointer hover:bg-red-400"
          >
            <BiTrash color="black" size={20} />
          </button>
        </div>
      </div>

      {/* Emo Btn */}
      <button
        className="bg-gray-600 text-white p-2 cursor-pointer rounded hover:text-gray-200 hover:bg-gray-900"
        onClick={() => setShowEmo(!showEmo)}
      >
        الإيموجي😀
      </button>
      {/* emoje list */}
      <div className={`flex [&_button]:cursor-pointer flex-wrap max-h-0 gap-2 transition-all duration-200 ease-out overflow-hidden bg-gray-800  ${showEmo && ' max-h-20'}`}>
        {emojes.map((e, i) => (
          <button
            key={i}
            onClick={insertEmoje}
            className={`max-h-0 transition-all duration-300 ease-in-out ${
              showEmo && "max-h-[190px]"
            }`}
          >
            {e?.emo}
          </button>
        ))}
      </div>

      {/* fixed message */}
      <div className="flex gap-3 flex-col overflow-y-scroll max-h-40">
        {fixedMsgs.map((msg, i) => (
          <p
            key={i}
            className="bg-gray-200 p-2 cursor-pointer  text-center"
            onClick={insertFixedMsg}
          >
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}
