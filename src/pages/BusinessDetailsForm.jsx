import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BusinessDetailsForm = () => {
  const [searchValue, setSearchValue] = useState("");
  const [location, setLocation] = useState("ABC Company Inc");
  const [address, setAddress] = useState("Dale Way, Newport Mesa, NV, USA");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleUseLocation = () => {
    alert("Location selected: " + location);
  };

  const handleManualEntry = () => {
    alert("Manual entry selected.");
  };

  return (
    <div className="container mx-auto rounded-md bg-white p-6 shadow-md">
      <h1 className="mb-4 text-2xl font-semibold">Business Details</h1>
      <p className="mb-6 text-gray-600">
        Add your business details so our team has the correct information for
        creating local business listings through directory submissions.
      </p>

      {/* Search Input */}
      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-700">
          Search For Your Business on Google Maps (Recommended)
        </label>
        <input
          type="text"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="ABC Company Inc Newport Beach"
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Populating from Google Business Profile */}
      <div className="mb-6 rounded-md bg-gray-100 p-4">
        <p className="mb-2 font-medium text-gray-700">
          Populating from Google Business Profile
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{location}</p>
            <p className="text-gray-600">{address}</p>
          </div>
        </div>
        <Button variant="ghost" className="mt-4" onClick={handleManualEntry}>
          Manually Enter Location
        </Button>
        <Button
          className="ml-4 mt-2"
          variant="ghost"
          onClick={handleUseLocation}
        >
          Use This Location
        </Button>
      </div>

      {/* Accordion Sections using ShadCN */}
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="general-info">
          <AccordionTrigger>General Information</AccordionTrigger>
          <AccordionContent>
            <p>Details about general information...</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="hours">
          <AccordionTrigger>Hours of Operation</AccordionTrigger>
          <AccordionContent>
            <p>Details about hours of operation...</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="more-info">
          <AccordionTrigger>More About the Business</AccordionTrigger>
          <AccordionContent>
            <p>Details about the business...</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="social-links">
          <AccordionTrigger>Social Profile Links</AccordionTrigger>
          <AccordionContent>
            <p>Details about social profile links...</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-end">
        <Button variant="secondary" className="mr-4">
          Save & Finish Later
        </Button>
        <Button variant="secondary">Next</Button>
      </div>
    </div>
  );
};

export default BusinessDetailsForm;
