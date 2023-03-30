/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import AppProgressIndicator from '../src/components/progressIndicator/AppProgressIndicator';
import NoDataView from '../src/components/noData/NoDataView';
import OtherContentRow from '../src/components/movieCard/OtherContentRow';
import {mockGetImageFunc} from '../src/util/mockgetImageFunc';
import {appConstants} from '../src/util/constants';

// Check if App Prgress indicator renders correctly
describe('App Prgress Indicator Component', () => {
  it('renders correctly', () => {
    const progressIndicatorElement = renderer.create(<AppProgressIndicator />);
    expect(progressIndicatorElement).toBeDefined();
  });
});

// Check if NoDataView renders correctly
describe('DynamicText component', () => {
  it.each`
    input             | expected
    ${'No data view'} | ${'No data view'}
    ${'Empty view'}   | ${'Empty view'}
  `('renders $expected when given input $input', ({input}) => {
    const tree = renderer.create(<NoDataView title={input} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// Other Content Row
describe('Other Row Content', () => {
  it('Renders the component when isAdult is false', () => {
    const tree = renderer
      .create(
        <OtherContentRow
          isAdult={false}
          originalLanguage="en"
          releaseData="2022-01-12"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Renders the component when isAdult is true', () => {
    const tree = renderer
      .create(
        <OtherContentRow
          isAdult={true}
          originalLanguage="en"
          releaseData="2022-01-12"
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Renders the component when no parameter is passed', () => {
    const tree = renderer.create(<OtherContentRow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// -------------------------------------------- Testing Functions --------------------------------------------

describe('Function to get image from url ', () => {
  const mockImageUrl = appConstants.imageBaseUrl;
  const mockNoImageUrl = appConstants.noImageUrl;
  const mockPath = '/image.jpg';

  it('should return noImageUrl if isError is true', () => {
    const result = mockGetImageFunc(true, mockPath);
    expect(result).toEqual(mockNoImageUrl);
  });

  it('should return noImageUrl if path is not provided', () => {
    const result = mockGetImageFunc(false);
    expect(result).toEqual(mockNoImageUrl);
  });

  it('should return the full image url if isError is false and path is provided', () => {
    const result = mockGetImageFunc(false, mockPath);
    expect(result).toEqual(`${mockImageUrl}${mockPath}`);
  });
});
