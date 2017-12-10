/**
 *
 * @param check The type to check
 * @param throwError Optional, set to true to throw an error if this function is ever called in run-time
 */
export function exhaustiveCheck(
  check: never,
  throwError: boolean = false
): never {
  if (throwError) {
    throw new Error(
      `ERROR! The value ${JSON.stringify(check)} should be of type never.`
    );
  }
  return check;
}
