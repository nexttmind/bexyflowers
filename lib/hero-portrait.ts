export function portraitHeroEditKey(imageKey?: string): string | undefined {
  return imageKey ? `${imageKey}-portrait` : undefined;
}

