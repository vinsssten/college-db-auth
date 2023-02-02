import React from 'react';
import {render} from '@testing-library/react';

import MainButton from './MainButton';

describe('MainButton', () => {
    test('renders the Button component', () => {
        render(<MainButton>Hello</MainButton>);
    });
});
