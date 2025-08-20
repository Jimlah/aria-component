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
    <div className="w-full min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <div className="text-center space-y-2">
          <Heading className="text-4xl font-bold">React Aria Components Showcase</Heading>
          <Text className="text-lg">Comprehensive collection of styled React Aria Components with multiple use cases</Text>
        </div>

        <Separator />

        <div className="space-y-6">
          <Heading className="text-2xl">Form Controls - Multiple Use Cases</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading className="text-lg">Text Inputs</Heading>
              <TextField className="w-full">
                <Label>Email Address</Label>
                <Input placeholder="Enter your email" />
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

              <TextField isDisabled className="w-full">
                <Label>Disabled Field</Label>
                <Input value="This field is disabled" />
              </TextField>

              <TextField isInvalid className="w-full">
                <Label>Invalid Field</Label>
                <Input value="invalid@email" />
              </TextField>
            </div>

            <div className="space-y-4">
              <Heading className="text-lg">Selection Controls</Heading>
              <div className="space-y-3">
                <Checkbox>
                  <div className="w-4 h-4 border rounded border-gray-400 group-data-[selected=true]:bg-blue-600 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white opacity-0 group-data-[selected=true]:opacity-100" viewBox="0 0 12 10" fill="currentColor">
                      <path d="M4.5 7.5L1.5 4.5L2.5 3.5L4.5 5.5L9.5 0.5L10.5 1.5L4.5 7.5Z"/>
                    </svg>
                  </div>
                  Subscribe to newsletter
                </Checkbox>
                
                <Checkbox>
                  <div className="w-4 h-4 border rounded border-gray-400 group-data-[selected=true]:bg-green-600 group-data-[selected=true]:border-green-600 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white opacity-0 group-data-[selected=true]:opacity-100" viewBox="0 0 12 10" fill="currentColor">
                      <path d="M4.5 7.5L1.5 4.5L2.5 3.5L4.5 5.5L9.5 0.5L10.5 1.5L4.5 7.5Z"/>
                    </svg>
                  </div>
                  Marketing emails
                </Checkbox>
                
                <Switch>
                  <div className="w-8 h-4 bg-gray-300 rounded-full group-data-[selected=true]:bg-blue-600 transition-colors">
                    <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 translate-y-0.5 group-data-[selected=true]:translate-x-4 transition-transform"/>
                  </div>
                  Enable notifications
                </Switch>

                <Switch>
                  <div className="w-8 h-4 bg-gray-300 rounded-full group-data-[selected=true]:bg-green-600 transition-colors">
                    <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 translate-y-0.5 group-data-[selected=true]:translate-x-4 transition-transform"/>
                  </div>
                  Dark mode
                </Switch>

                <Switch isDisabled>
                  <div className="w-8 h-4 bg-gray-200 rounded-full opacity-50">
                    <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 translate-y-0.5"/>
                  </div>
                  Disabled switch
                </Switch>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading className="text-lg">Radio Groups</Heading>
              <div className="space-y-4">
                <Text className="font-medium">Theme Preference</Text>
                <RadioGroup className="space-y-2" defaultValue="light">
                  <Radio value="light">
                    <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                    </div>
                    Light theme
                  </Radio>
                  <Radio value="dark">
                    <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                    </div>
                    Dark theme
                  </Radio>
                  <Radio value="system">
                    <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                    </div>
                    System default
                  </Radio>
                </RadioGroup>

                <Text className="font-medium">Size Options</Text>
                <RadioGroup className="flex gap-6" defaultValue="medium">
                  <Radio value="small">
                    <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-green-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                    </div>
                    Small
                  </Radio>
                  <Radio value="medium">
                    <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-green-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                    </div>
                    Medium
                  </Radio>
                  <Radio value="large">
                    <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-green-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                    </div>
                    Large
                  </Radio>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-4">
              <Heading className="text-lg">Sliders</Heading>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Text className="font-medium">Volume (50%)</Text>
                  <Slider defaultValue={[50]} className="w-full">
                    <SliderTrack className="h-2 bg-gray-200 rounded-full relative">
                      <div className="absolute h-full bg-blue-600 rounded-full" style={{width: "50%"}}/>
                    </SliderTrack>
                    <SliderThumb className="w-5 h-5 bg-white border-2 border-blue-600 rounded-full shadow-md" />
                  </Slider>
                </div>

                <div className="space-y-2">
                  <Text className="font-medium">Brightness (75%)</Text>
                  <Slider defaultValue={[75]} className="w-full">
                    <SliderTrack className="h-2 bg-gray-200 rounded-full relative">
                      <div className="absolute h-full bg-yellow-500 rounded-full" style={{width: "75%"}}/>
                    </SliderTrack>
                    <SliderThumb className="w-5 h-5 bg-white border-2 border-yellow-500 rounded-full shadow-md" />
                  </Slider>
                </div>

                <div className="space-y-2">
                  <Text className="font-medium">Temperature (30%)</Text>
                  <Slider defaultValue={[30]} className="w-full">
                    <SliderTrack className="h-2 bg-gray-200 rounded-full relative">
                      <div className="absolute h-full bg-red-500 rounded-full" style={{width: "30%"}}/>
                    </SliderTrack>
                    <SliderThumb className="w-5 h-5 bg-white border-2 border-red-500 rounded-full shadow-md" />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-6">
          <Heading className="text-2xl">Selection Components - Multiple Examples</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Heading className="text-lg">Select Dropdowns</Heading>
              <Select className="w-full">
                <Label>Favorite Animal</Label>
                <SelectButton className="w-full flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 bg-white hover:bg-gray-50">
                  <SelectValue />
                  <span data-slot="icon" className="px-2 inline-block">
                    <ChevronDown className="size-4 aspect-square" />
                  </span>
                </SelectButton>
                <OptionList className="w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
                  <Option>🐨 Aardvark</Option>
                  <Option>🐱 Cat</Option>
                  <Option>🐶 Dog</Option>
                  <Option>🦘 Kangaroo</Option>
                  <Option>🐼 Panda</Option>
                  <Option>🐍 Snake</Option>
                </OptionList>
              </Select>

              <Select className="w-full">
                <Label>Country</Label>
                <SelectButton className="w-full flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 bg-white hover:bg-gray-50">
                  <SelectValue />
                  <span data-slot="icon" className="px-2 inline-block">
                    <ChevronDown className="size-4 aspect-square" />
                  </span>
                </SelectButton>
                <OptionList className="w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1 max-h-60 overflow-auto">
                  <Option>🇺🇸 United States</Option>
                  <Option>🇨🇦 Canada</Option>
                  <Option>🇬🇧 United Kingdom</Option>
                  <Option>🇩🇪 Germany</Option>
                  <Option>🇫🇷 France</Option>
                  <Option>🇯🇵 Japan</Option>
                </OptionList>
              </Select>

              <Select className="w-full" isDisabled>
                <Label>Disabled Select</Label>
                <SelectButton className="w-full flex justify-between items-center border border-gray-200 rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed opacity-50">
                  <SelectValue />
                  <span data-slot="icon" className="px-2 inline-block">
                    <ChevronDown className="size-4 aspect-square text-gray-400" />
                  </span>
                </SelectButton>
              </Select>
            </div>

            <div className="space-y-4">
              <Heading className="text-lg">Search Fields</Heading>
              <SearchField className="w-full">
                <Label>Basic Search</Label>
                <Group>
                  <span className="px-2 inline-block" data-slot="icon">
                    <Search className="size-4 aspect-square text-gray-400" />
                  </span>
                  <Input placeholder="Search anything..." />
                </Group>
              </SearchField>

              <SearchField className="w-full">
                <Label>Product Search</Label>
                <Group>
                  <span className="px-2 inline-block" data-slot="icon">
                    <Search className="size-4 aspect-square text-blue-500" />
                  </span>
                  <Input placeholder="Search products..." />
                </Group>
              </SearchField>

              <SearchField className="w-full">
                <Label>User Search</Label>
                <Group>
                  <span className="px-2 inline-block" data-slot="icon">
                    <Search className="size-4 aspect-square text-green-500" />
                  </span>
                  <Input placeholder="Search users..." />
                </Group>
              </SearchField>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-lg border">
          <Heading className="text-2xl mb-4">Component Library Features</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <Text className="text-2xl font-bold text-blue-600">83+</Text>
              <Text className="text-sm">Total Components</Text>
            </div>
            <div>
              <Text className="text-2xl font-bold text-green-600">100%</Text>
              <Text className="text-sm">Accessible</Text>
            </div>
            <div>
              <Text className="text-2xl font-bold text-purple-600">Multiple</Text>
              <Text className="text-sm">Use Cases</Text>
            </div>
            <div>
              <Text className="text-2xl font-bold text-red-600">TypeScript</Text>
              <Text className="text-sm">Ready</Text>
            </div>
          </div>
          <Text className="text-gray-600 max-w-2xl mx-auto">
            This showcase demonstrates comprehensive use cases for React Aria Components including different states, 
            variants, styling approaches, and practical examples. All components follow WAI-ARIA guidelines and 
            support keyboard navigation, screen readers, and mobile devices.
          </Text>
        </div>

      </div>
    </div>
  );
}
