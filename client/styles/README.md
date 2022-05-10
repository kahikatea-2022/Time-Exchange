# Using SASS styles

## Basics

### Adding theme variables

1. Create a variable using `$variableName: variable` in the `_theme.scss` file,
   e.g. `$header-background: #00000`

### Using theme vars

1. Make sure `@use '../theme'` is at at the top of your file
2. Reference the variable with `theme.$variableName`, e.g. `color: theme.$primary`

### Using media queries

1. Make sure `@use '../mediaQuery'` is at at the top of your file
2. Look in `_mediaQuery.scss` to find the named breakpoints, e.g. `desktop` or `mobile`
3. decide if you want the change to be small than or larger than the breakpoint

- max: apply styles if screen width is less than breakpoint
- min: apply styles if screen width is greater than or equal to the breakpoint

4. Within the class you want to apply the media query too, add:

```scss
  @include mediaQuery.media-queries([breakpoint], [min or max]) {
    changes to make...
  }
```

E.g. the container class will have a flex direction of column of screens larger than or equal to 1480px (desktop) and have flex direction of row for screens smaller than 1480px.

```scss
.container {
  display: flex;
  flex-direction: column;
  @include mediaQuery.media-queries(desktop, min) {
    flex-direction: row;
  }
}
```

---

## Styling a page

1. Create new scss file in the `pages` folder. The naming convention is `_[pageName].scss`, e.g. `_home.scss`
2. Add the following to the top:

```scss
@use '../theme';
@use '../mediaQuery';
```

3. use your file within `main.scss`

```scss
@use './pages/_[componentName].scss';
```

4. Add normal CSS to your page scss file.

---

## Styling components

1. Create new scss file in the `components` folder. The naming convention is `_[componentName].scss`, e.g. `_header.scss`
2. Add the following to the top:

```scss
@use '../theme';
@use '../mediaQuery';
```

3. use your file within `main.scss`

```scss
@use './components/_[componentName].scss';
```

4. Add normal CSS to your page scss file.
