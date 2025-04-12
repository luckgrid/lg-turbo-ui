# `@workspace/ui`

## Proposed File Structure

As ui components are added and the library grows, it's important to organize components that share similar patterns together into a class group.

```yaml
components/
- action/
  - button
  - dialog
  - dropdown
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
  - stats
  - table
- feedback/
  - skeleton
  - toaster
  - tooltip
- form/
  - calendar
  - field
  - indicator # includes checkbox & radio
  - input # includes textarea, file, etc
  - label
  - rating
  - select # includes autocomplete
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
