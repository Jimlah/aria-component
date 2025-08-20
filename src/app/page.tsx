import Button from "@/components/ui/Button";
import Group from "@/components/ui/Group";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import Option from "@/components/ui/Option";
import OptionList from "@/components/ui/OptionList";
import SearchField from "@/components/ui/SearchField";
import Select from "@/components/ui/Select";
import SelectButton from "@/components/ui/SelectButton";
import SelectValue from "@/components/ui/SelectValue";
import TextField from "@/components/ui/TextField";
import Checkbox from "@/components/ui/Checkbox";
import Switch from "@/components/ui/Switch";
import Radio from "@/components/ui/Radio";
import RadioGroup from "@/components/ui/RadioGroup";
import Slider from "@/components/ui/Slider";
import SliderTrack from "@/components/ui/SliderTrack";
import SliderThumb from "@/components/ui/SliderThumb";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Separator from "@/components/ui/Separator";
import { ChevronDown, Eye, EyeClosed, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col justify-center gap-6 p-8">
      <div className="max-w-2xl w-full space-y-8">
        
        <div className="text-center space-y-2">
          <Heading className="text-3xl">React Aria Components Demo</Heading>
          <Text>Comprehensive collection of styled React Aria Components</Text>
        </div>

        <Separator />

        <div className="space-y-4">
          <Heading className="text-xl">Form Controls</Heading>
          
          <TextField className="w-full">
            <Label>Email</Label>
            <Input />
          </TextField>
          
          <TextField isRequired={true} type="password" className="w-full">
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

          <div className="space-y-2">
            <Checkbox>
              <div className="w-4 h-4 border rounded border-gray-400 group-data-[selected=true]:bg-blue-600 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                <svg className="w-3 h-3 text-white opacity-0 group-data-[selected=true]:opacity-100" viewBox="0 0 12 10" fill="currentColor">
                  <path d="M4.5 7.5L1.5 4.5L2.5 3.5L4.5 5.5L9.5 0.5L10.5 1.5L4.5 7.5Z"/>
                </svg>
              </div>
              Subscribe to newsletter
            </Checkbox>
            
            <Switch>
              <div className="w-8 h-4 bg-gray-300 rounded-full group-data-[selected=true]:bg-blue-600 transition-colors">
                <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 translate-y-0.5 group-data-[selected=true]:translate-x-4 transition-transform"/>
              </div>
              Enable notifications
            </Switch>
          </div>

          <RadioGroup className="space-y-2">
            <Radio value="light">
              <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
              </div>
              Light
            </Radio>
            <Radio value="dark">
              <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
              </div>
              Dark
            </Radio>
          </RadioGroup>

          <div className="space-y-2">
            <Text className="font-medium">Volume</Text>
            <Slider defaultValue={[50]} className="w-full">
              <SliderTrack>
                <div className="absolute h-full bg-blue-600 rounded-full" style={{width: "50%"}}/>
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <Heading className="text-xl">Selection</Heading>
          
          <Select className="w-full">
            <Label>Favorite Animal</Label>
            <SelectButton>
              <SelectValue />
              <span data-slot="icon" className="px-2 inline-block">
                <ChevronDown className="size-4 aspect-square" />
              </span>
            </SelectButton>
            <OptionList>
              <Option>Aardvark</Option>
              <Option>Cat</Option>
              <Option>Dog</Option>
              <Option>Kangaroo</Option>
              <Option>Panda</Option>
              <Option>Snake</Option>
            </OptionList>
          </Select>

          <SearchField className="w-full">
            <Label>Search</Label>
            <Group>
              <span className="px-2 inline-block" data-slot="icon">
                <Search className="size-4 aspect-square" />
              </span>
              <Input />
            </Group>
          </SearchField>
        </div>

      </div>
    </div>
  );
}
