import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
} from "@mui/material";
import { getAllServicePlans } from "../../features/actions/Service/servicePlan";
import { useDispatch, useSelector } from "react-redux";
import { updateConsultantPlans } from "../../features/actions/Auth/userActions";

const steps = ["Service Types", "Service Providers", "Service Plans"];

const AddServicePlan = () => {
  const dispatch = useDispatch();

  const { servicePlanData } = useSelector((state) => state.servicePlan);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [serviceProviders, setServiceProviders] = useState([]);
  const [plans, setPlans] = useState([]);

  const [checkedItemsStep1, setCheckedItemsStep1] = useState([]);
  const [checkedItemsStep2, setCheckedItemsStep2] = useState([]);
  const [checkedItemsStep3, setCheckedItemsStep3] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  const { loggedInUserData } = useSelector((state) => state.auth);

  // Handle checkbox change
  const handleCheckboxChange = (stepIndex, value) => {
    if (stepIndex === 0) {
      setCheckedItemsStep1((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    } else if (stepIndex === 1) {
      setCheckedItemsStep2((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    } else if (stepIndex === 2) {
      setCheckedItemsStep3((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    }
  };

  // Handlers for stepper navigation
  const handleSubmit = () => {
   dispatch(updateConsultantPlans({userId:loggedInUserData?._id,payload:{servicePlan:plans.map((item)=>item?.value)}}))
   

  };
  
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      console.log("Selections for Step 1:", checkedItemsStep1);
      console.log("Selections for Step 2:", checkedItemsStep2);
      console.log("Selections for Step 3:", checkedItemsStep3);
    }
  };
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  useEffect(() => {
    dispatch(getAllServicePlans());
  }, []);

  useEffect(() => {
    const uniqueServiceTypes = servicePlanData
      .filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (obj) => obj?.serviceType?._id === item?.serviceType?._id
          )
      )
      .map((item) => ({
        label: item.serviceType.serviceType,
        value: item.serviceType._id,
      }));

    setServiceTypes(uniqueServiceTypes);
  }, [servicePlanData]);

  useEffect(() => {
    const uniqueServiceProviders = servicePlanData
      .filter((item) =>
        checkedItemsStep1.includes(item.serviceType.serviceType)
      )
      .filter(
        (item, index, self) =>
          index ===
          self.findIndex(
            (obj) => obj?.serviceProvider?._id === item?.serviceProvider?._id
          )
      )
      .map((item) => ({
        label: item.serviceProvider?.serviceProviderName,
        value: item.serviceProvider?._id,
      }));

    setServiceProviders(uniqueServiceProviders);
    setCheckedItemsStep2((prev) =>
      prev.filter((item) =>
        uniqueServiceProviders.find((provider) => provider.label === item)
      )
    );
    console.log(uniqueServiceProviders);
  }, [checkedItemsStep1]);

  useEffect(() => {
    const uniqueServicePlans = servicePlanData
      .filter(
        (item) =>
          checkedItemsStep1.some(
            (service) => service === item?.serviceType?.serviceType
          ) &&
          checkedItemsStep2.some(
            (provider) =>
              provider === item?.serviceProvider?.serviceProviderName
          )
      )
      .map((item) => ({
        label: item?.planName,
        value: item?._id,
      }));
    setPlans(uniqueServicePlans);

    setCheckedItemsStep3((prevSelectedPlans) =>
      prevSelectedPlans.filter((plan) =>
        uniqueServicePlans.some((servicePlan) => servicePlan.label === plan)
      )
    );
  }, [checkedItemsStep2, serviceProviders]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Add Service Plans
      </h1>

      {/* Stepper */}
      <Box className="w-full max-w-xl mb-8">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Step Content */}
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">{steps[activeStep]}</h2>
        <div className="flex flex-col gap-3">
          {activeStep === 0 &&
            serviceTypes.map((serviceType, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checkedItemsStep1.includes(serviceType.label)}
                    onChange={() =>
                      handleCheckboxChange(activeStep, serviceType.label)
                    }
                  />
                }
                label={serviceType.label}
                className="text-gray-800"
              />
            ))}
          {activeStep === 1 &&
            serviceProviders.map((provider, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checkedItemsStep2.includes(provider.label)}
                    onChange={() =>
                      handleCheckboxChange(activeStep, provider.label)
                    }
                  />
                }
                label={provider.label}
                className="text-gray-800"
              />
            ))}
          {activeStep === 2 &&
            plans.map((plan, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checkedItemsStep3.includes(plan.label)}
                    onChange={() =>
                      handleCheckboxChange(activeStep, plan.label)
                    }
                  />
                }
                label={plan.label}
                className="text-gray-800"
              />
            ))}
        </div>

        {/* Stepper Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <Button
            variant="outlined"
            onClick={handleBack}
            disabled={activeStep === 0}
            className="text-gray-600"
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddServicePlan;
