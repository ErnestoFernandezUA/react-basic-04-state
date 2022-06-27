import React from 'react';
import './TypePicker.scss';

type Props = {
  types: string[];
  value: string;
  onChange: (type: string) => void;
};

type State = {
  isOpen: boolean;
};

export class TypePicker extends React.Component<Props, State> {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const {
      types,
      value,
      onChange,
    } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="TypePicker">
        <button
          className="TypePicker__button"
          type="button"
          onClick={() => this.toggle()}
        >
          {value || 'Choose a color'}
        </button>

        {isOpen && (
          <ul className="TypePicker__list">
            {types.map(type => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li
                key={type}
                onClick={() => {
                  onChange(type);
                  this.toggle();
                }}
                onKeyDown={() => {}}
              >
                {type}
              </li>
            ))}
          </ul>
        )}

      </div>
    );
  }
}
