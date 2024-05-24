import Profile from './Profile'

function Card({ profileImage, name, role, review }: { profileImage: string, name: string, role: string, review: string }) {
    return (
        <div className='flex flex-col bg-slate-100 dark:bg-gray-800 p-6 rounded-lg items-start'>
            <Profile profileImage={profileImage} name={name} role={role} />
            <p className='dark:text-gray-300 mt-6'>{review}</p>
        </div>
    )
}

export default Card