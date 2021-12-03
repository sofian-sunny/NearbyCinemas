import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './styles';

const {container, contentContainer, dropDownContainer} = styles;

const DropdownView = ({
  items,
  setDropdownValueCallback,
  selectedValue,
  isOpen,
  setOpenCallback,
}) => {
  return (
    <DropDownPicker
      dropDownContainerStyle={dropDownContainer}
      containerStyle={{zIndex: 999}}
      modalContentContainerStyle={contentContainer}
      style={container}
      value={selectedValue}
      showTickIcon={false}
      items={items}
      open={isOpen}
      setOpen={setOpenCallback}
      closeAfterSelecting={true}
      setValue={setDropdownValueCallback}
    />
  );
};

DropdownView.defaultProps = {
  items: [],
  setDropdownValueCallback: () => {},
  selectedValue: '',
  isOpen: false,
  setOpenCallback: () => {},
};

export default React.memo(DropdownView);
