import { Slider } from "@mui/material";

export default function ProfileSlider({ value }) {
  return (
    <Slider
      disabled
      value={value}
      valueLabelDisplay="auto"
style={{marginTop:"20px"}}

      min={0}
      max={100}
    />
  );
}
