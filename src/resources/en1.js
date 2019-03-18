const par_1_en = `
Preface 
THIS BOOK IS intended to survey the most important computer algorithms in use today, 
and to teach fundamental techniques to
the growing number of people in need of knowing them. It can be
used as a textbook for a second, third, or fourth course in computer
science, after students have acquired basic programming skills and familiarity with computer systems, but before they have taken specialized
courses in advanced areas of computer science or computer applications. The book also may be useful for self-study or as a reference for
'people engaged in the development of computer systems or applications programs, since it contains implementations of useful algorithms
and detailed information on these algorithms' performance characteristics. The broad perspective taken makes the book an appropriate
introduction to the field.
I have completely rewritten the text for this new edition, and I
have added more than a thousand new exercises, more than a hundred
new figures, and dozens of new programs. I have also added detailed
commentary on all the figures and programs. This new material provides both coverage of new topics and fuller explanations of many of
the classic algorithms. A new emphasis on abstract data types throughout the book makes the programs more broadly useful and relevant in
modern object-oriented programming environments. People who have
read old editions of the book will find a wealth of new information
throughout; all readers will find a wealth of pedagogical material that
provides effective access to essential concepts.
Due to the large amount of new material, we have split the new
edition into two volumes (each about the size of the old edition) of
which this is the first. This volume covers fundamental concepts, data
structures, sorting algorithms, and searching algorithms; the second
volume covers advanced algorithms and applications, building on the
basic abstractions and methods developed here. Nearly all the material
on fundamentals and data structures in this edition is new.PREFACE
This book is not just for programmers and computer-science students. Nearly everyone who uses a computer wants it to run faster
or to solve larger problems. The algorithms in this book represent
a body of knowledge developed over the last 50 years that has become indispensible in the efficient use of the computer, for a broad
variety of applications. From N -body simulation problems in physics
to genetic-sequencing problems in molecular biology, the basic methods described here have become essential in scientific research; and
from database systems to Internet search engines, they have become
essential parts of modern software systems. As the scope of computer
applications becomes more widespread, so grows the impact of many
of the basic methods covered here. The goal of this book is to serve
as a resource for students and professionals interested in knowing and
making intelligent use of these fundamental algorithms as basic tools
for whatever computer application they might undertake.
`
const par_2_en = `
Scope
The book contains 16 chapters grouped into four major parts: fundamentals, data structures, sorting, and searching. The descriptions here
are intended to give readers an understanding of the basic properties
of as broad a range of fundamental algorithms as possible. Ingenious
methods ranging from binomial queues to patricia tries are described,
all related to basic paradigms at the heart of computer science. The
second volume consists of four additional parts that cover strings, geometry, graphs, and advanced topics. My primary goal in developing
these books has been to bring together the fundamental methods from
these diverse areas, to provide access to the best methods known for
solving problems by computer.
You will most appreciate the material in this book if you have had
one or two previous courses in computer science or have had equivalent
programming experience: one course in programming in a high-level
language such as C, Java, or C++, and perhaps another course that
teaches fundamental concepts of programming systems. This book
is thus intended for anyone conversant with a modern programming
language and with the basic features of modern computer systems.
References that might help to fill in gaps in your background are
suggested in the text.
Most of the mathematical material supporting the analytic results
is self-contained (or is labeled as beyond the scope of this book), so
little specific preparation in mathematics is required for the bulk of the
book, although mathematical maturity is definitely helpful.
`
const par_3_en = `
Use in the Curriculum
There is a great deal of flexibility in how the material here can be
taught, depending on the taste of the instructor and the preparation
of the students. The algorithms described here have found widespread
use for years, and represent an essential body of knowledge for both
the practicing programmer and the computer-science student. There
is sufficient coverage of basic material for the book to be used for a
course on data structures, and there is sufficient detail and coverage of
advanced material for the book to be used for a course on algorithms.
Some instructors may wish to emphasize implementations and practical concerns; others may wish to emphasize analysis and theoretical
concepts.
A complete set of slide masters for use in lectures, sample programming assignments, interactive exercises for students, and other
course materials may be found via the book's home page.
An elementary course on data structures and algorithms might
emphasize the basic data structures in Part 2 and their use in the
implementations in Parts 3 and 4. A course on design and analysis of
algorithms might emphasize the fundamental material in Part 1 and
Chapter 5, then study the ways in which the algorithms in Parts 3
and 4 achieve good asymptotic performance. A course on software
engineering might omit the mathematical and advanced algorithmic
material, and emphasize how to integrate the implementations given
here into large programs or systems. A course on algorithms might
take a survey approach and introduce concepts from all these areas.
Earlier editions of this book have been used in recent years at
scores of colleges and universities around the world as a text for the
second or third course in computer science and as supplemental reading
for other courses. At Princeton, our experience has been that the
breadth of coverage of material in this book provides our majors with
an introduction to computer science that can be expanded upon in
later courses on analysis of algorithms, systems programming and
theoretical computer science, while providing the growing group of
students from other disciplines with a large set of techniques that these
people can immediately put to good use.
The exercises-most of which are new to this edition-fall into
several types. Some are intended to test understanding of material
in the text, and simply ask readers to work through an example or
to apply concepts described in the text. Others involve implementing
and putting together the algorithms, or running empirical studies to
compare variants of the algorithms and to learn their properties. Still
others are a repository for important information at a level of detail
that is not appropriate for the text. Reading and thinking about the
exercises will pay dividends for every reader.
`
const par_4_en = `
Algorithms of Practical Use
Anyone wanting to use a computer more effectively can use this book
for reference or for self-study. People with programming experience
can find information on specific topics throughout the book. To a large
extent, you can read the individual chapters in the book independently
of the others, although, in some cases, algorithms in one chapter make
use of methods from a previous chapter.
The orientation of the book is to study algorithms likely to be of
practical use. The book provides information about the tools of the
trade to the point that readers can confidently implement, debug, and
put to work algorithms to solve a problem or to provide functionality
in an application. Full implementations of the methods discussed are
included, as are descriptions of the operations of these programs on
a consistent set of examples. Because we work with real code, rather
than write pseudo-code, the programs can be put to practical use
quickly. Program listings are available from the book's home page.
Indeed, one practical application of the algorithms has been to
produce the hundreds of figures throughout the book. Many algorithms are brought to light on an intuitive level through the visual
dimension provided by these figures.
Characteristics of the algorithms and of the situations in which
they might be useful are discussed in detail. Although not emphasized,
connections to the analysis of algorithms and theoretical computer
science are developed in context. When appropriate, empirical and
analytic results are presented to illustrate why certain algorithms are
preferred. When interesting, the relationship of the practical algorithms being discussed to purely theoretical results is described. Specific information on performance characteristics of algorithms and implementations is synthesized, encapsulated, and discussed throughout
the book.
`
const par_5_en = `
Programming Language
The programming language used for all of the implementations is C.
Any particular language has advantages and disadvantages; we use
C because it is widely available and provides the features needed for
our implementations. The programs can be translated easily to other
modern programming languages, since relatively few constructs are
unique to C. We use standard C idioms when appropriate, but this
book is not intended to be a reference work on C programming.
There are many new programs in this edition, and many of the
old ones have been reworked, primarily to make them more readily
useful as abstract-data-type implementations. Extensive comparative
empirical tests on the programs are discussed throughout the text.
Previous editions of the book have presented basic programs in
Pascal, C++, and Modula-3. This code is available through the book
home page on the web; code for new programs and code in new
languages such as Java will be added as appropriate.
A goal of this book is to present the algorithms in as simple and
direct a form as possible. The style is consistent whenever possible, so
that programs that are similar look similar. For many of the algorithms
in this book, the similarities hold regardless of the language: Quicksort
is quicksort (to pick one prominent example), whether expressed in
Algol-60, Basic, Fortran, Smalltalk, Ada, Pascal, C, PostScript, Java,
or countless other programming languages and environments where it
has proved to be an effective sorting method.
We strive for elegant, compact, and portable implementations,
but we take the point of view that efficiency matters, so we try to
he aware of the performance characteristics of our code at all stages
of development. Chapter 1 constitutes a detailed example of this
approach to developing efficient C implementations of our algorithms,
and sets the stage for the rest of the hook.
`
const par_6_en = `
Acknowledgments
Many people gave me helpful feedback on earlier versions of this book.
In particular, hundreds of students at Princeton and Brown have suffered through preliminary drafts over the years. Special thanks are due
to Trina Avery and Tom Freeman for their help in producing the first
edition; to Janet Incerpi for her creativity and ingenuity in persuading
our early and primitive digital computerized typesetting hardware and
software to produce the first edition; to Marc Brown for his part in
the algorithm visualization research that was the genesis of so many of
the figures in the book; and to Dave Hanson for his willingness to answer all of my questions about C. I would also like to thank the many
readers who have provided me with detailed comments about various
editions, including Guy Almes, Jon Bentley, Marc Brown, Jay Gischer,
Allan Heydon, Kennedy Lemke, Udi Manber, Dana Richards, John
Reif, M. Rosenfeld, Stephen Seidman, Michael Quinn, and William
Ward.
To produce this new edition, I have had the pleasure of working
with Peter Gordon and Debbie Lafferty at Addison-Wesley, who have
patiently shepherded this project as it has evolved from a standard
update to a massive rewrite. It has also been my pleasure to work with
several other members of the professional staff at Addison-Wesley. The
nature of this project made the book a somewhat unusual challenge
for many of them, and I much appreciate their forbearance.
I have gained two new mentors in writing this book, and particularly want to express my appreciation to them. First, Steve Summit
carefully checked early versions of the manuscript on a technical level,
and provided me with literally thousands of detailed comments, particularly on the programs. Steve clearly understood my goal of providing
elegant, efficient, and effective implementations, and his comments not
only helped me to provide a measure of consistency across the implementations, but also helped me to improve many of them substantially.
Second, Lyn Dupre also provided me with thousands of detailed comments on the manuscript, which were invaluable in helping me not only
to correct and avoid grammatical errors, but also-more importantto find a consistent and coherent writing style that helps bind together
the daunting mass of technical material here. I am extremely grateful
for the opportunity to learn from Steve and Lyn-their input was vital
in the development of this book.
Much of what I have written here I have learned from the teaching
and writings of Don Knuth, my advisor at Stanford. Although Don had
no direct influence on this work, his presence may be felt in the book,
for it was he who put the study of algorithms on the scientific footing
that makes a work such as this possible. My friend and colleague
Philippe Flajolet, who has been a major force in the development of
the analysis of algorithms as a mature research area, has had a similar
influence on this work.
I am deeply thankful for the support of Princeton University,
Brown University, and the Institut National de Recherce en Informatique et Automatique (INRIA), where I did most of the work on the
book; and of the Institute for Defense Analyses and the Xerox Palo
Alto Research Center, where I did some work on the book while visiting. Many parts of the book are dependent on research that has been
generously supported by the National Science Foundation and the Office of Naval Research. Finally, I thank Bill Bowen, Aaron Lemonick,
and Neil Rudenstine for their support in building an academic environment at Princeton in which I was able to prepare this book, despite
my numerous other responsibilities.
Robert Sedgewick
Marly-le-Roi, France, February, 1983
Princeton, New Jersey, January, 1990
Jamestown, Rhode Island, August, 1997
`


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