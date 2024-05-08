# Date as String

`date-as-string` returns the passed-in date object as a string in the format YYYY-MM-DD, irrespective of timezone.

This differs from formatting the date with `.toISOString().split('T')[0]`, which adjusts the date to UTC, risking the returned string differing from that of the passed-in date.

For example, if I run `new Date("2024-05-08T00:00:00.000-08:00").toISOString().split('T')[0]` it returns `'2024-05-08'`, which is what I want.

However, if I instead run `new Date("2024-05-08T00:00:00.000+08:00").toISOString().split('T')[0]` (note the different timezone), it returns `'2024-05-07'` because when converted to UTC, this date is 4pm on the 7th.

Using `date-as-string` fixes this problem, returning `'2024-05-08'` for both of these dates.

## Setup

Install the package:

```
npm install date-as-string
```

## Usage

`date-as-string` accepts one argument.

- Only date objects are accepted.
- If no argument is passed-in, it defaults to `new Date()`.

## Examples

```js
import dateAsString from 'date-as-string';

// Assuming today is 8th May 2024
console.log(dateAsString());
// 2024-05-08

console.log(dateAsString(new Date('2024-01-01T00:00:00.000-08:00')));
// 2024-01-01

console.log(dateAsString(new Date('2024-01-01T00:00:00.000+08:00')));
// 2024-01-01

console.log(dateAsString(new Date('2024-01-01')));
// 2024-01-01

console.log(dateAsString('2024-01-01'));
// Error: The argument passed to date-as-string must be a date object
```
