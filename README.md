# @vshp/ui-components-vue

VSHP UI Components build on Vue 3 + Vite with Storybook v7

## Installation

```
npm i @vshp/ui-components-vue
or
yarn add @vshp/ui-components-vue
```

## Usage

Import the component you need in project


```
import { Button } from "@vshp/ui-components-vue";
```

And import styles from @vshp/ui-components-vue/dist/index.css

```
@vshp/ui-components-vue/dist/index.css
```

If you don't use Layout from [Ant Design](https://ant.design/components/layout/) use [Normalize](https://necolas.github.io/normalize.css/8.0.1/normalize.css)

Detailed docs and example usage can be found at our Storybook.

## Usage with SASS Variables

If you need to change the default colors, import scss file from @vshp/ui-components-vue/dist/scss/index.scss

Put it AFTER your scss variables import.

# Development

Installing all the dependencies

```
yarn
```

## Storybook

```
yarn storybook
```

## Build UI components library

```
yarn build
```
