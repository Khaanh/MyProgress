import { Typography } from "@mui/material";

type TitleProps = {
	variants:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "subtitle1"
		| "subtitle2"
		| "body1"
		| "body2"
		| "caption"
		| "button"
		| "overline"
		| "inherit";
	size: "small" | "medium" | "large";
};

export default function Title({ variants, size }: TitleProps) {
	const fontSizes = {
		small: "1rem",
		medium: "1.5rem",
		large: "2rem",
	};

	return (
		<Typography variant={variants} sx={{ fontSize: fontSizes[size] }}>
			Pull ups:
		</Typography>
	);
}
