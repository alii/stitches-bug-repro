import { styled, theme } from "./stitches";

export const BuggedComponent = styled("div", {
	size: theme.sizes.EMOJI_SIZE,
	br: theme.radii.md,
	bg: theme.colors.bgSecondary,
	// etc, basically the utilities don't work with the theme tokens
});
