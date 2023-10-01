import React from "react";

export default function UniversalChat() {
  return (
    <main className=" relative ">
      <div className="h-screen flex justify-center items-center">
        <div className="flex items-center justify-between container">
          <div>
            <h1 className=" text-center  text-[50px]">Universal chat</h1>
            <p className=" max-w-xl text-[20px] text-center">
              Universal Chat: Revolutionize Your Conversations! Step into a
              world where language barriers vanish! Universal Chat redefines
              real-time translation, offering an experience unparalleled by apps
              like WhatsApp and Google Translation. Engage effortlessly in
              multi-language conversations, with our intelligent language
              recognition and culturally sensitive translations. Covering 50
              languages, enjoy seamless, inclusive group chats and authentic
              voice message translations. Prioritizing your privacy and
              constantly evolving for the better, Universal Chat is not just an
              app—it's the future of global communication. Dive into limitless
              conversations today!
            </p>
          </div>
          <img
            className="  rounded-md max-w-[400px] sm:max-w-[800px]"
            src="https://img.freepik.com/free-photo/glowing-circuit-board-complex-cyborg-brain-design-generated-by-ai_188544-36674.jpg?t=st=1695918758~exp=1695922358~hmac=cc903cc3fa1c8dac9ebbb232fd6a4bb40533425b1d54e650c7bc4a4b6a56d496&w=996"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
