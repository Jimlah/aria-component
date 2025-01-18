import Button from "@/components/ui/Button";
import Group from "@/components/ui/Group";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import SearchField from "@/components/ui/SearchField";
import TextField from "@/components/ui/TextField";
import { Eye, EyeClosed, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col justify-center gap-6">
      <TextField className="w-[404px]">
        <Label>Email</Label>
        <Input />
      </TextField>
      <TextField isRequired={true} type="password" className="w-[404px]">
        <Label>Password</Label>
        <Group>
          <Input className="peer" />
          <Button
            data-slot="icon"
            slot="password"
            className="group outline-none px-2"
          >
            <Eye className="size-4 aspect-square group-data-[type=password]:hidden group-data-[type=text]:block" />
            <EyeClosed className="size-4 aspect-square group-data-[type=password]:block group-data-[type=text]:hidden" />
          </Button>
        </Group>
      </TextField>
      <TextField isInvalid={true} type="password" className="w-[404px]">
        <Label>Password</Label>
        <Group>
          <Input />
          <Button data-slot="icon" slot="password">
            Change
          </Button>
        </Group>
      </TextField>
      <TextField isDisabled={true} className="w-[404px]">
        <Label>Disabled</Label>
        <Input placeholder="Can't touch this" />
      </TextField>
      <SearchField className="w-[404px]">
        <Label>Search</Label>
        <Group>
          <span className="px-2 inline-block" data-slot="icon">
            <Search className="size-4 aspect-square" />
          </span>
          <Input />
        </Group>
      </SearchField>
    </div>
  );
}
