import React from 'react';
import styled from 'styled-components'
import {ButtonGroup, Button, ButtonToolbar, InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'



function SearchBar() {
  return (
      <div>
      <h2>Start your Metaverse Land search here...</h2>
        <ButtonToolbar aria-label="Toolbar with button groups">
        <DropdownButton as={ButtonGroup} title="Metaverse" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="1">Decentraland</Dropdown.Item>
        <Dropdown.Item eventKey="2">Sandbox</Dropdown.Item>
        <Dropdown.Item eventKey="3">Other</Dropdown.Item>
        <Dropdown.Item eventKey="4">Other</Dropdown.Item>
        </DropdownButton>
            <DropdownButton as={ButtonGroup} title="Area" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
            <InputGroup>
            <FormControl
              type="text"
              placeholder="Search"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
            <ButtonGroup aria-label="Third group">
                <Button>Find</Button>
            </ButtonGroup>
    </ButtonToolbar>
      
      </div>
  );
}

export default SearchBar;