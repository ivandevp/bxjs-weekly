import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

fairyGatesTheme.overrideThemeStyles = () => ({
  a: {
    color: "#252C41",
  },
})

const typography = new Typography(fairyGatesTheme)

export default typography
