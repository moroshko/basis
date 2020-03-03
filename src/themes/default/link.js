import { rgba } from "polished";

export default theme => ({
  link: {
    textDecoration: "none",
    borderRadius: theme.radii[0],
    ...theme.focusStyles.focusVisible
  },
  "link.text": {
    fontFamily: theme.fonts.body,
    fontWeight: theme.fontWeights.light,
    borderBottomWidth: theme.borderWidths[0],
    borderBottomStyle: "solid",
    transition: theme.transitions.link
  },
  "link.icon": {
    display: "flex"
  },
  "link.text.default": {
    color: theme.colors.primary.blue.t100,
    borderBottomColor: rgba(theme.colors.primary.blue.t100, 0.5)
  },
  "link.text.default:hover": {
    borderBottomColor: theme.colors.primary.blue.t100,
    backgroundColor: rgba(theme.colors.primary.blue.t100, 0.2)
  },
  "link.text.default:active": {
    borderBottomColor: theme.colors.primary.blue.t100,
    backgroundColor: rgba(theme.colors.primary.blue.t100, 0.2)
  },
  "link.text.secondary.turquoise.t60": {
    color: theme.colors.secondary.turquoise.t60,
    borderBottomColor: rgba(theme.colors.secondary.turquoise.t60, 0.5)
  },
  "link.text.secondary.turquoise.t60:hover": {
    borderBottomColor: theme.colors.secondary.turquoise.t60,
    backgroundColor: rgba(theme.colors.secondary.turquoise.t60, 0.2)
  },
  "link.text.secondary.turquoise.t60:active": {
    borderBottomColor: theme.colors.secondary.turquoise.t60,
    backgroundColor: rgba(theme.colors.secondary.turquoise.t60, 0.2)
  },
  "link.text.secondary.lightBlue.t100": {
    color: theme.colors.secondary.lightBlue.t100,
    borderBottomColor: rgba(theme.colors.secondary.lightBlue.t100, 0.5)
  },
  "link.text.secondary.lightBlue.t100:hover": {
    borderBottomColor: theme.colors.secondary.lightBlue.t100,
    backgroundColor: rgba(theme.colors.secondary.lightBlue.t100, 0.4)
  },
  "link.text.secondary.lightBlue.t100:active": {
    borderBottomColor: theme.colors.secondary.lightBlue.t100,
    backgroundColor: rgba(theme.colors.secondary.lightBlue.t100, 0.4)
  }
});
