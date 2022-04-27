export type DangerouslySetInnerHTML = { __html: string };

export const hasOwnProperty = <X extends {}, Y extends PropertyKey>(
  obj: X,
  prop: Y,
): obj is X & Record<Y, unknown> => obj.hasOwnProperty(prop);

export const isDangerouslySetHtml = (
  t: unknown,
): t is DangerouslySetInnerHTML =>
  typeof t === 'object' && hasOwnProperty(t || {}, '__html');

export const randomRange = (start: number, end: number): number => {
  return Math.round(Math.random() * (end - start) + start);
};
