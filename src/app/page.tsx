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
import Table from "@/components/ui/Table";
import TableHeader from "@/components/ui/TableHeader";
import TableBody from "@/components/ui/TableBody";
import Column from "@/components/ui/Column";
import Row from "@/components/ui/Row";
import Cell from "@/components/ui/Cell";
import { ChevronDown, Eye, EyeClosed, Search, ArrowUpDown } from "lucide-react";

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

        <Separator />

        <div className="space-y-6">
          <Heading className="text-2xl">Data Display - Table Components</Heading>
          
          <div className="space-y-8">
            {/* Basic Data Table */}
            <div className="space-y-4">
              <Heading className="text-lg">Employee Directory</Heading>
              <Table aria-label="Employee directory">
                <TableHeader>
                  <Column isRowHeader>Name</Column>
                  <Column>Department</Column>
                  <Column>Role</Column>
                  <Column>Status</Column>
                </TableHeader>
                <TableBody>
                  <Row>
                    <Cell>Sarah Chen</Cell>
                    <Cell>Engineering</Cell>
                    <Cell>Senior Developer</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </Cell>
                  </Row>
                  <Row>
                    <Cell>Michael Rodriguez</Cell>
                    <Cell>Design</Cell>
                    <Cell>UX Designer</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </Cell>
                  </Row>
                  <Row>
                    <Cell>Emily Johnson</Cell>
                    <Cell>Marketing</Cell>
                    <Cell>Content Manager</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Away
                      </span>
                    </Cell>
                  </Row>
                  <Row>
                    <Cell>David Kim</Cell>
                    <Cell>Engineering</Cell>
                    <Cell>DevOps Engineer</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </Cell>
                  </Row>
                </TableBody>
              </Table>
            </div>

            {/* Sortable Table */}
            <div className="space-y-4">
              <Heading className="text-lg">Product Inventory (Sortable)</Heading>
              <Table aria-label="Product inventory" selectionMode="multiple">
                <TableHeader>
                  <Column isRowHeader allowsSorting>
                    Product Name
                    <ArrowUpDown className="inline ml-1 w-3 h-3" />
                  </Column>
                  <Column allowsSorting>
                    Price
                    <ArrowUpDown className="inline ml-1 w-3 h-3" />
                  </Column>
                  <Column allowsSorting>
                    Stock
                    <ArrowUpDown className="inline ml-1 w-3 h-3" />
                  </Column>
                  <Column>Category</Column>
                </TableHeader>
                <TableBody>
                  <Row id="laptop">
                    <Cell>MacBook Pro 16&quot;</Cell>
                    <Cell>$2,399</Cell>
                    <Cell>12</Cell>
                    <Cell>Computers</Cell>
                  </Row>
                  <Row id="phone">
                    <Cell>iPhone 15 Pro</Cell>
                    <Cell>$999</Cell>
                    <Cell>25</Cell>
                    <Cell>Mobile</Cell>
                  </Row>
                  <Row id="headphones">
                    <Cell>AirPods Pro</Cell>
                    <Cell>$249</Cell>
                    <Cell>50</Cell>
                    <Cell>Audio</Cell>
                  </Row>
                  <Row id="tablet">
                    <Cell>iPad Air</Cell>
                    <Cell>$599</Cell>
                    <Cell>8</Cell>
                    <Cell>Tablets</Cell>
                  </Row>
                  <Row id="watch">
                    <Cell>Apple Watch Series 9</Cell>
                    <Cell>$399</Cell>
                    <Cell>15</Cell>
                    <Cell>Wearables</Cell>
                  </Row>
                </TableBody>
              </Table>
            </div>

            {/* Financial Data Table */}
            <div className="space-y-4">
              <Heading className="text-lg">Monthly Sales Report</Heading>
              <Table aria-label="Monthly sales report">
                <TableHeader>
                  <Column isRowHeader>Month</Column>
                  <Column>Revenue</Column>
                  <Column>Growth</Column>
                  <Column>Target</Column>
                  <Column>Performance</Column>
                </TableHeader>
                <TableBody>
                  <Row>
                    <Cell>January</Cell>
                    <Cell className="font-mono">$45,280</Cell>
                    <Cell className="text-green-600 font-medium">+12.5%</Cell>
                    <Cell className="font-mono">$42,000</Cell>
                    <Cell>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: "108%"}}></div>
                      </div>
                    </Cell>
                  </Row>
                  <Row>
                    <Cell>February</Cell>
                    <Cell className="font-mono">$38,950</Cell>
                    <Cell className="text-red-600 font-medium">-8.2%</Cell>
                    <Cell className="font-mono">$44,000</Cell>
                    <Cell>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: "89%"}}></div>
                      </div>
                    </Cell>
                  </Row>
                  <Row>
                    <Cell>March</Cell>
                    <Cell className="font-mono">$52,100</Cell>
                    <Cell className="text-green-600 font-medium">+15.3%</Cell>
                    <Cell className="font-mono">$46,000</Cell>
                    <Cell>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{width: "113%"}}></div>
                      </div>
                    </Cell>
                  </Row>
                </TableBody>
              </Table>
            </div>

            {/* Task Management Table */}
            <div className="space-y-4">
              <Heading className="text-lg">Project Tasks</Heading>
              <Table aria-label="Project tasks" selectionMode="single">
                <TableHeader>
                  <Column isRowHeader>Task</Column>
                  <Column>Assignee</Column>
                  <Column>Priority</Column>
                  <Column>Due Date</Column>
                  <Column>Status</Column>
                </TableHeader>
                <TableBody>
                  <Row>
                    <Cell>Implement user authentication</Cell>
                    <Cell>Sarah Chen</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
                        High
                      </span>
                    </Cell>
                    <Cell>2024-01-15</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        In Progress
                      </span>
                    </Cell>
                  </Row>
                  <Row>
                    <Cell>Design system components</Cell>
                    <Cell>Michael Rodriguez</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        Medium
                      </span>
                    </Cell>
                    <Cell>2024-01-20</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    </Cell>
                  </Row>
                  <Row>
                    <Cell>Write API documentation</Cell>
                    <Cell>Emily Johnson</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Low
                      </span>
                    </Cell>
                    <Cell>2024-01-25</Cell>
                    <Cell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                        Pending
                      </span>
                    </Cell>
                  </Row>
                </TableBody>
              </Table>
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
