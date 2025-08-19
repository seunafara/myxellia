import React from 'react'

const ProfilePopup = (props: {
  display: boolean
}) => {
  return (
    <div className={`header-profile-popup ${props.display ? 'block' : 'hidden'}`}>
      <div className="header-profile-info">
        <div className="profile">
          S
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className='font-semibold text-2xl text-black'>Seun Afara</h2>
          <p className='text-gray-600 font-normal text-sm'>email@example.com</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePopup
