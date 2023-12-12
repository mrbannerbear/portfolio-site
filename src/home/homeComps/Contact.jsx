import { FaLinkedin, FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import emailjs from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e) => {

        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
        console.log(e.target)
    
        emailjs.sendForm(`${import.meta.env.VITE_email_serviceID}`, `${import.meta.env.VITE_email_templateID}`, e.target, `${import.meta.env.VITE_email_userID}`)
          .then(() => {
              alert("good")
          }, (error) => {
              console.log(error.text);
          });
      }

  return (
    <div id="contact" className="min-h-screen bg-gray-100 text-gray-700 px-6 pb-12">
      <div className="flex justify-center items-center gap-10 flex-col-reverse">
        <div className="shadow-lg ">
            <>

            <form className="card-body" onSubmit={sendEmail}>
                <h1 className="text-2xl font-roboto-mono">Send Me a Message</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          type="text" 
          name="from_name"
          placeholder="name"
          className="input input-bordered rounded-sm focus:outline-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
           type="email" 
           name="reply_to"
          placeholder="email" 
          className="input input-bordered rounded-sm focus:outline-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input
           type="text" 
           name="subject"
          placeholder="subject (optional)" 
          className="input input-bordered rounded-sm focus:outline-none" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="message"
           placeholder="Write me a message" className="input input-bordered rounded-sm focus:outline-none h-20" required />
        </div>
        <div className="mt-6 flex justify-end w-full">
        <input type="submit" value="Send" className="btn1" />
        </div>
      </form>


            </>
        </div>
        <div className="max-w-lg">
          <h1 className="text-4xl font-medium font-roboto-mono">
            Reach Me Out On:
          </h1>
          <p className="py-6 text-sm flex flex-col">
            <span className="flex items-center gap-1" > <IoIosMail></IoIosMail>
                Email: <a 
                className="hover:underline"
                href="mailto:sayedsaqlayn@gmail.com">sayedsaqlayn@gmail.com</a></span>
            <span className="flex items-center gap-1"> <FaLinkedin></FaLinkedin>
                LinkedIn: <a 
                className="hover:underline"
                href="https://www.linkedin.com/in/sayed-saqlayn/" target="_blank" rel="noreferrer">linkedin.com/in/sayed-saqlayn</a></span>
                <span className="flex items-center gap-1">
                    <FaPhone></FaPhone>
                    Phone: <a 
                    className="hover:underline"
                    href="tel:+8801839298369">+8801839298369</a>
                </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
