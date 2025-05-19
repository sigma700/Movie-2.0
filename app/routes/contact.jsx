import {filledInputClasses} from "@mui/material";
import {validateEmail, validatePhone, validateText} from "../server/validtion";
import {data} from "react-router";
import {sendMail} from "../server/nodemailer";
import nodemailer from "nodemailer";
import {Form} from "react-router";
// import {Subject} from "@mui/icons-material";

export async function action({request}) {
  let formData = await request.formData();
  let name = formData.get("name");
  let phone = formData.get("phone");
  let email = formData.get("email");
  let message = formData.get("message");
  console.log({name, email, phone, message});

  //form validation

  let transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "allankirimi65@gmail.com",
      pass: "qtup vbjk gmsd stkc",
    },
  });

  transporter.sendMail(
    {
      from: "allankirimi65@gmail.com",
      to: "allankirimi65@gmail.com",
      subject: `New message from ${name}`,
      text: `
    Name : ${name}
    Email : ${email}
    Phone : ${phone}
    Message : ${message}
    `,
    },
    (error, info) => {
      if (error) {
        return console.log("Error sending email:", error);
      }
      console.log("Email sent:", info.response);
    }
  );

  let fieldErrors = {
    name: validateText(name),
    phone: validatePhone(phone),
    email: validateEmail(email),
    message: validateText(message),
  };

  return null;
}

//seending the email

export default function Contacts({actionData}) {
  console.log({actionData});

  return (
    <main>
      <div className="p-[20px]">
        <h1 className="text-center text-[30px]">Contacts</h1>
        <Form className="w-[700px]" action="" method="post">
          <FormSpacer>
            <Label htmlFor="Name" text="Name" />
            <Input
              type="text"
              id="name"
              name="name"
              hasError={actionData?.fieldErrors.name}
            />
            {actionData?.fieldErrors.name ? (
              <p className="text-[10px] text-red-600">
                {actionData.fieldErrors.name}
              </p>
            ) : null}
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="phone" text="phone" />
            <Input
              type="number"
              id="phone"
              name="phone"
              hasError={actionData?.fieldErrors.phone}
            />
            {actionData?.fieldErrors.phone ? (
              <p className="text-[10px] text-red-600">
                {actionData.fieldErrors.phone}
              </p>
            ) : null}
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="email" text="Email" />
            <Input
              type="email"
              id="email"
              name="email"
              hasError={actionData?.fieldErrors.email}
            />
            {actionData?.fieldErrors.email ? (
              <p className="text-[10px] text-red-600">
                {actionData.fieldErrors.email}
              </p>
            ) : null}
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="message" text="Message" />
            <Input
              type="text"
              id="message"
              name="message"
              hasError={actionData?.fieldErrors.message}
            />
            {actionData?.fieldErrors.message ? (
              <p className="text-[10px] text-red-600">
                {actionData.fieldErrors.message}
              </p>
            ) : null}
          </FormSpacer>

          <FormSpacer>
            <button
              onClick={sendMail}
              className="bg-teal-600 mt-[30px] w-fit p-[10px] rounded-[10px]"
              type="submit"
            >
              Submit
            </button>
          </FormSpacer>
        </Form>
      </div>
    </main>
  );
}

export function Label({htmlFor, text}) {
  return (
    <label className="text-white w-full" htmlFor={htmlFor} text={text}>
      {text}
    </label>
  );
}

export function Input({type, id, name, hasError}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`border ${
        hasError ? "border-red-600" : "border-white"
      } p-[10px]`}
    />
  );
}

export function FormSpacer({children}) {
  return <div className="flex flex-col gap-2 w-full">{children}</div>;
}
