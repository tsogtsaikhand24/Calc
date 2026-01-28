import React, { useState } from "react";
import { Input } from "./input";

export function Step2({ increaseStep, reduceStep }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    if (!email.trim()) return "Cannot be empty.";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "" : "Invalid email format.";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return "Cannot be empty.";
    const regex = /^[0-9]{8,}$/;
    return regex.test(phone) ? "" : "Invalid phone number.";
  };

  const validatePassword = (pass) => {
    if (!pass.trim()) return "Cannot be empty.";
    if (pass.length < 6) return "Password must be at least 6 characters.";
    return "";
  };

  const validateConfirmPassword = (confirm) => {
    if (!confirm.trim()) return "Cannot be empty.";
    if (confirm !== password) return "Passwords do not match.";
    return "";
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePhone = (e) => {
    const value = e.target.value;
    setPhone(value);
    setErrors((prev) => ({ ...prev, phone: validatePhone(value) }));
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({
      ...prev,
      password: validatePassword(value),
      confirmPassword: validateConfirmPassword(confirmPassword),
    }));
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setErrors((prev) => ({
      ...prev,
      confirmPassword: validateConfirmPassword(value),
    }));
  };

  const isValid =
    !errors.email &&
    !errors.phone &&
    !errors.password &&
    !errors.confirmPassword &&
    email.trim() &&
    phone.trim() &&
    password.trim() &&
    confirmPassword.trim();

  const handleContinue = () => {
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    setErrors({
      email: emailError,
      phone: phoneError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    if (!emailError && !phoneError && !passwordError && !confirmPasswordError) {
      increaseStep();
    }
  };

  return (
    <div className="w-full h-full justify-center items-center flex bg-[#f4f4f4]">
      <div
        className="w-[480px] h-[655px]  flex flex-col justify-between
       items-center bg-white rounded-lg p-[32px]"
      >
        <div className="mr-15">
          <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px]"></div>
          <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
          <p className="font-normal text-[#838383] mt-1">
            Please provide all current information accurately.
          </p>
        </div>

        <div className="gap-[8px] flex flex-col  w-full">
          <Input
            label={
              <>
                Email <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Write your Email"
            value={email}
            onChange={handleEmail}
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                email: validateEmail(email),
              }))
            }
            error={errors.email}
          />

          <Input
            label={
              <>
                Phone Number <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Write your Phone Number"
            value={phone}
            onChange={handlePhone}
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                phone: validatePhone(phone),
              }))
            }
            error={errors.phone}
          />

          <Input
            label={
              <>
                Password <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Write your Password"
            type="password"
            value={password}
            onChange={handlePassword}
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                password: validatePassword(password),
              }))
            }
            error={errors.password}
          />

          <Input
            label={
              <>
                Confirm password <span style={{ color: "red" }}>*</span>
              </>
            }
            placeholder="Write your Confirm password"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            onBlur={() =>
              setErrors((prev) => ({
                ...prev,
                confirmPassword: validateConfirmPassword(confirmPassword),
              }))
            }
            error={errors.confirmPassword}
          />
        </div>

        <div className="gap-[8px] flex mt-10">
          <button
            className="w-[128px] min-h-[44px] cursor-pointer border-[#cbd5e1] border bg-white hover:bg-[#efefef] active:bg-[#e5e5e5] text-black rounded-md"
            onClick={reduceStep}
          >
            &lt; Back
          </button>

          <button
            onClick={handleContinue}
            disabled={!isValid}
            className={`w-[280px] min-h-[44px] rounded-md text-white font-medium transition cursor-pointer hover:bg-[#39393a]
                ${
                  isValid
                    ? "bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c]"
                    : "bg-[#121416] cursor-not-allowed"
                }`}
          >
            Continue 2/3 &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
