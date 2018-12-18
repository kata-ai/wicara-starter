import * as React from 'react';
import styled from 'styled-components';
import { DropdownSelector, DropdownItem } from '@kata-kit/dropdown';

interface Option {
  value: string;
  label: string;
}

interface SelectorState {
  selected?: string;
  options: Option[];
}

class Selector extends React.Component<{}, SelectorState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      selected: undefined,
      options: [
        {
          value: 'one',
          label: 'Option 1'
        },
        {
          value: 'two',
          label: 'Option 2'
        },
        {
          value: 'three',
          label: 'Option 3'
        }
      ]
    };
  }

  handleSelect = (value: string) => {
    this.setState({ selected: value });
  };

  formatSelected = (selected?: string) => {
    const values = this.state.options.filter(
      option => selected === option.value
    );

    console.log(values); // tslint:disable-line

    if (values && values.length) {
      return values[0].label;
    }

    return undefined;
  };

  render() {
    const { selected, options } = this.state;

    return (
      <Wrapper>
        <DropdownSelector
          block
          value={this.formatSelected(selected)}
          onSelect={this.handleSelect}
        >
          {options.map(option => (
            <DropdownItem key={option.value} value={option.value}>
              {option.label}
            </DropdownItem>
          ))}
        </DropdownSelector>
      </Wrapper>
    );
  }
}

export default Selector;

const Wrapper = styled('div')`
  width: 192px;
`;
