# Javascript Date Differ Utility

# Question

You have joined a science project where a series of experiments are run for which you
need to calculate the number of full days elapsed in between two events.
The first and the last day are considered partial days and never counted. Following this
logic, the distance between two related events on 03/08/2018 and 04/08/2018 is 0,
since there are no fully elapsed days contained in between those, and 01/01/2000 to
03/01/2000 should return 1.
The solution needs to cater for all valid dates between 01/01/1901 and 31/12/2999.
Test cases

1. 02/06/1983 - 22/06/1983 = 19 days
2. 04/07/1984 - 25/12/1984 = 173 days
3. 03/01/1989 - 03/08/1983 = 1979 days
   (Please note these dates are formatted DD/MM/YYYY)

# Instructions

- Write a javascript utility that accepts two date inputs.
- You should not use any existing date libraries or functionality for your implementation.
  I.e. no inbuilt Date functions from Javascript We want to see how you tackle the
  problem from scratch.
- You may however use date libraries to test your solution (we encourage it!) and
  providing an example test suite should be part of the solution.

# Example usage:

DateUtil.diff(“02/06/1983”, “22/06/1983”)
-> 19

# Installation

1. Clone the Repository
2. NPM install for dependecnies for the frameworks been used for the testing framework
3. go to app.js and Put inputs
4. node app.js to run the app
