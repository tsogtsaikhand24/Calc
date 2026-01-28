import { useState } from "react";
import { Input } from "./input";

export function Step1({ increaseStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
  });

  const validateName = (name) => {
    if (!name.trim()) return "Cannot be empty.";
    if (/\s/.test(name)) return "No spaces allowed.";
    if (/\d/.test(name)) return "No numbers allowed.";
    if (/[^a-zA-ZА-Яа-яҮүӨөЁё]/.test(name)) return "Only letters allowed.";
    return "";
  };

  const validateUsername = (name) => {
    if (!name.trim()) return "Cannot be empty.";
    if (/\s/.test(name)) return "No spaces allowed.";
    if (/[^a-zA-Z0-9_]/.test(name)) return "Only letters, numbers, _ allowed.";
    return "";
  };

  const handleFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setErrors((prev) => ({ ...prev, firstName: validateName(value) }));
  };

  const handleLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
    setErrors((prev) => ({ ...prev, lastName: validateName(value) }));
  };

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
    setErrors((prev) => ({ ...prev, username: validateUsername(value) }));
  };

  const isValid =
    !errors.firstName &&
    !errors.lastName &&
    !errors.username &&
    firstName.trim() &&
    lastName.trim() &&
    username.trim();

  const handleContinue = () => {
    const firstNameError = validateName(firstName);
    const lastNameError = validateName(lastName);
    const usernameError = validateUsername(username);

    setErrors({
      firstName: firstNameError,
      lastName: lastNameError,
      username: usernameError,
    });

    if (!firstNameError && !lastNameError && !usernameError) {
      increaseStep();
    }
  };

  return (
    <div className="w-full h-full justify-center items-center flex bg-[#f4f4f4]">
      <div
        className="w-[480px] h-[655px]  flex flex-col justify-between
       items-center bg-white rounded-lg p-[32px]"
      >
        <div>
          <div>
            <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px]"></div>
            <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
            <p className="font-normal text-[#838383] ">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="gap-[8px] flex  mt-6 flex-col w-[416px] min-h-[44px] ">
            <Input
              label={
                <>
                  First name <span style={{ color: "red" }}>*</span>
                </>
              }
              placeholder="Write your first name"
              value={firstName}
              onChange={handleFirstName}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  firstName: validateName(firstName),
                }))
              }
              error={errors.firstName}
            />
            <Input
              label={
                <>
                  Last name <span style={{ color: "red" }}>*</span>
                </>
              }
              placeholder="Write your last name"
              value={lastName}
              onChange={handleLastName}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  lastName: validateName(lastName),
                }))
              }
              error={errors.lastName}
            />
            <Input
              label={
                <>
                  Username <span style={{ color: "red" }}>*</span>
                </>
              }
              placeholder="Write your username"
              value={username}
              onChange={handleUsername}
              onBlur={() =>
                setErrors((prev) => ({
                  ...prev,
                  username: validateUsername(username),
                }))
              }
              error={errors.username}
            />
          </div>
        </div>

        <div className="flex items-end w-[416px] ">
          <button
            onClick={handleContinue}
            disabled={!isValid}
            className={`w-[416px] min-h-[44px]  flex justify-center items-center cursor-pointer rounded-md text-white font-medium transition hover:bg-[#39393a]
              ${
                isValid
                  ? "bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c]"
                  : "bg-[#121416] cursor-not-allowed"
              }`}
          >
            Continue 1/3 &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
