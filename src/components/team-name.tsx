import useTeamName from "@/hooks/useTeamName";
import React, { useState, useRef, useEffect } from "react";
import { RiPencilFill } from "react-icons/ri";

interface TeamNameProps {
  title: string;
}

export default function TeamName({ title }: TeamNameProps) {
  const { teamName, setTeamName } = useTeamName();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handelClick = () => {
    setIsEditing(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };
  const handelChange = (event: any) => {
    setTeamName(event.target.value);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsEditing(false);
    }
  };
  useEffect(() => {
    if (isEditing) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isEditing]);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setTeamName("");
    }
    if (event.key === "Enter") {
      inputRef.current?.blur();
      setIsEditing(false);
    }
  };

  return (
    <div>
      <h3 className=" text-Appprimary text-xs">{title}</h3>

      <div
        className="text-white flex items-center gap-1 text-base"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          ref={inputRef}
          className="bg-Appbackground w-min"
          value={teamName}
          disabled={!isEditing}
          onChange={handelChange}
          onKeyDown={handleKeyPress}
        />
        <button
          className={`${
            !isEditing && (teamName === "My Team" || isHovered)
              ? "visible"
              : "hidden"
          } `}
          onClick={handelClick}
        >
          <RiPencilFill />
        </button>
      </div>
    </div>
  );
}
