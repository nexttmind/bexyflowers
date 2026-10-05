export const CMS_IMAGE_ERROR = 'Use an uploaded image or HTTPS image URL';

/** Paths under /images/ (including subfolders), uploaded media, or HTTPS URLs. */
export function isValidCmsImageSrc(src: string): boolean {
  const value = src.trim();
  if (!value) return false;
  return (
    /^https:\/\//.test(value) ||
    /^\/api\/media\/[a-f0-9-]+$/.test(value) ||
    /^\/images\/[\w./-]+$/.test(value)
  );
}
