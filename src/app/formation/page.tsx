"use client";
import FormationErrorAlert from "@/components/formation-error-alert";

import FormationPreview from "@/components/formation-overview";
import PlayerDetails from "@/components/player-details";
import TeamName from "@/components/team-name";
import useFormation from "@/hooks/useFormation";
import React from "react";

export default function FormationPage() {
  const { formation, err } = useFormation();

  return (
    <div className="bg-Appbackground  text-Appprimary text-primary w-full relative ">
      <div className="absolute left-14 top-7">
        <TeamName title="Formation Preview" />
      </div>
      <div className="bg-gray-700  h-2/3 w-11/12 rounded-[8px] mx-auto mt-20  text-white flex justify-around py-4 relative ">
        {err ? (
          <div className="absolute top-32">
            <FormationErrorAlert error={err} />
          </div>
        ) : null}
        <FormationPreview formation={formation} />
        <PlayerDetails />
      </div>
    </div>
  );
}
