import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import PositiveButton from './PositiveButton'

const stories = storiesOf('Button', module)

stories.add('PositiveButton', () => <PositiveButton>ボタン</PositiveButton>)
