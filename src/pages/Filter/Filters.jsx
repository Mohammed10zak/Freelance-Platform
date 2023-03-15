import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import { useState } from "react";

const DivInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  & input {
    border-radius: 10px;
    width: 40px;
    padding: 8px;
  }
`;

export default function SimpleAccordion() {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };
  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const [checkedN, setCheckedN] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleChange = (event, index) => {
    const newChecked = [...checkedN];
    newChecked[index] = event.target.checked;
    setCheckedN(newChecked);
  };

  const parentChecked =
    checkedN[0] &&
    checkedN[1] &&
    checkedN[2] &&
    checkedN[3] &&
    checkedN[4] &&
    checkedN[5] &&
    checkedN[6];
  const parentIndeterminate = checkedN.some((item) => item) && !parentChecked;

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="
        Less than $100"
        control={
          <Checkbox
            color="success"
            checked={checkedN[1]}
            onChange={(e) => handleChange(e, 1)}
          />
        }
      />
      <FormControlLabel
        label="$100 to $500 "
        control={
          <Checkbox
            color="success"
            checked={checkedN[2]}
            onChange={(e) => handleChange(e, 2)}
          />
        }
      />
      <FormControlLabel
        label="
        $500 - $1K"
        control={
          <Checkbox
            color="success"
            checked={checkedN[3]}
            onChange={(e) => handleChange(e, 3)}
          />
        }
      />
      <FormControlLabel
        label="$1K - $5K"
        control={
          <Checkbox
            color="success"
            checked={checkedN[4]}
            onChange={(e) => handleChange(e, 4)}
          />
        }
      />
      <FormControlLabel
        label="
        $5K+"
        control={
          <Checkbox
            color="success"
            checked={checkedN[5]}
            onChange={(e) => handleChange(e, 5)}
          />
        }
      />
      <FormControlLabel
        label={
          <DivInputs>
            <input type="text" placeholder=" $ min" />
            /hr
            <input type="text" placeholder=" $ max" />
            /hr
          </DivInputs>
        }
        control={
          <Checkbox
            color="success"
            checked={checkedN[6]}
            onChange={(e) => handleChange(e, 6)}
          />
        }
      />
    </Box>
  );
  const H2 = styled.h2`
    font-weight: 500;
  `;
  return (
    <>
      <H2>Filter By</H2>
      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Category</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 10px",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                width: 200,
                borderRadius: "20px",
                border: "1px solid #999",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Select Category"
                inputProps={{ "aria-label": "Select Category" }}
              />
              <IconButton type="button" aria-label="search">
                <SearchIcon color="success" />
              </IconButton>
            </Paper>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Experience level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Entry Level"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Intermediate"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Expert"
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Job type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormControlLabel
              label="Hourly"
              color="success"
              control={
                <Checkbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                  color="success"
                />
              }
            />
            <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
              <FormControlLabel
                color="success"
                label={
                  <DivInputs>
                    <input type="text" placeholder=" $ min" />
                    /hr
                    <input type="text" placeholder=" $ max" />
                    /hr
                  </DivInputs>
                }
                control={
                  <Checkbox
                    checked={checked[0]}
                    onChange={handleChange2}
                    color="success"
                  />
                }
              />
            </Box>
          </Typography>

          <div>
            <FormControlLabel
              label="Fixed Price"
              control={
                <Checkbox
                  color="success"
                  checked={parentChecked}
                  indeterminate={parentIndeterminate}
                  onChange={(e) => {
                    const newChecked = new Array(7).fill(e.target.checked);
                    setCheckedN(newChecked);
                  }}
                />
              }
            />
            {children}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Number of proposals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Less than 5 "
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="5 to 10"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="10 to 15"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="15 to 20"
              />{" "}
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="20 to 50"
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Client info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="My previous clients"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="Payment verified"
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Client history</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="No hires"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="1 to 9 hires"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="10+ hires "
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Client location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 10px",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                width: 200,
                borderRadius: "20px",
                border: "1px solid #999",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Select Client location"
                inputProps={{ "aria-label": "Select Client location" }}
              />
              <IconButton type="button" aria-label="search">
                <SearchIcon color="success" />
              </IconButton>
            </Paper>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Client time zones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Paper
              component="form"
              sx={{
                p: "2px 10px",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                width: 200,
                borderRadius: "20px",
                border: "1px solid #999",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Select Client time zones"
                inputProps={{ "aria-label": "Client time zones" }}
              />
              <IconButton type="button" aria-label="search">
                <SearchIcon color="success" />
              </IconButton>
            </Paper>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Project length</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="
                Less than one month "
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="1 to 3 months "
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="3 to 6 months"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="more than 6 months"
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Hours per week</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="
                Less than 30 hrs/week
"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="More than 30 hrs/week"
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion style={{ padding: "10px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Connects needed</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="
                2 or less connects
"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="4 connects"
              />
              <FormControlLabel
                control={<Checkbox color="success" />}
                label="6 connects"
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Contract-to-hire roles
                "
      />
    </>
  );
}
