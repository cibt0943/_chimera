import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import BaseButton from './BaseButton'

const stories = storiesOf('Button', module)

stories.add('BaseButton', () => <BaseButton>ボタン</BaseButton>)
