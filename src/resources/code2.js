const code = {
  1: `
  int search(int a[], int v, int l, int r)
  { int i;
    for (i = l; i <= r; i++)
      if (v == a[i]) return i;
    return -1;
  }
  `,
  2: `
  int search(int a[], int v, int l, int r)
  { 
    while (r >= l)
      { int m = (l+r)/2;
        if (v == a[m]) return m;
        if (v < a[m]) r = m-1; else l = m+1;
      }
    return -1;
  }
  `,
}
const descriptionEn = {
  1: `
  Sequential search
  This function checks whether the number v is among a previously stored
  set of numbers in a [1], a [1+1], ..., a [r], by comparing against each
  number sequentially, starting at the beginning. If we reach the end without
  finding the number sought, then we return the value -1. Otherwise,
  we return the index of the array position containing the number.
  `,
  2: `
  Binary search
  This program has the same functionality as Program 2.1, but it is much
  more efficient.
  `,
}
const descriptionRu = {
  1: `
  Последовательный поиск	
  Данная функция проверяет, находится ли число v среди элементов массива
  а [1], а [1+1], а [г] путем последовательного сравнения с каждым элементом,
  начиная с начала. Если по достижении последнего элемента нужное значение не найдено, 
  то функция возвращает значение -1. В противном случае она возвращает индекс
  элемента массива, содержащего искомое число.
  `,
  2: `
  Бинарный поиск	
  В данной программе используются те же функциональные средства, что и программе
  2.1,	однако гораздо ее эффективность гораздо выше.
  `,
}