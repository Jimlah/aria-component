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
import Tag from "@/components/ui/Tag";
import TextArea from "@/components/ui/TextArea";
import NumberField from "@/components/ui/NumberField";
import { ChevronDown, Eye, EyeClosed, Search, Save, Trash2, Plus, Download, Settings, User } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <Heading className="text-4xl font-bold text-gray-900 dark:text-white">React Aria Components Showcase</Heading>
          <Text className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive collection of accessible React Aria Components with multiple use cases
          </Text>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Tag>83+ Components</Tag>
            <Tag>Fully Accessible</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Tailwind CSS</Tag>
          </div>
        </div>

        <Separator />

        {/* Form Controls */}
        <div className="space-y-8">
          <Heading className="text-3xl font-semibold text-center">Form Controls</Heading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column */}
            <div className="space-y-8">
              <Heading className="text-2xl text-center lg:text-left">Input Components</Heading>
              
              {/* Text Fields - Multiple Use Cases */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Text Fields - Various States</Heading>
                
                <TextField className="w-full">
                  <Label>Email Address</Label>
                  <Input placeholder="Enter your email" />
                </TextField>
                
                <TextField isRequired className="w-full">
                  <Label>Full Name (Required)</Label>
                  <Input placeholder="John Doe" />
                </TextField>
                
                <TextField isDisabled className="w-full">
                  <Label>Disabled Field</Label>
                  <Input value="This field is disabled" />
                </TextField>
                
                <TextField isInvalid className="w-full">
                  <Label>Invalid Email</Label>
                  <Input value="invalid@" />
                  <Text className="text-red-500 text-sm">Please enter a valid email address</Text>
                </TextField>
              </div>

              {/* Password Field with Icon */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Password Field with Toggle Visibility</Heading>
                <TextField type="password" className="w-full">
                  <Label>Password</Label>
                  <Group>
                    <Input />
                    <Button data-slot="icon" className="px-2 group">
                      <Eye className="size-4 group-data-[type=password]:hidden group-data-[type=text]:block" />
                      <EyeClosed className="size-4 group-data-[type=password]:block group-data-[type=text]:hidden" />
                    </Button>
                  </Group>
                </TextField>
              </div>

              {/* TextArea */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">TextArea</Heading>
                <TextField className="w-full">
                  <Label>Message</Label>
                  <TextArea 
                    rows={4} 
                    placeholder="Enter your message here..."
                    className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  />
                </TextField>
              </div>

              {/* NumberField */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Number Field</Heading>
                <NumberField className="w-full" defaultValue={5} minValue={1} maxValue={10}>
                  <Label>Quantity</Label>
                  <Group>
                    <Input className="text-center" />
                    <Button data-slot="icon" className="px-3 hover:bg-gray-100">
                      <Plus className="size-4" />
                    </Button>
                  </Group>
                </NumberField>
              </div>

              {/* Selection Controls */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Selection Controls</Heading>
                
                {/* Multiple Checkboxes */}
                <div className="space-y-4">
                  <Text className="font-medium">Preferences</Text>
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
                      Marketing updates
                    </Checkbox>

                    <Checkbox>
                      <div className="w-4 h-4 border rounded border-gray-400 group-data-[selected=true]:bg-purple-600 group-data-[selected=true]:border-purple-600 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white opacity-0 group-data-[selected=true]:opacity-100" viewBox="0 0 12 10" fill="currentColor">
                          <path d="M4.5 7.5L1.5 4.5L2.5 3.5L4.5 5.5L9.5 0.5L10.5 1.5L4.5 7.5Z"/>
                        </svg>
                      </div>
                      Product announcements
                    </Checkbox>
                  </div>
                </div>
                
                {/* Multiple Switches */}
                <div className="space-y-4">
                  <Text className="font-medium">Settings</Text>
                  <div className="space-y-3">
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
                      Auto-save (Pro only)
                    </Switch>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Heading className="text-2xl text-center lg:text-left">Buttons & Advanced Controls</Heading>
              
              {/* Multiple Button Use Cases */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Button Variants</Heading>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Primary
                  </Button>
                  <Button className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
                    Secondary
                  </Button>
                  <Button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                    Outline
                  </Button>
                  <Button isDisabled className="bg-gray-200 text-gray-400 px-4 py-2 rounded cursor-not-allowed">
                    Disabled
                  </Button>
                </div>
              </div>

              {/* Icon Buttons */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Action Buttons with Icons</Heading>
                <div className="grid grid-cols-1 gap-3">
                  <Button className="bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 flex items-center gap-2 justify-center">
                    <Save className="size-4" />
                    Save Changes
                  </Button>
                  <Button className="bg-red-600 text-white px-4 py-3 rounded hover:bg-red-700 flex items-center gap-2 justify-center">
                    <Trash2 className="size-4" />
                    Delete Item
                  </Button>
                  <Button className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 flex items-center gap-2 justify-center">
                    <Download className="size-4" />
                    Download Report
                  </Button>
                </div>
              </div>

              {/* Radio Groups - Multiple Use Cases */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Radio Groups</Heading>
                
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
                </div>

                <div className="space-y-4">
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

              {/* Enhanced Sliders */}
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Sliders</Heading>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Text className="font-medium">Volume (50%)</Text>
                    <Slider defaultValue={[50]} className="w-full">
                      <SliderTrack className="h-3 bg-gray-200 rounded-full relative">
                        <div className="absolute h-full bg-blue-600 rounded-full" style={{width: "50%"}}/>
                      </SliderTrack>
                      <SliderThumb className="w-6 h-6 bg-white border-2 border-blue-600 rounded-full shadow-lg" />
                    </Slider>
                  </div>

                  <div className="space-y-2">
                    <Text className="font-medium">Brightness (75%)</Text>
                    <Slider defaultValue={[75]} className="w-full">
                      <SliderTrack className="h-3 bg-gray-200 rounded-full relative">
                        <div className="absolute h-full bg-yellow-500 rounded-full" style={{width: "75%"}}/>
                      </SliderTrack>
                      <SliderThumb className="w-6 h-6 bg-white border-2 border-yellow-500 rounded-full shadow-lg" />
                    </Slider>
                  </div>

                  <div className="space-y-2">
                    <Text className="font-medium">Temperature (65%)</Text>
                    <Slider defaultValue={[65]} className="w-full">
                      <SliderTrack className="h-3 bg-gray-200 rounded-full relative">
                        <div className="absolute h-full bg-red-500 rounded-full" style={{width: "65%"}}/>
                      </SliderTrack>
                      <SliderThumb className="w-6 h-6 bg-white border-2 border-red-500 rounded-full shadow-lg" />
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Selection Components */}
        <div className="space-y-8">
          <Heading className="text-3xl font-semibold text-center">Selection Components</Heading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Select Components */}
            <div className="space-y-8">
              <Heading className="text-2xl text-center lg:text-left">Select & Dropdown</Heading>
              
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Select Dropdown - Multiple Use Cases</Heading>
                
                <Select className="w-full">
                  <Label>Favorite Animal</Label>
                  <SelectButton className="w-full flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 bg-white hover:bg-gray-50">
                    <SelectValue />
                    <ChevronDown className="size-4" data-slot="icon" />
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
                    <ChevronDown className="size-4" data-slot="icon" />
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
                    <ChevronDown className="size-4 text-gray-400" data-slot="icon" />
                  </SelectButton>
                </Select>
              </div>
            </div>

            {/* Search Components */}
            <div className="space-y-8">
              <Heading className="text-2xl text-center lg:text-left">Search Components</Heading>
              
              <div className="space-y-6">
                <Heading className="text-lg font-semibold">Search Fields - Multiple Variants</Heading>
                
                <SearchField className="w-full">
                  <Label>Basic Search</Label>
                  <Group>
                    <Search className="size-4 ml-3 text-gray-400" data-slot="icon" />
                    <Input placeholder="Search anything..." className="pl-10" />
                  </Group>
                </SearchField>

                <SearchField className="w-full">
                  <Label>Product Search</Label>
                  <Group>
                    <Search className="size-4 ml-3 text-blue-500" data-slot="icon" />
                    <Input placeholder="Search products..." className="pl-10" />
                    <Button data-slot="icon" className="px-3 text-gray-400 hover:text-gray-600">
                      <Settings className="size-4" />
                    </Button>
                  </Group>
                </SearchField>

                <SearchField className="w-full">
                  <Label>User Search</Label>
                  <Group>
                    <User className="size-4 ml-3 text-green-500" data-slot="icon" />
                    <Input placeholder="Search users..." className="pl-10" />
                  </Group>
                </SearchField>
              </div>
            </div>
          </div>
        </div>

        {/* Status and Info Section */}
        <div className="space-y-8">
          <Separator />
          <div className="text-center">
            <Heading className="text-2xl font-semibold mb-6">Component Library Overview</Heading>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
                <Heading className="text-xl mb-2 text-blue-600">20+</Heading>
                <Text className="font-medium">Form Components</Text>
                <Text className="text-sm text-gray-600">Input, Button, Select, etc.</Text>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
                <Heading className="text-xl mb-2 text-green-600">15+</Heading>
                <Text className="font-medium">Navigation</Text>
                <Text className="text-sm text-gray-600">Tabs, Menu, Breadcrumbs</Text>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
                <Heading className="text-xl mb-2 text-purple-600">25+</Heading>
                <Text className="font-medium">Data Display</Text>
                <Text className="text-sm text-gray-600">Table, GridList, Charts</Text>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border shadow-sm">
                <Heading className="text-xl mb-2 text-red-600">23+</Heading>
                <Text className="font-medium">Advanced</Text>
                <Text className="text-sm text-gray-600">Calendar, Color, Layout</Text>
              </div>
            </div>
            <div className="mt-8 max-w-3xl mx-auto">
              <Text className="text-gray-600">
                This showcase demonstrates comprehensive use cases for React Aria Components including different states, 
                variants, styling approaches, and practical examples. All components are fully accessible, 
                follow WAI-ARIA guidelines, and support keyboard navigation, screen readers, and mobile devices.
              </Text>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
