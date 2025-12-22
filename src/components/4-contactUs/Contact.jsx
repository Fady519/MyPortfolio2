
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import contactAnimation from "../../../public/Contact Us.json";
import doneAnimation from "../../../public/Success Check.json";
import { useEffect, useRef } from 'react';

export default function Contact() {

  const [state, handleSubmit] = useForm("mrbnardn");

  // refs for inputs
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // clear inputs after successful submit
  useEffect(() => {
    if (state.succeeded) {
      if (emailRef.current) emailRef.current.value = "";
      if (messageRef.current) messageRef.current.value = "";
    }
  }, [state.succeeded]);

  return (
    <>
      <section className='contact-us' id='contact'>
        <h1 className='title'>
          <i className='fa-solid fa-envelope icon-envelope'></i> Contact Us
        </h1>

        <p className='sub-title'>
          I’m Fady, a passionate Full Stack Developer focused on building strong user experiences...
        </p>

        <div style={{ justifyContent: "space-between" }} className='flex'>
          <form onSubmit={handleSubmit}>

            <div className='flex'>
              <label htmlFor='email'> Email Address: </label>
              <input
                ref={emailRef}
                autoComplete='off'
                required
                type='email'
                id='email'
                name='email'
                placeholder='Email Address'
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className='flex' style={{ marginTop: "24px" }}>
              <label htmlFor='message'> Your Message: </label>
              <textarea
                ref={messageRef}
                required
                name='message'
                id='message'
                placeholder='Message'
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button className='submit' disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Submit"}
            </button>

            {state.succeeded && (
              <p className='flex' style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                <Lottie loop={false} style={{ height: 40 }} animationData={doneAnimation} />
                Your Message Has Been Sent Successfully
              </p>
            )}

          </form>

          <div className='animation'>
            <Lottie className='contact-animation' style={{ height: 355 }} animationData={contactAnimation} />
          </div>
        </div>
      </section>
    </>
  );
}
