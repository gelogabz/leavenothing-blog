/**
 * One width ladder and one quality for every responsive photograph.
 *
 * Every call site uses the same `widths` array and quality so the image
 * service emits a single encoding per photograph and size, instead of a new
 * one for each context. Source files are 1600px wide, so nothing larger is
 * listed — a bigger width is silently ignored.
 */
export const IMAGE_WIDTHS = [320, 480, 720, 960, 1280, 1600];

export const IMAGE_QUALITY = 82;
