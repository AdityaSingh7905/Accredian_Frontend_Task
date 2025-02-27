"use client";
import React, { useContext, useState } from "react";
import { ReferralContext } from "../utils/ReferralContextProvider";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Form() {
  const referralCtx = useContext(ReferralContext);
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [referrerPhone, setReferrerPhone] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [refereePhone, setRefereePhone] = useState("");
  const [courseName, setCourseName] = useState("");

  const validateString = (name: string) => {
    if (name.trim().length > 0) return true;
    return false;
  };

  const validateEmail = (email: string) => {
    // Regular expression for validating an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone: string) => {
    // Regular expression for validating international phone numbers
    const phonePattern = /^\+?[1-9]\d{0,14}$/;
    return phonePattern.test(phone);
  };

  const [referrerNameIsTouched, setReferrerNameIsTouched] = useState(false);
  const isReferrerNameValid = validateString(referrerName);
  const referrerNameHasError = !isReferrerNameValid && referrerNameIsTouched;

  const [referrerEmailIsTouched, setReferrerEmailIsTouched] = useState(false);
  const isReferrerEmailValid = validateEmail(referrerEmail);
  const referrerEmailHasError = !isReferrerEmailValid && referrerEmailIsTouched;

  const [referrerPhoneIsTouched, setReferrerPhoneIsTouched] = useState(false);
  const isReferrerPhoneValid = validatePhone(referrerPhone);
  const referrerPhoneHasError = !isReferrerPhoneValid && referrerPhoneIsTouched;

  const [refereeNameIsTouched, setRefereeNameIsTouched] = useState(false);
  const isRefereeNameValid = validateString(refereeName);
  const refereeNameHasError = !isRefereeNameValid && refereeNameIsTouched;

  const [refereeEmailIsTouched, setRefereeEmailIsTouched] = useState(false);
  const isRefereeEmailValid = validateEmail(refereeEmail);
  const refereeEmailHasError = !isRefereeEmailValid && refereeEmailIsTouched;

  const [refereePhoneIsTouched, setRefereePhoneIsTouched] = useState(false);
  const isRefereePhoneValid = validatePhone(refereePhone);
  const refereePhoneHasError = !isRefereePhoneValid && refereePhoneIsTouched;

  const [CourseNameIsTouched, setCourseNameIsTouched] = useState(false);
  const isCourseNameValid = validateString(courseName);
  const courseNameHasError = !isCourseNameValid && CourseNameIsTouched;

  let formIsValid =
    isReferrerNameValid &&
    isReferrerEmailValid &&
    isReferrerPhoneValid &&
    isRefereeNameValid &&
    isRefereeEmailValid &&
    isRefereePhoneValid &&
    isCourseNameValid;

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formIsValid) return;
    console.log({
      referrerName,
      referrerEmail,
      referrerPhone,
      refereeName,
      refereeEmail,
      refereePhone,
      courseName,
    });
    //add this form credentials to the db
    const res = await fetch(`${API_URL}/api/referrals`, {
      method: "POST",
      body: JSON.stringify({
        referrerName,
        referrerEmail,
        referrerPhone,
        refereeName,
        refereeEmail,
        refereePhone,
        courseName,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Failed to save referralData!!");
    }
    const data = await res.json();
    console.log(data);
    referralCtx.closeModal(); // Close the modal after submission
  };

  if (!referralCtx.isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-screen overflow-y-auto p-6">
        <h2 className="text-xl mx-auto font-semibold">Referral Form</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold">Referrer Details</h3>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              value={referrerName}
              onChange={(e) => setReferrerName(e.target.value)}
              onBlur={(e) => setReferrerNameIsTouched(true)}
              required
              className={`w-full p-3 border rounded-md outline-none transition-all duration-300 ${
                referrerNameHasError
                  ? "bg-red-100 border-red-500"
                  : "bg-white border-gray-300"
              }`}
            />
            {referrerNameHasError && (
              <p className="text-red-500">Please enter valid name.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              value={referrerEmail}
              onChange={(e) => setReferrerEmail(e.target.value)}
              onBlur={(e) => setReferrerEmailIsTouched(true)}
              required
              className={`w-full p-3 border rounded-md outline-none transition-all duration-300 ${
                referrerEmailHasError
                  ? "bg-red-100 border-red-500"
                  : "bg-white border-gray-300"
              }`}
            />
            {referrerEmailHasError && (
              <p className="text-red-500">Please enter valid email.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block">Phone Number</label>
            <input
              type="tel"
              value={referrerPhone}
              onChange={(e) => setReferrerPhone(e.target.value)}
              onBlur={(e) => setReferrerPhoneIsTouched(true)}
              required
              className={`w-full p-3 border rounded-md outline-none transition-all duration-300 ${
                referrerPhoneHasError
                  ? "bg-red-100 border-red-500"
                  : "bg-white border-gray-300"
              }`}
            />
            {referrerPhoneHasError && (
              <p className="text-red-500">Please enter valid phone number.</p>
            )}
          </div>

          <h3 className="font-bold">Referee Details</h3>
          <div className="mb-4">
            <label className="block">Name</label>
            <input
              type="text"
              value={refereeName}
              onChange={(e) => setRefereeName(e.target.value)}
              onBlur={(e) => setRefereeNameIsTouched(true)}
              required
              className={`w-full p-3 border rounded-md outline-none transition-all duration-300 ${
                refereeNameHasError
                  ? "bg-red-100 border-red-500"
                  : "bg-white border-gray-300"
              }`}
            />
            {refereeNameHasError && (
              <p className="text-red-500">Please enter valid name.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              value={refereeEmail}
              onChange={(e) => setRefereeEmail(e.target.value)}
              onBlur={(e) => setRefereeEmailIsTouched(true)}
              required
              className={`w-full p-3 border rounded-md outline-none transition-all duration-300 ${
                refereeEmailHasError
                  ? "bg-red-100 border-red-500"
                  : "bg-white border-gray-300"
              }`}
            />
            {refereeEmailHasError && (
              <p className="text-red-500">Please enter valid email.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block">Phone Number</label>
            <input
              type="tel"
              value={refereePhone}
              onChange={(e) => setRefereePhone(e.target.value)}
              onBlur={(e) => setRefereePhoneIsTouched(true)}
              required
              className={`w-full p-3 border rounded-md outline-none transition-all duration-300 ${
                refereePhoneHasError
                  ? "bg-red-100 border-red-500"
                  : "bg-white border-gray-300"
              }`}
            />
            {refereePhoneHasError && (
              <p className="text-red-500">Please enter valid phone number.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block">Course Name</label>
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              onBlur={(e) => setCourseNameIsTouched(true)}
              required
              className={`w-full p-3 border rounded-md outline-none transition-all duration-300 ${
                courseNameHasError
                  ? "bg-red-100 border-red-500"
                  : "bg-white border-gray-300"
              }`}
            />
            {courseNameHasError && (
              <p className="text-red-500">Please enter valid course.</p>
            )}
          </div>
          <button
            type="submit"
            disabled={!formIsValid}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:hover:bg-gray-400"
          >
            Submit Referral
          </button>
        </form>
        <button
          onClick={() => referralCtx.closeModal()}
          className="mt-4 text-blue-600 underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}
