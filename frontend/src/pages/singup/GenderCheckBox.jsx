import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex mt-2 ">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer mr-4`}>
          <input
            type="radio"
            name="gender"
            value="male"
            className="checkbox checkbox-sm "
          />
          <span>Male</span>
        </label>
        <label className={`label gap-2 cursor-pointer`}>
          <input
            type="radio"
            name="gender"
            value="female"
            className="checkbox checkbox-sm "
          />

          <span>Female</span>
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
