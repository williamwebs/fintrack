"use client";
import Image from "next/image";
import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  onClick?: () => void;
}

const Profile = ({ imageUrl, name, onClick }: Props) => {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={`${name}'s profile`}
        width={40}
        height={40}
        className="rounded-full object-contain"
      />
    </div>
  );
};

export default Profile;
