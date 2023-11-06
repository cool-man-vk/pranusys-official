import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const form = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    //name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
      newErrors.email = "Invalid email address";
    }

    // Phone number validation
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Invalid phone number (10 digits)";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm() && form.current) {
      emailjs
        .sendForm(
          process.env.SERVICE || '',
          process.env.TEMPLATE || '',
          form.current,
          process.env.API_KEY || ''
        )
        .then(
          (result) => {
            toast.success("Message sent successfully!");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          },
          (error) => {
            toast.error("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <div className="pt-[100px]">
      <div
        style={{ boxShadow: "0 0 8px grey" }}
        className="rounded-[15px] w-[90%] mx-auto h-auto p-[1%]"
      >
        <h1 className="ssm:text-[35px] text-[44px] px-[5%] py-[2%] text-[#4286e4]">
          Let's talk
        </h1>
        <p className="text-[16px] ssm:text-[14px] mx-[5%] my-[12px]">
          To request a quote or wanna have a meetup regarding your requirements,
          contact us directly or fill the form and we will get back to you
          promptly.
        </p>
        <form ref={form} onSubmit={handleSubmit}>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="p-[8px] w-[60%] ssm:w-[90%] ssm:mx-[5%]  outline-none ml-[5%] mr-[20%] my-[10px] border-[grey] border-b-2 text-[16px]"
            placeholder="Enter your name"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-[12px] ml-[5%]">{errors.name}</p>
          )}
          <input
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-[8px] w-[60%] ssm:w-[90%] ssm:mx-[5%] outline-none ml-[5%] mr-[20%] my-[10px] border-[grey] border-b-2 text-[16px]"
            placeholder="Enter your email"
            type="text"
          />
          {errors.email && (
            <p className="text-red-500 text-[12px] ml-[5%]">{errors.email}</p>
          )}
          <input
            value={phone}
            name="phone_no"
            onChange={(e) => setPhone(e.target.value)}
            className="p-[8px] w-[60%] ssm:w-[90%] ssm:mx-[5%] outline-none ml-[5%] mr-[20%] my-[10px] border-[grey] border-b-2 text-[16px]"
            placeholder="Enter your Phone number"
            maxLength={10}
            type="number"
          />
          {errors.phone && (
            <p className="text-red-500 text-[12px] ml-[5%]">{errors.phone}</p>
          )}
          <textarea
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="p-[8px] w-[60%] ssm:w-[90%] h-[100px] resize-none ssm:mx-[5%] outline-none ml-[5%] mr-[20%] my-[10px] border-[grey] border-b-2 text-[16px]"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-[12px] ml-[5%]">{errors.message}</p>
          )}
          <button
            type="submit"
            className="p-[8px] mx-[5%] my-[18px] w-[120px] rounded-[12px] bg-[orange] text-white text-[16px] ssm:block ssm:mx-auto"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
