
import React, { useState } from "react";
import myIcon from "../assets/icon.svg";

export function Step3({ increaseStep, reduceStep }) {
  const [dob, setDob] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const [errors, setErrors] = useState({
    dob: "",
    profileImage: "",
  });

  const validateDob = (date) => {
    if (!date) return "Date of birth is required.";
    return "";
  };

  const validateProfileImage = (file) => {
    if (!file) return "Profile image is required.";
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type))
      return "Only JPG, PNG, or GIF allowed.";
    return "";
  };

  const handleDobChange = (e) => {
    const value = e.target.value;
    setDob(value);
    setErrors((prev) => ({ ...prev, dob: validateDob(value) }));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
    setErrors((prev) => ({
      ...prev,
      profileImage: validateProfileImage(file),
    }));
  };

  const isValid = !errors.dob && !errors.profileImage && dob && profileImage;

  const handleContinue = () => {
    const dobError = validateDob(dob);
    const profileError = validateProfileImage(profileImage);

    setErrors({
      dob: dobError,
      profileImage: profileError,
    });

    if (!dobError && !profileError) {
      increaseStep();
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#f4f4f4]">
      <div className="w-[480px] h-[655px] flex flex-col justify-between items-center bg-white rounded-lg p-8">
        <div>
          <div className="bg-[url(./assets/main.svg)] w-[60px] h-[60px] bg-no-repeat bg-center"></div>
          <h1 className="text-[26px] font-semibold">Join Us! 😎</h1>
          <p className="font-normal text-[#838383] mt-1">
            Please provide all current information accurately.
          </p>

          
          <div className="flex flex-col space-y-1 w-full mt-8">
            <label
              htmlFor="dob"
              className="text-sm font-medium text-gray-700 w-[416px]"
            >
              Date of birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={handleDobChange}
              className={`w-full rounded-md border px-3 py-2 placeholder-gray-400 focus:outline-none cursor-pointer ${
                errors.dob
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
              required
            />
            {errors.dob && (
              <p className="text-red-500 text-sm">{errors.dob}</p>
            )}
          </div>

        
          <div className="flex flex-col space-y-1 w-full mt-4">
            <label
              htmlFor="image-upload"
              className="text-sm font-medium text-gray-700"
            >
              Profile image <span className="text-red-500">*</span>
            </label>

            <div className="w-[416px] h-[180px] border-2  border-none rounded-xl flex justify-center items-center bg-gray-50 cursor-pointer overflow-hidden">
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile Preview"
                  className="object-cover w-full h-full rounded-xl"
                />
              ) : (
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-900"
                >
                  <input
                    type="file"
                    id="image-upload"
                    name="profile"
                    hidden
                    accept="image/*"
                    onChange={handleProfileImageChange}
                  />
                 <img
  src={myIcon}
  alt="Add Icon"
  className="w-6 h-6 object-contain"
/>
                  <span>Add image</span>
                </label>
              )}
            </div>

            {errors.profileImage && (
              <p className="text-red-500 text-sm">{errors.profileImage}</p>
            )}
          </div>
        </div>

       
        <div className="gap-[8px] flex mt-[8px]">
          <button
            type="button"
            onClick={reduceStep}
            className="w-[128px] min-h-[44px] border-[#cbd5e1] border bg-white active:bg-[#e5e5e5] hover:bg-[#e0e0e2] text-black rounded-md"
          >
            &lt; Back
          </button>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!isValid}
            className={`w-[280px] min-h-[44px] rounded-md text-white hover:bg-[#39393a] ${
              isValid
                ? "bg-[#121416] hover:bg-[#39393a] active:bg-[#4c4c4c]"
                : "bg-[#121416] cursor-pointer"
            }`}
          >
            Continue 3/3 &gt;
          </button>
        </div>
      </div>
    </div>
  );
}


