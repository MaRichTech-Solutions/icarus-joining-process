# Quest 1

Performance testing with huge data for backend and e2e testing for web frontend

1. SQA applicant will make code for icarus joining process.
2. and make difference to broke joining process.
3. and developer make commit, and can't commit due to failed to pass test code.
4. after fix code can pass code and can pass commit

## Used strategy
1. Write test using mocha and chai http
2. Simulate http requests using chai http
2. Add github workflow code to run code on commit and before merging to main.
3. As a security messure the main branch can be locked to avoid direct commits so that each developer can contribute to main via Pull Requests. This means that any PR with failing tests cant be merged to main.

## Flows verification
You can check the actions to this repository to verify the instances of failed and successful tests.
