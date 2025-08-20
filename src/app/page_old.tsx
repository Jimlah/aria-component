// Form Components
import Button from "@/components/ui/Button";
import Group from "@/components/ui/Group";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import TextField from "@/components/ui/TextField";
import Checkbox from "@/components/ui/Checkbox";
import Switch from "@/components/ui/Switch";
import Radio from "@/components/ui/Radio";
import RadioGroup from "@/components/ui/RadioGroup";
import Slider from "@/components/ui/Slider";
import SliderTrack from "@/components/ui/SliderTrack";
import SliderThumb from "@/components/ui/SliderThumb";
import SliderOutput from "@/components/ui/SliderOutput";
import NumberField from "@/components/ui/NumberField";
import TextArea from "@/components/ui/TextArea";
import ToggleButton from "@/components/ui/ToggleButton";
import ToggleButtonGroup from "@/components/ui/ToggleButtonGroup";
import SearchField from "@/components/ui/SearchField";
import FileTrigger from "@/components/ui/FileTrigger";
import FieldError from "@/components/ui/FieldError";

// Selection & Navigation
import Select from "@/components/ui/Select";
import SelectButton from "@/components/ui/SelectButton";
import SelectValue from "@/components/ui/SelectValue";
import Option from "@/components/ui/Option";
import OptionList from "@/components/ui/OptionList";
import ComboBox from "@/components/ui/ComboBox";
import ListBox from "@/components/ui/ListBox";
import ListBoxItem from "@/components/ui/ListBoxItem";
import Tabs from "@/components/ui/Tabs";
import TabList from "@/components/ui/TabList";
import Tab from "@/components/ui/Tab";
import TabPanel from "@/components/ui/TabPanel";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Link from "@/components/ui/Link";
import Toolbar from "@/components/ui/Toolbar";

// Typography & Content
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Separator from "@/components/ui/Separator";
import Tag from "@/components/ui/Tag";

// Icons
import { 
  ChevronDown, 
  Eye, 
  Search, 
  Plus,
  Minus,
  Save,
  Trash2,
  Download,
  ThumbsUp,
  Heart,
  Share,
  Check,
  Home as HomeIcon,
  ChevronRight,
  Menu as MenuIcon,
  Edit,
  Copy,
  ExternalLink,
  Settings,
  User,
  Mail,
  Phone,
  Volume2,
  Sun, // Using Sun instead of Brightness4
  Upload
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <Heading className="text-4xl font-bold text-gray-900 dark:text-white">React Aria Components Showcase</Heading>
          <Text className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive collection of accessible React Aria Components with multiple use cases
          </Text>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Tag>83 Components</Tag>
            <Tag>Fully Accessible</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Tailwind CSS</Tag>
          </div>
        </div>

        <Separator />

        {/* Navigation with Tabs */}
        <Tabs defaultSelectedKey="forms" className="w-full">
          <TabList className="flex flex-wrap gap-2 justify-center">
            <Tab id="forms">Form Controls</Tab>
            <Tab id="selection">Selection & Navigation</Tab>
            <Tab id="layout">Layout & Overlays</Tab>
            <Tab id="data">Data Display</Tab>
            <Tab id="datetime">Date & Time</Tab>
            <Tab id="color">Color Components</Tab>
            <Tab id="interactive">Interactive Elements</Tab>
            <Tab id="content">Typography & Content</Tab>
          </TabList>

          {/* Form Controls Tab */}
          <TabPanel id="forms" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Text Inputs */}
              <div className="space-y-6">
                <Heading className="text-2xl font-semibold">Text Inputs</Heading>
                
                {/* Basic TextField */}
                <div className="space-y-4">
                  <Heading className="text-lg">TextField Variants</Heading>
                  
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
                    <Label>Invalid Field</Label>
                    <Input value="invalid@" />
                    <FieldError>Please enter a valid email address</FieldError>
                  </TextField>
                </div>

                {/* Password Field with Group */}
                <div className="space-y-2">
                  <Heading className="text-lg">Password Field with Icon</Heading>
                  <TextField type="password" className="w-full">
                    <Label>Password</Label>
                    <Group>
                      <Input />
                      <Button data-slot="icon" className="px-2">
                        <Eye className="size-4" />
                      </Button>
                    </Group>
                  </TextField>
                </div>

                {/* TextArea */}
                <div className="space-y-2">
                  <Heading className="text-lg">TextArea</Heading>
                  <TextField className="w-full">
                    <Label>Message</Label>
                    <TextArea rows={4} placeholder="Enter your message here..." />
                  </TextField>
                </div>

                {/* SearchField */}
                <div className="space-y-2">
                  <Heading className="text-lg">SearchField</Heading>
                  <SearchField className="w-full">
                    <Label>Search Products</Label>
                    <Group>
                      <Search className="size-4 ml-2" data-slot="icon" />
                      <Input placeholder="Type to search..." />
                    </Group>
                  </SearchField>
                </div>

                {/* NumberField */}
                <div className="space-y-2">
                  <Heading className="text-lg">NumberField</Heading>
                  <NumberField className="w-full" defaultValue={42} minValue={0} maxValue={100}>
                    <Label>Quantity</Label>
                    <Group>
                      <Input />
                      <Button data-slot="icon" className="px-2">
                        <Plus className="size-4" />
                      </Button>
                    </Group>
                  </NumberField>
                </div>
              </div>

              {/* Buttons and Controls */}
              <div className="space-y-6">
                <Heading className="text-2xl font-semibold">Buttons & Controls</Heading>
                
                {/* Button Variants */}
                <div className="space-y-4">
                  <Heading className="text-lg">Button Variants</Heading>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      Primary
                    </Button>
                    <Button className="bg-gray-200 text-gray-900 px-4 py-2 rounded hover:bg-gray-300">
                      Secondary  
                    </Button>
                    <Button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                      Outline
                    </Button>
                    <Button isDisabled className="bg-gray-200 text-gray-400 px-4 py-2 rounded cursor-not-allowed">
                      Disabled
                    </Button>
                  </div>
                </div>

                {/* Button with Icons */}
                <div className="space-y-4">
                  <Heading className="text-lg">Buttons with Icons</Heading>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center gap-2">
                      <Save className="size-4" />
                      Save
                    </Button>
                    <Button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center gap-2">
                      <Trash2 className="size-4" />
                      Delete
                    </Button>
                    <Button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2">
                      <Download className="size-4" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Toggle Buttons */}
                <div className="space-y-4">
                  <Heading className="text-lg">Toggle Buttons</Heading>
                  <ToggleButtonGroup selectionMode="multiple" className="flex gap-2">
                    <ToggleButton className="px-3 py-2 border rounded data-[selected=true]:bg-blue-600 data-[selected=true]:text-white">
                      <ThumbsUp className="size-4" />
                    </ToggleButton>
                    <ToggleButton className="px-3 py-2 border rounded data-[selected=true]:bg-red-600 data-[selected=true]:text-white">
                      <Heart className="size-4" />
                    </ToggleButton>
                    <ToggleButton className="px-3 py-2 border rounded data-[selected=true]:bg-green-600 data-[selected=true]:text-white">
                      <Share className="size-4" />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <Heading className="text-lg">Checkboxes</Heading>
                  <div className="space-y-3">
                    <Checkbox>
                      <div className="w-4 h-4 border rounded border-gray-400 group-data-[selected=true]:bg-blue-600 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white opacity-0 group-data-[selected=true]:opacity-100" />
                      </div>
                      <Text>Subscribe to newsletter</Text>
                    </Checkbox>
                    <Checkbox>
                      <div className="w-4 h-4 border rounded border-gray-400 group-data-[selected=true]:bg-blue-600 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                        <Check className="w-3 h-3 text-white opacity-0 group-data-[selected=true]:opacity-100" />
                      </div>
                      <Text>Accept terms and conditions</Text>
                    </Checkbox>
                    <Checkbox isIndeterminate>
                      <div className="w-4 h-4 border rounded border-gray-400 group-data-[selected=true]:bg-blue-600 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                        <Minus className="w-3 h-3 text-white opacity-0 group-data-[indeterminate=true]:opacity-100" />
                        <Check className="w-3 h-3 text-white opacity-0 group-data-[selected=true]:opacity-100 group-data-[indeterminate=true]:opacity-0" />
                      </div>
                      <Text>Select all items (indeterminate)</Text>
                    </Checkbox>
                  </div>
                </div>

                {/* Switches */}
                <div className="space-y-4">
                  <Heading className="text-lg">Switches</Heading>
                  <div className="space-y-3">
                    <Switch>
                      <div className="w-8 h-4 bg-gray-300 rounded-full group-data-[selected=true]:bg-blue-600 transition-colors">
                        <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 translate-y-0.5 group-data-[selected=true]:translate-x-4 transition-transform"/>
                      </div>
                      <Text>Enable notifications</Text>
                    </Switch>
                    <Switch>
                      <div className="w-8 h-4 bg-gray-300 rounded-full group-data-[selected=true]:bg-green-600 transition-colors">
                        <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 translate-y-0.5 group-data-[selected=true]:translate-x-4 transition-transform"/>
                      </div>
                      <Text>Dark mode</Text>
                    </Switch>
                    <Switch isDisabled>
                      <div className="w-8 h-4 bg-gray-200 rounded-full opacity-50">
                        <div className="w-3 h-3 bg-white rounded-full translate-x-0.5 translate-y-0.5"/>
                      </div>
                      <Text>Disabled switch</Text>
                    </Switch>
                  </div>
                </div>

                {/* Radio Groups */}
                <div className="space-y-4">
                  <Heading className="text-lg">Radio Groups</Heading>
                  <RadioGroup className="space-y-3" defaultValue="medium">
                    <Text className="font-medium">Size</Text>
                    <Radio value="small">
                      <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                      </div>
                      <Text>Small</Text>
                    </Radio>
                    <Radio value="medium">
                      <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                      </div>
                      <Text>Medium</Text>
                    </Radio>
                    <Radio value="large">
                      <div className="w-4 h-4 border rounded-full border-gray-400 group-data-[selected=true]:border-blue-600 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-data-[selected=true]:opacity-100"/>
                      </div>
                      <Text>Large</Text>
                    </Radio>
                  </RadioGroup>
                </div>

                {/* Sliders */}
                <div className="space-y-4">
                  <Heading className="text-lg">Sliders</Heading>
                  
                  <div className="space-y-3">
                    <Text className="font-medium flex items-center gap-2">
                      <Volume2 className="size-4" />
                      Volume
                    </Text>
                    <Slider defaultValue={[75]} className="w-full">
                      <SliderTrack className="h-2 bg-gray-200 rounded-full relative">
                        <div className="absolute h-full bg-blue-600 rounded-full" style={{width: "75%"}}/>
                      </SliderTrack>
                      <SliderThumb className="w-5 h-5 bg-white border-2 border-blue-600 rounded-full" />
                      <SliderOutput />
                    </Slider>
                  </div>

                  <div className="space-y-3">
                    <Text className="font-medium flex items-center gap-2">
                      <Sun className="size-4" />
                      Brightness
                    </Text>
                    <Slider defaultValue={[50]} className="w-full">
                      <SliderTrack className="h-2 bg-gray-200 rounded-full relative">
                        <div className="absolute h-full bg-yellow-500 rounded-full" style={{width: "50%"}}/>
                      </SliderTrack>
                      <SliderThumb className="w-5 h-5 bg-white border-2 border-yellow-500 rounded-full" />
                    </Slider>
                  </div>
                </div>

                {/* File Upload */}
                <div className="space-y-4">
                  <Heading className="text-lg">File Upload</Heading>
                  <FileTrigger acceptedFileTypes={["image/*"]}>
                    <Button className="border-2 border-dashed border-gray-300 px-6 py-4 rounded-lg hover:border-blue-400 flex items-center gap-2">
                      <Upload className="size-5" />
                      Upload Images
                    </Button>
                  </FileTrigger>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Selection & Navigation Tab */}
          <TabPanel id="selection" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Select Components */}
              <div className="space-y-6">
                <Heading className="text-2xl font-semibold">Select Components</Heading>
                
                {/* Basic Select */}
                <div className="space-y-4">
                  <Heading className="text-lg">Select Dropdown</Heading>
                  <Select className="w-full" placeholder="Select a country...">
                    <Label>Choose Country</Label>
                    <SelectButton className="w-full flex justify-between items-center border border-gray-300 rounded px-3 py-2">
                      <SelectValue />
                      <ChevronDown className="size-4" data-slot="icon" />
                    </SelectButton>
                    <OptionList className="w-full bg-white border border-gray-300 rounded shadow-lg mt-1 max-h-60 overflow-auto">
                      <Option id="us">United States</Option>
                      <Option id="ca">Canada</Option>
                      <Option id="uk">United Kingdom</Option>
                      <Option id="de">Germany</Option>
                      <Option id="fr">France</Option>
                      <Option id="jp">Japan</Option>
                      <Option id="au">Australia</Option>
                    </OptionList>
                  </Select>
                </div>

                {/* ComboBox */}
                <div className="space-y-4">
                  <Heading className="text-lg">ComboBox (Autocomplete)</Heading>
                  <ComboBox className="w-full">
                    <Label>Search Cities</Label>
                    <Group>
                      <Input placeholder="Type to search cities..." />
                      <Button data-slot="icon" className="px-2">
                        <ChevronDown className="size-4" />
                      </Button>
                    </Group>
                    <OptionList>
                      <Option id="ny">New York</Option>
                      <Option id="london">London</Option>
                      <Option id="tokyo">Tokyo</Option>
                      <Option id="paris">Paris</Option>
                      <Option id="sydney">Sydney</Option>
                    </OptionList>
                  </ComboBox>
                </div>

                {/* ListBox */}
                <div className="space-y-4">
                  <Heading className="text-lg">ListBox (Multi-select)</Heading>
                  <ListBox selectionMode="multiple" className="border border-gray-300 rounded p-2 max-h-40 overflow-auto">
                    <ListBoxItem id="react">React</ListBoxItem>
                    <ListBoxItem id="vue">Vue</ListBoxItem>
                    <ListBoxItem id="angular">Angular</ListBoxItem>
                    <ListBoxItem id="svelte">Svelte</ListBoxItem>
                    <ListBoxItem id="nextjs">Next.js</ListBoxItem>
                    <ListBoxItem id="nuxtjs">Nuxt.js</ListBoxItem>
                  </ListBox>
                </div>
              </div>

              {/* Navigation Components */}
              <div className="space-y-6">
                <Heading className="text-2xl font-semibold">Navigation</Heading>
                
                {/* Breadcrumbs */}
                <div className="space-y-4">
                  <Heading className="text-lg">Breadcrumbs</Heading>
                  <Breadcrumbs className="flex items-center space-x-2">
                    <Breadcrumb>
                      <Link className="text-blue-600 hover:underline flex items-center gap-1">
                        <HomeIcon className="size-4" />
                        Home
                      </Link>
                    </Breadcrumb>
                    <ChevronRight className="size-4 text-gray-400" />
                    <Breadcrumb>
                      <Link className="text-blue-600 hover:underline">Products</Link>
                    </Breadcrumb>
                    <ChevronRight className="size-4 text-gray-400" />
                    <Breadcrumb>
                      <Text className="text-gray-600">Laptops</Text>
                    </Breadcrumb>
                  </Breadcrumbs>
                </div>

                {/* Menu */}
                <div className="space-y-4">
                  <Heading className="text-lg">Menu</Heading>
                  <Button className="bg-gray-100 border border-gray-300 px-4 py-2 rounded flex items-center gap-2">
                    <MenuIcon className="size-4" />
                    Open Menu
                  </Button>
                  {/* Menu would be shown on trigger - showing structure */}
                  <div className="border border-gray-300 rounded bg-white shadow-lg p-1 max-w-xs">
                    <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-2">
                      <Edit className="size-4" />
                      Edit
                    </div>
                    <div className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer flex items-center gap-2">
                      <Copy className="size-4" />
                      Copy
                    </div>
                    <Separator />
                    <div className="px-3 py-2 hover:bg-red-100 text-red-600 rounded cursor-pointer flex items-center gap-2">
                      <Trash2 className="size-4" />
                      Delete
                    </div>
                  </div>
                </div>

                {/* Tabs with different orientations */}
                <div className="space-y-4">
                  <Heading className="text-lg">Horizontal Tabs</Heading>
                  <Tabs defaultSelectedKey="tab1">
                    <TabList className="flex border-b border-gray-200">
                      <Tab id="tab1" className="px-4 py-2 border-b-2 border-transparent data-[selected=true]:border-blue-600 data-[selected=true]:text-blue-600">
                        Overview
                      </Tab>
                      <Tab id="tab2" className="px-4 py-2 border-b-2 border-transparent data-[selected=true]:border-blue-600 data-[selected=true]:text-blue-600">
                        Settings
                      </Tab>
                      <Tab id="tab3" className="px-4 py-2 border-b-2 border-transparent data-[selected=true]:border-blue-600 data-[selected=true]:text-blue-600">
                        Help
                      </Tab>
                    </TabList>
                    <TabPanel id="tab1" className="mt-4">
                      <Text>Overview content goes here...</Text>
                    </TabPanel>
                    <TabPanel id="tab2" className="mt-4">
                      <Text>Settings panel with configuration options...</Text>
                    </TabPanel>
                    <TabPanel id="tab3" className="mt-4">
                      <Text>Help documentation and support information...</Text>
                    </TabPanel>
                  </Tabs>
                </div>

                {/* Toolbar */}
                <div className="space-y-4">
                  <Heading className="text-lg">Toolbar</Heading>
                  <Toolbar className="flex items-center gap-2 p-2 border border-gray-300 rounded bg-gray-50">
                    <Button className="p-2 hover:bg-gray-200 rounded">
                      <Settings className="size-4" />
                    </Button>
                    <Button className="p-2 hover:bg-gray-200 rounded">
                      <User className="size-4" />
                    </Button>
                    <Separator orientation="vertical" className="h-6 w-px bg-gray-300" />
                    <Button className="p-2 hover:bg-gray-200 rounded">
                      <Mail className="size-4" />
                    </Button>
                    <Button className="p-2 hover:bg-gray-200 rounded">
                      <Phone className="size-4" />
                    </Button>
                  </Toolbar>
                </div>

                {/* Links */}
                <div className="space-y-4">
                  <Heading className="text-lg">Links</Heading>
                  <div className="space-y-2">
                    <Link className="text-blue-600 hover:underline">
                      Standard Link
                    </Link>
                    <Link className="text-blue-600 hover:underline flex items-center gap-1">
                      External Link
                      <ExternalLink className="size-3" />
                    </Link>
                    <Link isDisabled className="text-gray-400 cursor-not-allowed">
                      Disabled Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Continue with other tabs... */}
          <TabPanel id="layout" className="mt-8">
            <div className="space-y-8">
              <Heading className="text-2xl font-semibold">Layout & Overlays</Heading>
              <Text className="text-gray-600">Coming soon - Modal, Dialog, Popover, Tooltip, Disclosure components...</Text>
            </div>
          </TabPanel>

          <TabPanel id="data" className="mt-8">
            <div className="space-y-8">
              <Heading className="text-2xl font-semibold">Data Display</Heading>
              <Text className="text-gray-600">Coming soon - Table, GridList, Meter, ProgressBar, Tag components...</Text>
            </div>
          </TabPanel>

          <TabPanel id="datetime" className="mt-8">
            <div className="space-y-8">
              <Heading className="text-2xl font-semibold">Date & Time</Heading>
              <Text className="text-gray-600">Coming soon - Calendar, DatePicker, TimeField components...</Text>
            </div>
          </TabPanel>

          <TabPanel id="color" className="mt-8">
            <div className="space-y-8">
              <Heading className="text-2xl font-semibold">Color Components</Heading>
              <Text className="text-gray-600">Coming soon - ColorArea, ColorField, ColorSwatch components...</Text>
            </div>
          </TabPanel>

          <TabPanel id="interactive" className="mt-8">
            <div className="space-y-8">
              <Heading className="text-2xl font-semibold">Interactive Elements</Heading>
              <Text className="text-gray-600">Coming soon - Drag & Drop, Interactive components...</Text>
            </div>
          </TabPanel>

          <TabPanel id="content" className="mt-8">
            <div className="space-y-8">
              <Heading className="text-2xl font-semibold">Typography & Content</Heading>
              <Text className="text-gray-600">Coming soon - Typography, Content components...</Text>
            </div>
          </TabPanel>
        </Tabs>

      </div>
    </div>
  );
}
