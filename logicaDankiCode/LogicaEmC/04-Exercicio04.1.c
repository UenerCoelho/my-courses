#include <stdio.h>
#include <stdlib.h>

int main () 
{
  int contador = 0;
  int limite = 10;

  while(contador <= limite) {
    printf("Ola mundo! %d\n", contador );
    printf("----\n");
    contador++;
  }

  return 0;
}