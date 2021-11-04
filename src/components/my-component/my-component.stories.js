import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import notes from './readme.md';

storiesOf('<rds-card>', module)
.addParameters({
    previewTabs:{
        docs: {
            hidden: true
        }
    }
})
.add(
    '<rds-card> : Default Settings',
    () => <rds-card
    card-style={select(
        'card-style',
        {
            dark: 'dark',
            light: 'light'
        }
        ,'dark'
    )}
    elevation={select(
        'elevation',
        {
            ['elevation-1']: 'elevation-1',
            ['elevation-2']: 'elevation-2',
            ['elevation-3']: 'elevation-3',
            ['elevation-4']: 'elevation-4'
        }
        ,'elevation-1')}>Hello World!</rds-card>,
    { notes },
    { decorators: [withKnobs] }
  )
.add(
'<rds-card> : Custom Properties', () => <rds-card
    custom-props
    bg-color={
        text('bg-color', 'green-500'
    )}
    text-color={text('text-color','white')}
    elevation={select('elevation',
    {
        ['elevation-1']: 'elevation-1',
        ['elevation-2']: 'elevation-2',
        ['elevation-3']: 'elevation-3',
        ['elevation-4']: 'elevation-4'
    },'elevation-1')}
    padding={select('padding',
    {
        ['padding-1']: 'padding-1',
        ['padding-2']: 'padding-2',
        ['padding-3']: 'padding-3'
    },'padding-1')}
    border-radius={select('border-radius',
    {
        ['br-1']: 'br-1',
        ['br-2']: 'br-2',
        ['br-3']: 'br-3'
    },'br-1')}>Hello World!</rds-card>,
{ notes },
{ decorators: [withKnobs] }
);
