import React, { useEffect, useState } from "react";
import { Box, Grid, Badge, TextField } from "@mui/material";

import { Button, Typography } from "@material-ui/core";

import { useNavigate } from "react-router-dom";
import useStyles from "./style";

function Feedback({ data, currentQuestion }) {
  const [currentQues, setCurrentQues] = useState(parseInt(currentQuestion));
  const [qData, setqData] = useState(data);
  const classes = useStyles();
  const navigate = useNavigate();

  const prevQues = () => {
    setCurrentQues(currentQues - 1);
    localStorage.setItem("currentQuestion", currentQues - 1);
    localStorage.setItem("questionData", JSON.stringify(qData));
  };

  const nextQues = () => {
    setCurrentQues(currentQues + 1);
    localStorage.setItem("currentQuestion", currentQues + 1);
    localStorage.setItem("questionData", JSON.stringify(qData));
  };

  const submitAnswer = (e) => {
    setqData({
      ...qData,
      [currentQues - 1]: {
        ...qData[currentQues - 1],
        answerValue: e,
      },
    });
  };

  const completeSurvey = () => {
    let confirmation = window.confirm("Are you sure you want to submit the survey?");
    if (!confirmation) return;
    localStorage.removeItem("questionData");
    localStorage.removeItem("currentQuestion");
    navigate("/");
  };

  return (
    <>
      <Grid >
        <Box m="auto" className={classes.container}>
          <Grid item>
            <Typography variant="h4">Customer Survey</Typography>
          </Grid>
          <br />
          <Grid>
            <Typography variant="h6">Question {currentQues} / 5</Typography>
            <br></br>
            <br></br>
            <Typography variant="h6">
              {qData[currentQues - 1].question}
            </Typography>
            <br></br>
            {qData[currentQues - 1].type === "rating" ? (
              qData[currentQues - 1].range.map((item) => {
                return (
                  <Badge
                    style={{
                      margin: 20 + item + "px",
                      cursor: "pointer",
                    }}
                    onClick={() => submitAnswer(item)}
                    spacing={1}
                    value={item}
                    badgeContent={item}
                    key={item}
                    color={
                      qData[currentQues - 1].answerValue === item
                        ? "error"
                        : "primary"
                    }
                  ></Badge>
                );
              })
            ) : (
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                rows={4}
                className={classes.textField}
                multiline
                onChange={(e) => {
                  submitAnswer(e.target.value);
                }}
                value={qData[currentQues - 1].answerValue}
              />
            )}
          </Grid>
          <br />
          <br />
          <br />
          <Grid container>
            <Grid item xs={6}>
              <Button
                disabled={currentQues + 1 <= 5 && currentQues - 1 <= 0}
                onClick={prevQues}
                color="primary"
                variant="contained"
              >
                previous
              </Button>
            </Grid>
            <Grid item xs={6} direction="column" justifyContent="flex-end" >
              {currentQues >= 5 && currentQues >= 0 ? (
                <Button
                  onClick={completeSurvey}
                  color="primary"
                  variant="contained"
                >
                  Finish
                </Button>
              ) : (
                <Button onClick={nextQues} color="primary" variant="contained">
                  next
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Feedback;
