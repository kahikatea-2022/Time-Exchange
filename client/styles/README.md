# Using SASS styles

## Basics

### Using theme vars

### Using media queries

## Styling a page

1. Create new scss file in `page` folder. The naming convention is `_[componentName].scss`, e.g. `_header.scss`
2. Add the following to the top:

```scss
@use '../theme';
@use '../mediaQuery';
```

3. use your file within `main.scss`

```scss
@use './pages/_[componentName].scss';
```

## Styling components
