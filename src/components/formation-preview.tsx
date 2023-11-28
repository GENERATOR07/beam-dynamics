import React from "react";
import field from "public/Field.png";
export default function FormationPreview() {
  return (
    <div
      style={{ backgroundImage: `url(${field.src})` }}
      className="w-2/3 bg-contain bg-no-repeat "
    >
      formation-preview
    </div>
  );
}
