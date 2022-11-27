import { parseJsonWithDates } from "./parseJsonWithDates";

test("Should parse ISO 8601 date", () => {
  const now = new Date();
  const date = parseJsonWithDatesEx(`"${now.toISOString()}"`);

  expect(date).toStrictEqual(now);
  expect(date).toBeInstanceOf(Date);
});

test("Should parse ISO 8601 date in array", () => {
  const now = new Date();
  const [date] = parseJsonWithDatesEx<Date[]>(`["${now.toISOString()}"]`);

  expect(date).toStrictEqual(now);
  expect(date).toBeInstanceOf(Date);
});

test("Should parse ISO 8601 date in object", () => {
  const now = new Date();
  const { date } = parseJsonWithDatesEx<{ date: Date }>(`{"date": "${now.toISOString()}"}`);

  expect(date).toStrictEqual(now);
  expect(date).toBeInstanceOf(Date);
});

function parseJsonWithDatesEx<T>(text: string): T {
  return parseJsonWithDates(text) as T;
}
