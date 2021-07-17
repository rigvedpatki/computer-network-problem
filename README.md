# Computer Network Storage Problem

1. Problem description :

There are a number of computers which are connected to each other. Each computer has a storage capacity which can be used to store data. When a computer is connected to another, they form a set of computers
and the storage capacity of the set is the sum of the storage capacities of the computers in the set.
You are given the set of connections between the computers by the arrays connections_from and connections_to (The connections are bi-directional). The initial storage capacities are denoted by
storage[storage[0],...,storage[connections_nodes-1]]. Also, you are given a threshold of storage capacity. After every connection, you are required to find the number of sets of computers which have storage capacity
less than or equal to threshold.

2. Note: Initially there are no connections between the computers and each computer can be considered as a set with 1 computer.

3. For example
   connections_nodes = 3. storage = {2, 3, 6}, connections_from = {0, 0, 2}, connections_to = {1, 2, 1}, threshold = 6.
   After 1st connection {0, 1}: {5, 6} (2 values are less than or equal to 6)
   After 2nd connection {0, 2}: {11} (no value is less than or equal to 6)
   After 3rd connection {2, 1}: {11} (no value is less than or equal to 6)

4. Return an array containing the answer after each connection

5. Function Description

Complete the function getStorage in the editor below. The function must return a vector. get_storage has the following parameter(s):
connections_nodes: an integer denoting the number of computers
connections_from: an array of integers denoting the ith connection
connections_to: an array of integers denoting the ith connection
storage: an array of integers denoting the initial storage capacities
threshold: an integer

6. Constraints
   1 ≤ connections_nodes ≤ 105
   1 ≤ connections_edges ≤ min( (connections_nodes) \* (connections_nodes-1)/2, 105)
   0 ≤ connections_fromi, connections_toi < connections_nodes
   1 ≤ storage i ≤ 104
   1 ≤ threshold ≤ 109
   The graph does not contain a self-loop or multiple edges between two nodes.

7. Input Format For Testing
   The first line contains 2 space-separated integers, connections_nodes and connections_edges, denoting the number of computers and number of connections respectively.
   Each line i of the connections_edges subsequent lines (where 0 ≤ i < connections_edges) contains 2 space-separated integers describing connections_fromi and connections_toi.
   The next line contains an integer, connections_nodes, denoting the number of elements in storage.
   Each line i of the connections_nodes subsequent lines (where 0 ≤ i < connections_nodes) contains an integer storage i.
   The last line contains the integer threshold.

- Sample Case 0
  Sample Input For Testing
  5 3
  0 1
  1 4
  0 4
  5
  1
  2
  3
  4
  5
  4
  Sample Output
  3
  2
  2
  Explanation
  Initial storage capacities: {1, 2, 3, 4, 5}
  After 1st connection {0, 1}: {3, 3, 4, 5} (3 values are less than or equal to 4)
  After 2nd connection {1, 4}: {3, 4, 8} (2 value is less than or equal to 4)
  After 3rd connection {0, 4}: {3, 4, 8} (2 value is less than or equal to 4)

- Sample Case 1
  Sample Input For Testing
  3 2
  0 1
  1 2
  3
  1
  2
  3
  4
  Sample Output
  2
  0
  Explanation
  Initial storage capacities: {1, 2, 3}
  After 1st connection {0, 1}: {3, 3} (2 values are less than or equal to 4)
  After 2nd connection {1, 2}: {6} (no value is less than or equal to 4)

## How to run the solution :

- Install Node JS v14 or above

- Install all node dependencies using npm

```
npm run install

```

- Build (converrt typescript => javascript)

```
npm run build

```

- Start

```
npm run start

```
