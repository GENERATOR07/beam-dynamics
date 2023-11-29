import { useState, forwardRef, Ref, useImperativeHandle, useMemo } from "react";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useTableActions } from "@/hooks/useTableActions";

export interface PlayerFormData {
  id: number;
  playerName: string | undefined;
  height: string | undefined;
  jerseyNumber: string | undefined;
  nationality: string | undefined;
  position: string | undefined;
  starter: string | undefined;
  weight: string | undefined;
}
interface PlayerEditFormProp {
  data: PlayerFormData;
}

export interface FormRef {
  submit: () => void;
}
function PlayerEditForm({ data }: PlayerEditFormProp, ref: Ref<FormRef>) {
  const [formData, setFormData] = useState<PlayerFormData | undefined>(data);
  const { updatePlayer } = useTableActions();
  const handleChange = (e: any) => {
    const key = e.target.id;
    const value = e.target.value;
    setFormData({ ...(formData as PlayerFormData), [key]: value });
  };

  const submit = () => {
    updatePlayer(formData as PlayerFormData);
  };

  useImperativeHandle(ref, () => ({ submit }));

  return (
    <div className="text-white">
      <div>
        <Label htmlFor="playerName">Player Name</Label>
        <Input
          id="playerName"
          value={formData?.playerName}
          onChange={handleChange}
          className="bg-Appbackground"
        />
      </div>
      <div>
        <Label htmlFor="jerseyNumber">Jersey Number</Label>
        <Input
          id="jerseyNumber"
          value={formData?.jerseyNumber}
          onChange={handleChange}
          className="bg-Appbackground"
        />
      </div>

      <div>
        <Label htmlFor="height">Height</Label>
        <Input
          type="text"
          id="height"
          value={formData?.height}
          onChange={handleChange}
          className="bg-Appbackground"
        />
      </div>
      <div>
        <Label htmlFor="weight">Weight</Label>
        <Input
          type="text"
          id="weight"
          value={formData?.weight}
          onChange={handleChange}
          className="bg-Appbackground"
        />
      </div>
      <div>
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          type="text"
          id="nationality"
          value={formData?.nationality}
          onChange={handleChange}
          className="bg-Appbackground"
        />
      </div>
      {/* <div>
        <Label>Nationality</Label>
        <Select
          onValueChange={(v) =>
            setFormData({ ...(formData as PlayerFormData), nationality: v })
          }
          value={formData?.nationality}
          name="nationality"
        >
          <SelectTrigger className="w-[180px]  bg-Appbackground text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-Appbackground text-white">
            {countryOptions.map((data) => (
              <SelectItem
                value={`${data.label[0] + data.label.slice(1).toLowerCase()}`}
                key={data.value}
              >
                {data.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div> */}
      <div>
        <Label>Position</Label>
        <Select
          onValueChange={(v) =>
            setFormData({ ...(formData as PlayerFormData), position: v })
          }
          value={formData?.position}
          name="position"
        >
          <SelectTrigger className=" bg-Appbackground text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-Appbackground">
            <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
            <SelectItem value="Defender">Defender</SelectItem>
            <SelectItem value="MidFielder">MidFielder</SelectItem>
            <SelectItem value="Forward">Forward</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="starter">Starter</Label>
        <RadioGroup
          defaultValue="No "
          id="starter"
          onValueChange={(v) => {
            setFormData({ ...(formData as PlayerFormData), starter: v });
          }}
          className="flex gap-1"
          value={formData?.starter}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="No" id="No" className="bg-Appprimary" />
            <Label htmlFor="No">No</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Yes" id="Yes" className="bg-Appprimary" />
            <Label htmlFor="No">Yes</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
export default forwardRef(PlayerEditForm);
