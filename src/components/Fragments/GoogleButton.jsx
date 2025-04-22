import Button from "../Elements/Button";
import { Icon } from "@iconify/react";

const GoogleButton = ({ span }) => {
  return (
    <Button
      customStyle={
        "w-full flex items-center justify-center gap-2 text-sm font-semibold bg-transparent border-2 border-gray-300"
      }
    >
      <Icon icon="flat-color-icons:google" className="text-2xl" />
      {span} with Google
    </Button>
  );
};

export default GoogleButton;
