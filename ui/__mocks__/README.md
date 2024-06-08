# What's in here?
In the mocks folder, we store mocks,
which are simulated objects or functions
used in place of real dependencies during testing.
They allow you to isolate and test individual
components or modules without relying
on external systems or complex dependencies.
This helps to create controlled
and predictable environments
for testing, making it easier to
identify and fix issues.

## Purpose of Mocks

- Isolation: Mocks isolate the unit
of code being tested from its dependencies,
ensuring that tests focus only on the component or function under test.
- Predictability: By mocking dependencies,
you can control the data and behavior they return,
making tests more predictable and repeatable.
- Performance: Mocks can speed up
tests by eliminating the need to perform
time-consuming operations like
network requests or database queries.
- Simplicity: Simplifies testing by avoiding
the setup and teardown of complex
systems, making tests easier to write and maintain.

## Additional Resources
You can find more information
about Jest manual mocks here:
<https://jestjs.io/docs/manual-mocks>
