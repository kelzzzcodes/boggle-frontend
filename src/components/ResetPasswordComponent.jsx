import React from 'react'

const ResetPasswordComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#f4f4f4]">
      <div className="max-w-[350px]  h-auto bg-white mt-24 mb-12 px-6 py-6 flex flex-col text-left shadow-md rounded-md">
        <h3 className="mb-2 text-xl font-semibold">Reset Password</h3>
        <p className="text-[16px] font-medium">
          Set a new password for your account.
        </p>
        <label
          className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
          htmlFor="new-password"
        >
          New Password
        </label>
        <input
          className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded"
          type="password"
          id="new-password"
        />
        <label
          className="mt-2 block text-[14px] font-medium text-[#2d2d2d]"
          htmlFor="confirm-password"
        >
          Confirm Password
        </label>
        <input
          className="w-full py-1 px-2 border-[1px] border-[#ccc] outline-none rounded"
          type="password"
          id="confirm-password"
        />
        <button className="button my-3">Submit</button>
      </div>
    </div>
  )
}

export default ResetPasswordComponent
