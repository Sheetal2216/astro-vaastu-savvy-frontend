import { useState } from "react";

function PromptBox() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "system",
      text: "Welcome to our website. If you need any help or have a specific query, reply to this message and we will revert back to you.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const replyOne = {
      sender: "system",
      text: "Thank you for connecting with Astro Vaastu Expert Savvy Singh, a renowned Celebrity Astrologer and Vastu Consultant.",
    };

    const replyTwo = {
      sender: "system",
      text:
        "We are happy to assist you further. For individualized and prompt solutions, kindly book an appointment or connect with us on WhatsApp at +91 7303014789.",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, replyOne]);
    }, 700);

    setTimeout(() => {
      setMessages((prev) => [...prev, replyTwo]);
    }, 1600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] bg-[#BC6C25] text-white px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition"
      >
        💬 Help?
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 z-[9999] w-80 bg-[#F5EBE0] border border-[#606C33]/40 rounded-xl shadow-xl flex flex-col">

          {/* Header */}
          <div className="px-4 py-3 border-b border-[#606C33]/30">
            <p className="font-['Playfair_Display'] text-[#1B2624]">
              Astro Vaastu Savvy
            </p>
            <p className="text-xs font-['Poppins'] text-[#606C33]">
              Professional Consultation Support
            </p>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 overflow-y-auto max-h-64 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-[#DDA158]/30 text-right ml-auto"
                    : "bg-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="px-4 pb-3">
            <a
              href="https://wa.me/917303014789?text=Hello%20Team%20Astro%20Vaastu%20Savvy,%20I%20have%20a%20query%20and%20would%20like%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#25D366] text-white py-2 rounded-md text-sm font-['Poppins'] shadow hover:opacity-90 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#606C33]/30 flex gap-2">
            <input
              type="text"
              placeholder="Type your message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-[#606C33]/40 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-[#1B2624] text-white px-4 py-2 rounded-md text-sm"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}

export default PromptBox;
