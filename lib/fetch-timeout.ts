/** AbortSignal.timeout polyfill for older Safari / some mobile browsers. */
export function abortSignalTimeout(ms: number): AbortSignal {
  const AnySignal = AbortSignal as typeof AbortSignal & {
    timeout?: (ms: number) => AbortSignal;
  };
  if (typeof AnySignal.timeout === 'function') return AnySignal.timeout(ms);
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}
