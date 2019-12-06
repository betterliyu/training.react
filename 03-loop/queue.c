
/*
题目内容：
班级第一次列队，通常老师会让同学按身高排成一列，然后1、2报数，喊到1的同学向前一 步，就这样，队伍就变成两列了。假设现在一个班级有n个同学，并且他们已经按身高排成 了一列，同学按身高从1到n编号，你能告诉我最后哪些编号的同学站在了第一列么? 

输入格式:
输入一个正整数n，表示班级的人数。

输出格式：
按顺序输出所有在第一列的同学对应的编号，每两个编号之间用一个空格隔开，最后一个编号后面没有空格。

输入样例：
11

输出样例：
1 3 5 7 9 11
*/
#include <stdio.h>

int main()
{
  int size = 0;
  printf("Please input the class size:");
  scanf("%d", &size);
  for (int _ = 1; _ <= size; _++)
  {
    if (_ % 2 == 1)
    {
      if (_ == 1)
      {
        printf("%d", _);
      }
      else
      {
        printf(" %d", _);
      }
    }
  }

  return 0;
}