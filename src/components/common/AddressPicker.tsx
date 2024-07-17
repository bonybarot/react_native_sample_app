import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import strings from '../../i18n/strings';
import { INavigation } from '../../interfaces/common';
import { mapKey } from '../../utils/constant';
import EHeader from './EHeader';

const AddressPicker = ({ navigation }: INavigation) => {
  const route = useRoute();
  const { onPress } = route?.params;
  return (
    <View style={{ flex: 1 }}>
      <EHeader title={strings.addressPicker} />
      <GooglePlacesAutocomplete
        placeholder={strings.enterAddress}
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          onPress(details);
          navigation.goBack();
        }}
        query={{
          key: mapKey,
          language: strings.getLanguage(),
        }}
        styles={{
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
          listView: { color: 'black', zIndex: 100000 },
          description: { color: 'gray' }, // doesnt work, text is still white?
        }}
      />
    </View>
  );
};

export default AddressPicker;
