import React, { Component } from 'react';

import PrintIcon from '@material-ui/icons/Print';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

import { CustomerNames, BoatNames } from './options.js';

import styled from 'styled-components';

const AutocompleteStyled = styled(Autocomplete)`
  label {
    font-size: 24pt;

    &.MuiInputLabel-shrink {
      transform: translate(12px, 10px) scale(0.5);
    }
  }
  .MuiFilledInput-root {
    font-size: 24pt;
  }
`;

const TextareaStyled = styled(TextField)`
label {
  font-size: 16pt;

  &.MuiInputLabel-shrink {
    transform: translate(12px, 10px) scale(0.75);
  }
}
.MuiFilledInput-root {
  font-size: 16pt;
  padding-top: 35px;
}
`;

class CreateSheetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      boat: '',
      tasks: '',
    }
  }

  render() {
    return (
      <div className="TaskForm">
          <div className="TitleRow">
            <AutocompleteStyled
              freeSolo
              className="child"
              options={CustomerNames.map((option) => option.surname)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="modifedlabel"
                  id="nameselector"
                  label="Name"
                  margin="normal"
                  variant="filled"
                  InputProps={{ ...params.InputProps, type: 'text' }}
                />
              )}
            />
            <AutocompleteStyled
              freeSolo
              className="child second"
              options={BoatNames.map((option) => option.boatname)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Boat"
                  margin="normal"
                  variant="filled"
                  InputProps={{ ...params.InputProps, type: 'text' }}
                />
              )}
            />
          </div>
          <div
            className="TaskContent"
          >
            <TextareaStyled
              id="filled-multiline-static"
              label="List of Tasks"
              fullWidth
              multiline
              rows={15}
              variant="filled"
            />
          </div>
          <div className="submit-row">
            <Button
              variant="contained"
              color="secondary"
              endIcon={<PrintIcon />}
            >
              Print
          </Button>
          </div>
        </div>
    );
  }
}

export default CreateSheetForm;