const page = `THE OBJECTIVE OF this book is to study a broad variety of
  important  and useful  algorithms:  methods for solving  problems 
  that are suited for computer implementation. We shall deal with many
  different areas of application, always concentrating on fundamental
  algorithms that are important to know and interesting to study. We
  shall spend enough time on each algorithm to understand its essential
  characteristics and to respect its subtleties. Our goal is to learn a large
  number of the most important algorithms used on computers today,
  well enough to be able to use and appreciate them.
  The strategy that we use for understanding the programs presented in this book is to implement and test them, to experiment with
  their variants, to discuss their operation on small examples, and to try
  them out on larger examples similar to what we might encounter in
  practice. We shall use the C programming language to describe the
  algorithms, thus providing useful implementations at the same time.
  Our programs have a uniform style that is amenable to translation into
  other modem programming languages, as well.
  We also pay careful attention to performance characteristics of
  our algorithms, to help us develop improved versions, compare different algorithms for the same task, and predict or guarantee performance
  for large problems. Understanding how the algorithms perform might
  require experimentation or mathematical analysis or both. We consider detailed information for many of the most important algorithms,
  developing analytic results directly when feasible, or calling on results
  from the research literature when necessary.
  To illustrate our general approach to developing algorithmic solutions, we consider in this chapter a detailed example comprising a
  number of algorithms that solve a particular problem. The problem
  that we consider is not a toy problem; it is a fundamental computational task, and the solution that we develop is of use in a variety
  of applications. We start with a simple solution, then seek to understand that solution's performance characteristics, which help us to see
  how to improve the algorithm. After a few iterations of this process,
  we come to an efficient and useful algorithm for solving the problem.
  This prototypical example sets the stage for our use of the same general
  methodology throughout the book.
  We conclude the chapter with a short discussion of the contents
  of the book, including brief descriptions of what the major parts of
  the book are and how they relate to one another.
  When we write a computer program, we are generally implementing
  a method that has been devised previously to solve some problem.
  This method is often independent of the particular computer to be
  used-it is likely to be equally appropriate for many computers and
  many computer languages. It is the method, rather than the computer
  program itself, that we must study to learn how the problem is being
  attacked. The term algorithm is used in computer science to describe
  a problem-solving method suitable for implementation as a computer
  program. Algorithms are the stuff of computer science: They are
  central objects of study in many, if not most, areas of the field.
  Most algorithms of interest involve methods of organizing the
  data involved in the computation. Objects created in this way are
  called data structures, and they also are central objects of study in
  computer science. Thus, algorithms and data structures go hand in
  hand. In this book we take the view that data structures exist as the
  byproducts or end products of algorithms, and thus that we must study
  them in order to understand the algorithms. Simple algorithms can
  give rise to complicated data structures and, conversely, complicated
  algorithms can use simple data structures. We shall study the properties
  of many data structures in this book; indeed, the book might well have
  been called Algorithms and Data Structures in C.
  When we use a computer to help us solve a problem, we typically
are faced with a number of possible different approaches. For small
problems, it hardly matters which approach we use, as long as we
have one that solves the problem correctly. For huge problems (or
applications where we need to solve huge numbers of small problems),
however, we quickly become motivated to devise methods that use
time or space as efficiently as possible.
The primary reason for us to learn about algorithm design is
that this discipline gives us the potential to reap huge savings, even
to the point of making it possible to do tasks that would otherwise
be impossible. In an application where we are processing millions of
objects, it is not unusual to be able to make a program millions of
times faster by using a well-designed algorithm. We shall see such an
example in Section 1.2 and on numerous other occasions throughout
the book. By contrast, investing additional money or time to buy and
install a new computer holds the potential for speeding up a program
by perhaps a factor of only 10 or 100. Careful algorithm design is
an extremely effective part of the process of solving a huge problem,
whatever the applications area.
When a huge or complex computer program is to be developed,
a great deal of effort must go into understanding and defining the
problem to be solved, managing its complexity, and decomposing it
into smaller subtasks that can be implemented easily. Often, many
of the algorithms required after the decomposition are trivial to implement. 
In most cases, however, there are a few algorithms whose
choice is critical because most of the system resources will be spent
running those algorithms. Those are the types of algorithms on which
we concentrate in this book. We shall study a variety of fundamental
algorithms that are useful for solving huge problems in a broad variety
of applications areas.
The sharing of programs in computer systems is becoming more
widespread, so, although we might expect to be using a large fraction
of the algorithms in this book, we also might expect to have to implement 
only a smaller fraction of them. However, implementing simple
versions of basic algorithms helps us to understand them better and
thus to use advanced versions more effectively. More important, the
opportunity to reimplement basic algorithms arises frequently. The
primary reason to do so is that we are faced, all too often, with 
completely new computing environments (hardware and software) with
new features that old implementations may not use to best advantage.
In other words, we often implement basic algorithms tailored to our
problem, rather than depending on a system routine, to make our solutions 
more portable and longer lasting. Another common reason to
reimplement basic algorithms is that mechanisms for sharing software
on many computer systems are not always sufficiently powerful to allow us 
to tailor standard programs to perform effectively on specific
tasks (or it may not be convenient to do so), so it is sometimes easier
to do a new implementation.
Computer programs are often overoptimized. It may not be
worthwhile to take pains to ensure that an implementation of a particular 
algorithm is the most efficient possible unless the algorithm is to
be used for an enormous task or is to be used many times. Otherwise,
a careful, relatively simple implementation will suffice: We can have
some confidence that it will work, and it is likely to run perhaps five or
10 times slower at worst than the best possible version, which means
that it may run for an extra few seconds. By contrast, the proper choice
of algorithm in the first place can make a difference of a factor of 100
or 1000 or more, which might translate to minutes, hours, or even
more in running time. In this book, we concentrate on the simplest
reasonable implementations of the best algorithms.
The choice of the best algorithm for a particular task can be
a complicated process, perhaps involving sophisticated mathematical
analysis. The branch of computer science that comprises the study of
such questions is called analysis ofalgorithms. Many of the algorithms
that we study have been shown through analysis to have excellent performance; 
others are simply known to work well through experience.
Our primary goal is to learn reasonable algorithms for important tasks,
yet we shall also pay careful attention to comparative performance of
the methods. We should not use an algorithm without having an idea
of what resources it might consume, and we strive to be aware of how
our algorithms might be expected to perform.
`
export default page