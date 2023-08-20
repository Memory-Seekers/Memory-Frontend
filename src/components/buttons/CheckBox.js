import { Image } from 'react-native';

const CheckBox = ({ isChecked }) => {
  const checkedImage = require('../../../assets/Icons/Icon_CheckBox_Filled.png');
  const uncheckedImage = require('../../../assets/Icons/Icon_CheckBox_Outlined.png');

  return (
    <Image
      style={{ width: 24, height: 24 }}
      source={isChecked ? checkedImage : uncheckedImage}
    />
  );
};

export default CheckBox;
