const run = ({ check, warn, error }) => {
  check(
    1 == 1,
    `1 equal 1`,
    `1 does not equal 1`
  );

  warn(
    false,
    '',
    'This is a warning'
  )

  error(
    1 === '1',
    `1 equal '1'`,
    `1 does not equal '1'`
  );
};

module.exports = {
  name: "test checkup",
  description: "Check for Tests",
  run
};
