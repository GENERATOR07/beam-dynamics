import {
  useState,
  forwardRef,
  Ref,
  useImperativeHandle,
  useEffect,
} from "react";
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
import useNationalities from "@/hooks/useNationalities";

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
  const { nationalities } = useNationalities();

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
    <div className="text-white text-sm flex  flex-col gap-6">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Label htmlFor="playerName">Player Name</Label>
          <Input
            id="playerName"
            value={formData?.playerName}
            onChange={handleChange}
            className="bg-Appbackground"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="jerseyNumber">Jersey Number</Label>
          <Input
            id="jerseyNumber"
            value={formData?.jerseyNumber}
            onChange={handleChange}
            className="bg-Appbackground"
          />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <Label htmlFor="height">Height</Label>
          <Input
            type="text"
            id="height"
            value={formData?.height}
            onChange={handleChange}
            className="bg-Appbackground"
          />
        </div>
        <div className="flex flex-col gap-4">
          <Label htmlFor="weight">Weight</Label>
          <Input
            type="text"
            id="weight"
            value={formData?.weight}
            onChange={handleChange}
            className="bg-Appbackground"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Label>Nationality</Label>
        <Select
          onValueChange={(v) =>
            setFormData({ ...(formData as PlayerFormData), nationality: v })
          }
          value={formData?.nationality}
          name="nationality"
        >
          <SelectTrigger className=" bg-Appbackground text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-Appbackground text-white">
            {nationalities.map((nationality, i) => (
              <SelectItem value={nationality} key={nationality}>
                {nationality}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
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
          <SelectContent className="bg-Appbackground text-white">
            <SelectItem value="Goalkeeper">Goalkeeper</SelectItem>
            <SelectItem value="Defender">Defender</SelectItem>
            <SelectItem value="Midfielder">MidFielder</SelectItem>
            <SelectItem value="Forward">Forward</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-4">
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
