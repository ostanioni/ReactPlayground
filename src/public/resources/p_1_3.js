const code_1_1=`
<pre>
#include <stdio.h>
#define N 10000
main()
  { int i, p, q, t, id[N];
    for (i = 0; i < N; i++) id[i] = i;
    while (scanf("%d %d\n", &p, &q) == 2)
      { 
        if (id[p] == id[q]) continue;
          for (t = id[p], i = 0; i < N; i++)
            if (id[i] == t) id[i] = id[q];
          printf(" %d %d\n", p, q);
      }
  }
</pre>
`
const figure_1_3 = `
<pre>
p q   0 1 2 3 4 5 6 7 8 9
<hr>
3 4   0 1 2 4 4 5 6 7 8 9
4 9   0 1 2 9 9 5 6 7 8 9
8 0   0 1 2 9 9 5 6 7 0 9
2 3   0 1 9 9 9 5 6 7 0 9
5 6   0 1 9 9 9 6 6 7 0 9
2 9   0 1 9 9 9 6 6 7 0 9
5 9   0 1 9 9 9 9 9 7 0 9
7 3   0 1 9 9 9 9 9 9 0 9
4 8   0 1 0 0 0 0 0 0 0 0
5 6   0 1 0 0 0 0 0 0 0 0
0 2   0 1 0 0 0 0 0 0 0 0
6 1   1 1 1 1 1 1 1 1 1 1
</pre>
` 
const en = {text: `
<h3>I.3 Union-Find Algorithms</h3>
<p>
  The first step in the process of developing an efficient algorithm to
  solve a given problem is to implement a simple algorithm that solves
  the problem. If we need to solve a few particular problem instances
  that turn out to be easy, then the simple implementation may finish 
  the job for us. If a more sophisticated algorithm is called for, then the 
  simple implementation provides us with a correctness check for small 
  cases and a baseline for evaluating performance characteristics. We 
  always care about efficiency, but our primary concern in developing 	
  the first program that we write to solve a problem is to make sure that 	
  the program is a correct solution to the problem.
</p>
<p>
The first idea that might come to mind is somehow to save all 
the input pairs, then to write a function to pass through them to try 
to discover whether the next pair of objects is connected. We shall use
a different approach. First, the number of pairs might be sufficiently
large to preclude our saving them all in memory in practical applica­ 
tions. Second, and more to the point, no simple method immediately 
suggests itself for determining whether two objects are connected from 
the set of all the connections, even if we could save them all! We 
consider a basic method that takes this approach in Chapter 5, but the 
solve a less difficult problem, and are more efficient, because they 
not require saving all the pairs. They all use an array of integers-one
p q, we change all entries with
corresponding to each object-to hold the requisite information to be 
able to implement union and find. 	
</p>
`
}
const ru = {text:`

`}
const p_1_3 = [
  en,
  ru
]