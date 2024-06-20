import { Avatar } from 'flowbite-react'
import React from 'react'

export default function ChatHeader() {
    const fakeData = {
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name: 'alex',
        latestMsg: "hey, let's go outside"
    }
    return (
        <>
            <div className="flex my-3 mx-3 cursor-pointer">
                <Avatar img={fakeData.img as string} rounded />
                <div className="ml-2">
                    <div className="flex">
                        <h3 className="capitalize mt-1">{fakeData.name}</h3>
                    </div>
                    <div className="flex w-100">
                        <div className="text-xs text-gray-400 mt-1">{fakeData.latestMsg}</div>

                        <div className='w-5 h-5 rounded-xl bg-red-600 text-white text-sm text-center ml-4 mb-2'>
                            2
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
