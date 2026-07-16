import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Minimum 2 characters"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  message: yup
    .string()
    .required("Message is required")
});

export default function ContactForm() {
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );

      setResult("Form submitted successfully.");
      reset();
    } catch (error) {
      setResult("Something went wrong.");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px"
      }}
    >
      <h2>Contact Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder="Name"
          {...register("name")}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>

        <input
          placeholder="Email"
          {...register("email")}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <textarea
          placeholder="Message"
          {...register("message")}
        />
        <p style={{ color: "red" }}>{errors.message?.message}</p>

        <button type="submit">
          Submit
        </button>

      </form>

      <h3>{result}</h3>
    </div>
  );
}