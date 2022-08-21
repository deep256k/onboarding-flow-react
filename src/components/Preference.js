import { Box } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import StepperContext from "../Context/StepperContext";
import MainHeading from "../UI/MainHeading";
import PreferenceCard from "../UI/PreferenceCard";
import PrimaryButton from "../UI/PrimaryButton";
import personalImage from "../Images/profile-icon.jpeg";
import groupImage from "../Images/group-profile.png";

const Preference = () => {
  const stepperCtx = useContext(StepperContext);
  const [selectedPreference, setSelectedPreference] = useState(0);
  const stepperHandler = () => {
    stepperCtx.updateStepper(3);
  };

  const preferenceHandler = (index) => {
    setSelectedPreference(index);
  };
  return (
    <React.Fragment>
      <MainHeading
        mainContent="How are you Planning to use Eden?"
        subContent="We will streamline your setup experience accordingly"
      ></MainHeading>
      <Box mt={10} mb={6} display="flex">
        <Box mr={5} height="200px" width={"50%"}>
          <PreferenceCard
            selectedIndex="0"
            preferenceHandler={() => preferenceHandler(0)}
            isActive={selectedPreference === 0}
            imagePath={personalImage}
            mainText={"For Myself"}
            subText={"Write Better,Think more clearly. stay Focused."}
          ></PreferenceCard>
        </Box>
        <Box height="200px" width={"50%"}>
          <PreferenceCard
            selectedIndex="1"
            preferenceHandler={() => preferenceHandler(1)}
            isActive={selectedPreference === 1}
            imagePath={groupImage}
            mainText={"With My Team"}
            subText={"Wikis, docs, tasks & Projects,all in one place."}
          ></PreferenceCard>
        </Box>
      </Box>
      <PrimaryButton
        color="white"
        background="#674de5"
        width="100%"
        onHover="#674de5"
        clickHandler={stepperHandler}
        buttonText={"Create Workspace"}
      ></PrimaryButton>
    </React.Fragment>
  );
};

export default Preference;
