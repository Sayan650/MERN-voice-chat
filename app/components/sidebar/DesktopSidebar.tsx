'use client'

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import DesktopItems from "./DesktopItems";
import { User } from "@prisma/client";
import Avatar from "@/app/Avatar";

interface DesktopSidebarProps {
    currentUser: User;
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
    currentUser,
}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);
    console.log(currentUser);

    return(

        <div className="lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto bg-white border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between sm:bottom-0 sm:z-40 sm:items-center sm:w-full">
            <nav className="mt-4 flex flex-col justify-between">
                <ul role="list" className="flex flex-col items-center space-y-1">
                    {routes.map((item) => (
                        <DesktopItems
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            onClick={item.onClick}
                        />
                    ))}

                </ul>
            </nav>
            <nav
                className="mt-4 flex flex-col items-center space-y-1 justify-between"
            >
                <div onClick={() => setIsOpen(true)}
                    className="cursor-pointer hover:opacity-75 transition"
                >
                    <Avatar user={currentUser} />
                </div>

            </nav>

        </div>
    )
}

export default DesktopSidebar;