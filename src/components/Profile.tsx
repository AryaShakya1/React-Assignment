import React from 'react'

function Profile({ profileImage, name, role }: { profileImage: string, name: string, role: string }) {
    return (
        <div className="flex items-center justify-center">
            <img
                src={profileImage}
                alt={`${name}'s profile`}
                className="w-14 h-14 rounded-full mr-4"
            />
            <div>
                <h2 className="text-lg font-semibold text-white">{name}</h2>
                <p className="text-gray-400">{role}</p>
            </div>
        </div>
    )
}

export default Profile