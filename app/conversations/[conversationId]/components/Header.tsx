'use client';

import { HiChevronLeft } from 'react-icons/hi'
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useMemo, useState } from "react";
import Link from "next/link";
import { Conversation, User } from "@prisma/client";

import useOtherUser from "@/app/hooks/useOtherUser";

interface HeaderProps {
    conversation: Conversation & {
      users: User[]
    }
  }

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otheruser = useOtherUser(conversation);

    const statusText = useMemo(() => {
        if(conversation.isGroup){
            return `${conversation.users.length} members`;
        }

        return 'Active';
    },[conversation])

    return(
        <div>
            Header!
        </div>
    )
};

export default Header;