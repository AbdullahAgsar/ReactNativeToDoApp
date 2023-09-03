import React, {FC} from 'react';
import Svg, {Path, Rect, G, Defs, ClipPath} from 'react-native-svg';

interface PicturesInterface {
  size: number;
}

const Logo: FC<PicturesInterface> = ({size}) => {
  return (
    <Svg width={size} height={size / 3.14} viewBox="0 0 91 29" fill="none">
      <Path
        d="M0.954545 8.19602L0.954545 5.54545L14.8807 5.54545V8.19602H9.4858L9.4858 23H6.34943V8.19602H0.954545ZM19.7253 23V5.54545H22.8873V12.9347H30.9753V5.54545H34.1458V23L30.9753 23V15.5852H22.8873V23H19.7253ZM42.9066 5.54545V23H39.7447V5.54545L42.9066 5.54545ZM68.4397 23V5.54545H71.6016V13.5653H71.8147L78.6244 5.54545H82.4852L75.7352 13.3778L82.5448 23H78.7437L73.5363 15.517L71.6016 17.8011V23H68.4397Z"
        fill="#1F2937"
      />
      <Path
        d="M62.8344 5.54545V23H60.0219L51.7975 11.1108H51.6526V23H48.4907V5.54545H51.3202L59.5361 17.4432H59.6895V5.54545H62.8344Z"
        fill="#B0E9CA"
      />
      <Rect x="87" y="19" width="4" height="4" fill="#1F2937" />
    </Svg>
  );
};

const Search: FC<PicturesInterface> = ({size}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G clip-path="url(#clip0_1_8336)">
        <Path
          d="M18.3334 18.3333L16.6667 16.6666M9.58335 17.5C10.623 17.5 11.6524 17.2952 12.6129 16.8973C13.5734 16.4995 14.4462 15.9164 15.1813 15.1812C15.9164 14.4461 16.4995 13.5734 16.8974 12.6129C17.2952 11.6524 17.5 10.6229 17.5 9.58329C17.5 8.54366 17.2952 7.51421 16.8974 6.55372C16.4995 5.59322 15.9164 4.72049 15.1813 3.98536C14.4462 3.25023 13.5734 2.6671 12.6129 2.26925C11.6524 1.8714 10.623 1.66663 9.58335 1.66663C7.48372 1.66663 5.47009 2.5007 3.98542 3.98536C2.50076 5.47003 1.66669 7.48366 1.66669 9.58329C1.66669 11.6829 2.50076 13.6966 3.98542 15.1812C5.47009 16.6659 7.48372 17.5 9.58335 17.5Z"
          stroke="#7C7C7C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_8336">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const Plus: FC<PicturesInterface> = ({size}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
      <Path
        d="M1.79544 11.5L21.2045 11.5M11.5 21.2046L11.5 1.79547"
        stroke="white"
        strokeWidth="2.42614"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export {Logo, Search, Plus};
