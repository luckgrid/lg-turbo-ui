# `@workspace/ui`

## Dev Backlog

### Architecture Improvements

- Organize ui components into groups that share similar primitives and style variants. Remove old primitives dir from ui in favor of new component groups which will share primitives internally. This should reduce complexity associated with inheritance chains and deep nesting
- Create additional ui libraries to contain more complex code blocks related to the same feature or module (i.e. shop, blog, docs, auth, platform, etc...)

#### Proposed File Structure

As ui components are added and the library grows, it's important to organize components that share similar patterns together into a class group.

```yaml
components/
- action/
  - button
  - dialog
  - dropdown
  - indicator
  - switch
  - toggle
- display/
  - accordion
  - badge
  - card
  - carousel
  - chat
  - collapse
  - diff
  - hero
  - list
  - media
  - stats
  - table
  - text
- feedback/
  - skeleton
  - toaster
  - tooltip
- form/
  - calendar
  - checkbox
  - field
  - input
  - label
  - radio
  - rating
  - select # includes autocomplete
  - textarea
- layout/ # not restricted to just page layouts but generally used for this
  - divider
  - drawer
  - footer
  - group # joins items inside a group
  - header
  - main
  - section
  - sidebar
- navigation/
  - breadcrumb
  - menu
  - navbar
  - link
  - pagination
  - steps
  - tabs
```

#### Component Modules

- Component files should be contained inside a dir using component's namespace - so that unit tests, stories and relative files can also be contained there.
- Breaking up component styles into a separate file will make it easier to migrate them to a design-system package later.
- More suitable for complex components that may need context state, actions, etc (i.e. form, sidebar, etc)

```yaml
components/
- action/
  - button/
    button
    button.spec
    button.story
- form/
  - field/
    base # could also be named - field, input, etc...
    checkbox
    radio
    select
```

### Design System Package

- Clone a new project from lg-turbo-ui called lg-turbo-ds, with a mirror branch to sync ui changes with design system changes
- Decouple UI from Design by creating a separate package for a unified design system to integrate with multiple ui packages.
- Create a framework agnostic tailwind design system that will integrate into any framework or library (not just React by default).
- Reduce dependencies on Radix-UI and other third party libraries in favor of native browser solutions using HTML and CSS. For example, using [select element with custom styles](https://developer.chrome.com/blog/a-customizable-select) or [dialog element for the modal](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog).
