
let Part_1 = {
  1:{
    1: `
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

    `,
    2: `
    for (i = p; i != id[i]; i = id[i]) ;
    for (j = q; j != id[j]; j = id[j]) ;
    if (i == j) continue;
    id[i] = j;
    printf(" %d %d\n", p, q);

    `,
    3: `
    #include <stdio.h>
    #define N 10000
    main()
      { int i, j, p, q, id[N], sz[N];
        for (i = 0; i < N; i++) 
          { id[i] = i; sz[i] = 1; }
        while (scanf("%d %d\n", &p, &q) == 2)
          { 
            for (i = p; i != id[i]; i = id[i]) ;
            for (j = q; j != id[j]; j = id[j]) ;
            if (i == j) continue;
            if (sz[i] < sz[j])
                { id[i] = j; sz[j] += sz[i]; }
            else { id[j] = i; sz[i] += sz[j]; }
            printf(" %d %d\n", p, q);
          }
    }

    `,
    4:  `for (i = p; i != id[i]; i = id[i]) 
          { int t = i; i = id[id[t]]; id[t] = i; } 
        for (j = q; j != id[j]; j = id[j]) ;
          { int t = j; j = id[id[t]]; id[t] = j; } 
    `,
  }
};
let descriptionEn = {
  1: `
    Quick-find solution to connectivity problem
    This program reads a sequence of pairs of nonnegative integers less than
    Nfrom standard input (interpreting the pair p q to mean "connect object
    p to object q") and prints out pairs representing objects that are not yet
    connected. It maintains an array id that has an entry for each object,
    with the property that id[p] and id[q] are equal if and only if p and
    q are connected. For simplicity, we define N as a compile-time constant.
    Alternatively, we could take it from the input and allocate the id array
    dynamically (see Section 3.2).
  `,
  2: `
    Quick-union solution to connectivity problem
    If we replace the body of the while loop in Program I. I by this code, we
    have a program that meets the same specifications as Program 1.1, but
    does less computation for the union operation at the expense of more
    computation for the find operation. The for loops and subsequent if
    statement in this code specify the necessary and sufficient conditions on
    the id array for p and q to be connected. The assignment statement
    id [i] = j implements the union operation.
  `,
  3: `
    Weighted version of quick union
    This program is a modification to the quick-union algorithm (see Program 1.2) that keeps an additional array sz for the purpose of maintaining, for each object with id [i] == i, the number of nodes in the
    associated tree, so that the union operation can link the smaller of the
    two specified trees to the larger, thus preventing the growth of long paths
    in the trees.
  `,
  4: `
    Path compression by halving
    If we replace the for loops in Program I. 3 by this code, we halve the
    length of any path that we traverse. The net result of this change is
    that the trees become almost completely flat after a long sequence of
    operations.
  `,
}
let descriptionRu = {
  1: `
      Решение задачи связности методом быстрого поиска	
    Эта программа считывает последовательность пар неотрицательных целых чисел,
    меньших N, из стандартного ввода (интерпретируя пару р q, как "связать объект р с
    объектом q") и выводит пары, представляющие объекты, которые еще не связаны.
    Она поддерживает массив id, содержащий запись для каждого объекта и обладаю¬
    щий тем свойством, что	элементы	id[p] и id[q] равны	тогда	и	только тогда,	когда
    объекты р и q связаны.	Для простоты N определена во	время	компиляции	как	кон¬
    станта. Иначе можно было бы считывать ее из ввода и распределять массив id дина¬
    мически (см. раздел 3.2).

  `,
  2: `
    Решение задачи связности методом быстрого объединения	
    Если тело цикла while в программе 1.1 заменить
    этим кодом, мы получим программу, которая соответствует
    тем же спецификациям, что и программа
    1.1,	но выполняет меньше вычислений для операции
    union за счет выполнения большего количества вычислений
    для операции find. Циклы for и последующий оператор if
    в этом коде определяют необходимые и достаточные условия
    для того, чтобы массив id для р и q был связанным. 
    Оператор присваивания id[i] = j реализует операцию union.
  
  `,
  3: `
    Взвешенная версия быстрого объединения	
    Эта программа является модификацией алгоритма быстрого объединения (см. про¬
    грамму 1.2), которая в служебных целях поддерживает для каждого объекта, у которо¬
    го id[i] = i, дополнительный массив sz, представляющий собой массив количе¬
    ства узлов в соответствующем ему дереве, чтобы операция union могла связывать
    меньшее из двух заданных деревьев с большим, тем самым предотвращая разраста¬
    ние длинных путей в деревьях.
  
  `,
  4: `
    Сжатие путей делением пополам
    Если циклы for в программе 1.3 заменить этим кодом,
    то длина любого проходимого пути будет делиться
    пополам. Конечный результат этого изменения заключается в том,
    что превращение деревьев в почти полностью плоские после
    выполнения длинной последовательности операций.
  
  `,
}