import React from "react";
import { useForm, ValidationError } from "@formspree/react";
// import message from "../assets/img/message.png";
import subscription from "../assets/img/subscription.png";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzbnlbvp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="grid mx-10 gap-10 sm:flex p-10">
      <img src={subscription} alt="" className="w-1/2 m-auto" />
      <div className="grid text-center items-center m-auto gap-4">
        <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold ">Subscribe For More Info and update from Dimple Towers!</h1>
        <form onSubmit={handleSubmit} className="grid gap-2">
          {/* <label htmlFor="email" className="">Email Address</label> */}
          <input id="email" type="email" name="email" placeholder="Email Address" className="p-3 text-[#E5C26B]  border border-s-black-200  rounded-full"/>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="bg-[#E5C26B] p-3 rounded-full">
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return <ContactForm />;
}

export default App;
