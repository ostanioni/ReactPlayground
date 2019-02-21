export default [      
  {"part": "1", //  Часть 1 
     "header": "Fundamentals",
     "parts":[
          {
              "id":"sofac-1-1",
              "No":"1",
              "caption":"Introduction",
              "chapters":[
                  "Algorithms",
                  "A Sample Problem - Connectivity",
                  "Union-Find Algorithms",
                  "Perspective",
                  "Summaru of Topics"
              ]
          },
          {
              "id":"sofac-1-2",
              "No":"2",
              "caption":"Principles of Algorithm Analysis ",
              "chapters":[
                  "Implementation and Empirical Analysis",
                  "Analysis of Algorithms",
                  "Growth of Functions",
                  "Big-Oh notation",
                  "Basis Recurrences",
                  "Examples of Algorithm Analysis",
                  "Guarantees, Predictions, and Limitations"
              ]
          }
      ],
      "links": {
          "caption":"Ссылки к части 1",
          "id":"sofac-1-link"
      }
  },
  {"part": "2", // Часть 2
   "header": "Data Structures",
   "parts":[
        {
            "id":"sofac-2-1",  
            "No":"3", 
            "caption":"Elementary Data Structures",
            "chapters":[
                "Buildings Blocks",
                "Arrays",
                "Linked Lists",
                "Elementary List Processing",
                "Memory Allocation for Lists",
                "Strings",
                "Compound Data Structures"
            ]
        },
        {
            "id":"sofac-2-2",
            "No":"4",
            "caption":"Abstract Data Types",
            "chapters":[
                "Abstract Object and Collections of Objects",
                "Pushdown Stack ADT",
                "Examples of Stack ADT",
                "Stack ADT Implementations",
                "Creation of a New ADT",
                "FIFO Queues and Generalized Queues",
                "Duplicate and Index Items",
                "First-Class ADT's",
                "Application-Based ADT Example",
                "Perspective"
            ]
        },
        {
          "id":"sofac-2-3",
          "No":"5",
          "caption":"Recursion and Trees",
          "chapters":[
              "Recursive Algorithms",
              "Divide and Conquer",
              "Dynamic Programming",
              "Trees",
              "Mathematical Properties of Trees",
              "Tree Traversal",
              "Recursive Binary-Tree Algorithms",
              "Graph Traversal",
              "Perspective"
          ]
      }
    ],
  "links": {
    "caption":"Ссылки к части 2",
    "id":""
  }
 },
 {"part": "3", // Часть 3
  "header": "Sorting",
  "parts":[
    {
      "id":"sofac-3-1",  
      "No":"6", 
      "caption":"Elementary Sorting Methods",
      "chapters":[
      "Rules of the Game",
      "Selection Sort",
      "Insertion Sort",
      "Bubble Sort",
      "Perfomance Characteristics of Elementary Sorts",
      "Shellsort",
      "Sorting Other Types of Data",
      "Index and Pointer Sorting",
      "Sorting of Linked Lists",
      "Key-Indexed Counting"
      ]
    },
    {
      "id":"sofac-3-2",
      "No":"7",
      "caption":"Quicksort",
      "chapters":[
        "The Basic Algorith",
        "Perfomance Characteristics of Quicksort",
        "Stack Size",
        "Small Subfiles",
        "Median-of-Three Partitioning",
        "Duplicate Keys",
        "Strings and Vectors",
        "Selection"
      ]
    },
    {
      "id":"sofac-3-3",
      "No":"8",
      "caption":"Merging and Mergesort",
      "chapters":[
        "Two-Way Merging",
        "Abstract-In-place Merge",
        "Top-Down Mergesort",
        "Improvements to the Basic Algorithm",
        "Bottom-Up Mergesort",
        "Perfomance Chracteristics of Mergesort",
        "Linked-List Implementations of Mergesort",
        "Recursion Revisited"
      ]
    },
    {
      "id":"sofac-3-4",
      "No":"9",
      "caption":"Priority Queues and Heapsort",
      "chapters":[
        "Elementary Implementations",
        "Heap Data Structure",
        "Algorithms on Heaps",
        "Heapsort",
        "Priority-Queue ADT",
        "Priority Queues for Index Items",
        "Binomial Queues"
      ]
    },
    {
      "id":"sofac-3-5",
      "No":"10",
      "caption":"Radix Sorting",
      "chapters":[
        "Bits, Bytes, and Words",
        "Binary Quicksort",
        "MSD Radix Sort",
        "Three-Way Radix Quicksort",
        "LSD Radix Sort",
        "Perfomance Characteristics of Radix Sorts",
        "Sublinear-Time Sorts"
      ]
    },
    {
      "id":"sofac-3-6",
      "No":"11",
      "caption":"Special-Purpose Sorts",
      "chapters":[
        "Batcher's Odd-Even Mergesort",
        "Sorting Networks",
        "External Sorting",
        "Sort-Merge Implementation",
        "Parallel Sort/Merge"
      ]
    }
  ],
  "links": {
    "caption":"Ссылки к части 3",
    "id":""
  }
},
{"part": "4", // Часть 4
  "header": "Searching",
  "parts":[
    {
      "id":"sofac-4-1",  
      "No":"12", 
      "caption":"Symbol Tables and BSTs",
      "chapters":[
        "Symbol-Table ADT",
        "Key-Indexed Search",
        "Sequential Search",
        "Binary Search",
        "Binary Search Trees (BSTs)",
        "Perfomance Characteristics of BSTs",
        "Index Implementations with Symbol Tables",
        "Insertion at the Root in BSTs",
        "BST Implementations of Other ADT Functions"
      ]
    },
    {
      "id":"sofac-4-2",
      "No":"13",
      "caption":"Balanced Trees",
      "chapters":[
        "Randomized BSTs",
        "Splay BSTs",
        "Top-Down-2-3-4 Trees",
        "Red-Black Trees",
        "Skip Lists",
        "Perfomance Characteristics"
      ]
    },
    {
      "id":"sofac-4-3",
      "No":"14",
      "caption":"Hashing",
      "chapters":[
        "Hash Functions",
        "Separate Chaining",
        "Linear Probing",
        "Double Hashing",
        "Dynamic Hash Tables",
        "Perspective"
      ]
    },
    {
      "id":"sofac-4-4",
      "No":"15",
      "caption":"Radix Search",
      "chapters":[
        "Digital Search Trees",
        "Tries",
        "Patricia Tries",
        "Multiway Tries and TSTs",
        "Text String Index Algorithms"
      ]
    },
    {
      "id":"sofac-4-5",
      "No":"16",
      "caption":"External Searching",
      "chapters":[
        "Rules of the Game",
        "Indexed Sequential Access",
        "B Trees",
        "Extendible Hashing",
        "Perspective"
      ]
    }
  ],
  "links": {
    "caption":"Ссылки к части 4",
    "id":""
  }
}
]