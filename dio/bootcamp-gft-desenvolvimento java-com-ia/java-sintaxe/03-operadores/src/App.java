public class App {
    public static void main(String[] args) throws Exception {
        // Operador de atribuição '='
        String name = "Uener";
        int age = 40;
        double weight = 101.5;
        char gender = 'M';
        boolean donator = false;
        // Date bornDate = new Date(24 - 05 - 1984);

        // Operadores Aritméticos ( +, -, *, /, %)
        double sum = 10.5 + 15.7;
        int subtraction = 113 - 25;
        int multiplication = 20 * 7;
        int division = 15 / 3;
        int modulo = 18 % 3;
        double result = (10 * 7) + (20 / (6 - 2));

        System.out.println("Operador de Soma (10.5 + 15.7) = " + sum);
        System.out.println("Operador de Subtração (113 - 25) = " + subtraction);
        System.out.println("Operador de Multiplicação (20 * 7) = " + multiplication);
        System.out.println("Operador de Divisão (15 / 3) = " + division);
        System.out.println("Operador de modulo (18 % 3) = " + modulo);
        System.out.println("Operador de Resultado ((10 * 7) + (20 / (6 - 2))) = " + result);

        // # Operadores Unário
        // (+) Operador unário de valor positivo
        int number = 5;
        System.out.println("Número position: " + number);
        // (-) Operador unário de valor negativo
        number = -number;
        System.out.println("Número negativo: " + number);
        number = number * -1;
        System.out.println("Tornando novamente em positivo: " + number);
        // (++) Operador unário de incremento de valor
        int number0 = 5;
        number0++;
        System.out.println("Incremento (5++): " + number0);
        // (--) Operador unário de decremento de valor
        number0--;
        System.out.println("Decremento (5--): " + number0);
        // Negação de booleanos
        boolean booleana = true;
        System.out.println("Neagação de booleanos usando (!): " + !booleana);
        booleana = !booleana;
        System.out.println("Neagação de booleanos usando (!): " + !booleana);

        // Operador Ternário
        int varA, varB;
        varA = 5;
        varB = 6;

        String resultado = varA == varB ? "Verdadeiro" : "Falso";

        System.out.println("Variável A = " + varA + " é igual a Variável B = " + varB + " ? R.: " + resultado);

        // Operadores Relacionais
        int num1 = 1, num2 = 2;

        boolean yesNot = num1 == num2;

        System.out.println("Número é igual (==) de número 2? R.:" + yesNot);

        yesNot = num1 != num2;
        System.out.println("Número é igual (!=) de número 2? R.:" + yesNot);

        yesNot = num1 > num2;
        System.out.println("Número é igual (>) de número 2? R.:" + yesNot);

        yesNot = num1 < num2;
        System.out.println("Número é igual (<) de número 2? R.:" + yesNot);

        String nameUm = "Uener", nameDois = "Uener", nameTres = new String("Uener");
        System.out.println(nameUm == nameDois);
        System.out.println(nameUm.equals(nameTres));

        // Operadores Lógicos
        // && Operador "E"
        boolean condition1 = true;
        boolean condition2 = false;
        if (condition1 && condition2) {
            System.out.println("As duas condições são verdadeiras!");
            // || Operador "ou"
        }
        if (condition1 || condition2) {
            System.out.println("Apenas uma é verdadeira!");
        }
        // System.out.println("Fim!");

    }
}
