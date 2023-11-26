import React, { useState, useRef, useEffect } from "react";
import { RiPencilFill } from "react-icons/ri";
export default function TeamName() {
  const [teamName, setTeamName] = useState<string>("My Team");
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
  const handelHover = () => {};
  return (
    <div>
      <h3 className="text-xs">Roster Details</h3>

      <div
        className="text-white flex items-center gap-1 text-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <input
          ref={inputRef}
          className="bg-Appbackground w-min"
          value={teamName}
          disabled={!isEditing}
          onChange={handelChange}
          onMouseOver={handelHover}
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
