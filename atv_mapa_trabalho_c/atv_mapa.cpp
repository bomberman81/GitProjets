#include <stdio.h>

long int mc;
int qtde, i;

int main(void) {
	mc = 0;
	printf("Informe o valor inicial de Midi-chlorians (menos que 100.000): ");
	scanf("%d", &mc);
	printf("Informe o numero de ciclos de treinamento: ");
	scanf("%d", &qtde);
	
	for (i=1; i<=qtde; i++) {
		  mc = mc * 2;
		  mc = mc + 1000;	
		}	
	
	printf("O numero de Midi-chlorians eh: %d", mc);
	
	if (mc < 100000) {
		printf("\nO grau de instrucao eh: Padawan.");
	} else if((mc >= 100000) && (mc <=1000000)) {
		printf("\nO grau de instrucao eh: Cavaleiro Jedi.");
	} else {
		printf("\nO grau de instrucao eh: Mestre Jedi.");
	}
	return(0);
}




