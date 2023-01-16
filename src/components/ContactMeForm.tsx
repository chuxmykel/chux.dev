import { MdSend } from "react-icons/md";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

interface IFormState {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactMeForm() {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const [formIsValid, setFormIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [messageIsValid, setMessageIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleChange(event: any) {
    function setState(updates: IFormState) {
      setFormState((prevState) => ({ ...prevState, ...updates }));
    }
    const {
      target: { name, value },
    } = event;
    setState({
      [name]: value,
    });

    if (
      formState.email.length < 1 ||
      formState.name.length < 1 ||
      formState.message.length < 1
    ) {
      setFormIsValid(false);
    } else {
      setFormIsValid(true);
      setEmailIsValid(true);
    }
  }

  function resetForm() {
    setFormState(initialFormState);
  }
  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    if (formState.message.length < 30) {
      setMessageIsValid(false);
      setLoading(false);
      return;
    } else {
      setMessageIsValid(true);
    }
    try {
      const url = "https://formspree.io/f/xpzezeoq";
      const { name, email, message } = formState;
      const body = {
        Name: name,
        Email: email,
        Message: message,
      };
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        resetForm();
        history.push("/thank-you");
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, "errors")) {
          const errors = data["errors"]
            .map((error: { [x: string]: any }) => error["message"])
            .join(", ");
          debugger;
          switch (errors) {
            case "should be an email": {
              setEmailIsValid(false);
              break;
            }
            default: {
              setErrorMessage(errors);
              break;
            }
          }
        } else {
          setErrorMessage("Oops! There was a problem submitting your message!");
        }
      }
    } catch (error) {
      setErrorMessage("Oops! There was a problem submitting your message!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center w-full" id="contact-me">
      <h3 className="font-extrabold text-3xl text-slate-700 dark:text-slate-200">Contact Me!</h3>
      <p className="py-4 font-medium italic text-slate-900 dark:text-slate-50">
        Do you have any questions❓, business proposal📝 or just want to say
        hi👋🏿, please drop me a message📩.
      </p>
      <div className="mb-10 w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 py-4"
        >
          <TextField
            label="Name"
            variant="outlined"
            type={"text"}
            required
            className="w-full"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />

          <TextField
            label="Email"
            variant="outlined"
            type={"email"}
            required
            className="w-full"
            name="email"
            value={formState.email}
            onChange={handleChange}
            error={!emailIsValid}
            helperText={!emailIsValid && "Please provide a valid email"}
          />

          <TextField
            label="Message"
            variant="outlined"
            type={"text"}
            required
            multiline
            rows={4}
            className="w-full"
            name="message"
            value={formState.message}
            onChange={handleChange}
            error={!messageIsValid}
            helperText={!messageIsValid && "Message too short."}
          />
          <p className="text-red-600 text-sm text-center">{errorMessage}</p>
          <div className={`${!formIsValid && "hover:cursor-not-allowed"}`}>
            <Button
              variant="outlined"
              size="large"
              type="submit"
              disabled={!formIsValid || loading}
              endIcon={
                loading ? <FaSpinner className="animate-spin" /> : <MdSend />
              }
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
