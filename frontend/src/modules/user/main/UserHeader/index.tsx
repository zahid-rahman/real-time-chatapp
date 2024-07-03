'use client';
import { Avatar } from 'flowbite-react'
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

export default function UserHeader() {
    const { data } = useSession();
    const [isOnline, setIsOnline] = useState<boolean>(true);
    return (
        <>
            <div className="flex mx-3 my-3">
                <Avatar img={data?.user?.image as string}></Avatar>
                <div className="ml-auto">
                    <div className="flex">
                        <h3>{data?.user?.name}</h3>
                        {isOnline ? <div className='h-3 w-3 bg-green-500 rounded-xl mt-1.5 ml-2'></div> : <div className='h-3 w-3 bg-red-500 rounded-xl mt-1.5 ml-2'></div>}

                    </div>

                    <span className="text-xs text-gray-400">{data?.user?.email}</span>
                </div>
            </div>
        </>
    )
}
