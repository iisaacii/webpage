
function valuap(respuest){ //recibe un entero que indica la respuesta seleccionada
  if(parseInt(respuest)==this.correcta){
        var reto;
        alert("Es correcta");
        reto=true;
        return reto
        }else{
         	alert("Es false");
          	return reto
            }
}

function pregunta(pregun,respuesta1,respuesta2,respuesta3,respuesta4,correcta){
        this.pregun=pregun;
        
        this.respuestas=[];
        
        this.respuestas[0]=respuesta1;
        this.respuestas[1]=respuesta2;
        this.respuestas[2]=respuesta3;
        this.respuestas[3]=respuesta4;
        
        this.correcta=parseInt(correcta);
        this.ocupado=false;
        this.valuap=valuap;
        
        

}
var retorno=[];
var preguntas=[];

/* En esta parte incluiran sus preguntas debes ser mas de 10 para que se pueda ajecutar 
el script 
*/
/*La primer parte de las comiilas pertenece a la pregunta las siguientes a las respuestas pertintenes y el ultimo valor entero
pertence al numero de la respuesta correcta, por ejemplo; 
RESPUESTA 1 = 0 ;RESPUESTA 1 = 1 ;RESPUESTA1 = 2 ;RESPUESTA 4 = 3
preguntas[0]=new pregunta("¿PREGUNTA GENERICA 1?","RESPUESTA 1","RESPUESTA 2","RESPUESTA 3","RESPUESTA 4",2); 
La respuesta correcta es RESPUESTA 3 ya que su valor asignado es 2*/
preguntas[0]=new pregunta("¿Cuál es la aplicación usual de la representación matricial?","para manipular una matriz","representar un grafo en la computadora","para sumar y multiplicar una matriz","para manipular un grafo",1);

preguntas[1]=new pregunta("Es una ventaja de la representación matricial","representa de manera lógica una función","se ve una mejor perspectiva de un grafo","representa la manera geográfica de la función","ninguna de las anteriores",2);

preguntas[2]=new pregunta("A los conjuntos de relaciones arbitrarias entre objetos se pueden representar mediante:","grafos","matrices","funciones","uml",0);

preguntas[3]=new pregunta("¿Cómo se llama esta propiedad en el producto de matrices: A x (B + C) = (A x B) + (A x C)?","Asociativa","Distributiva por la derecha respecto de la suma matricial","Distributiva por la izquierda respecto de la suma matricial","Conmutativa",1);

preguntas[4]=new pregunta("En el producto de una matriz con un escalar, ¿cuál es la propiedad distributiva con respecto a la suma de matrices?","α(A + B) = αA + αB","1(A) = A","λ(αA) = (λα)A","(α + λ)A = αA + λA",0);

preguntas[5]=new pregunta("Una matriz cuadrada es cuando es de orden...","mxn","nxn","1xn","mx1",1);

preguntas[6]=new pregunta("¿Cómo se realiza la multiplicación un escalar por una matriz?","Se multiplica por cada elemento","Se suma a cada elemento","Se eleva cada elemento en potencia al escalar","Se divide todos los elementos por el escalar",0);

preguntas[7]=new pregunta("Existencia de matriz inversa es una propiedad de la operación...","Suma de matrices","Producto de una matriz por un escalar","Producto de matrices","División de matrices",3);

preguntas[8]=new pregunta("Si m ≠ n entonces es una matriz...","Nula","Rectangular","Columna","Fila",1);

preguntas[9]=new pregunta("¿Cuál es el orden de la matriz columna?","mxn","1x1","mx1","1xn",2);

preguntas[10]=new pregunta("Es un matriz cuyos elementos por debajo de la diagonal principal son ceros","Triangular superior","Triangular inferior","Identidad","Diagonal",1);

preguntas[11]=new pregunta("¿Cómo se denota o representa a una matriz?","A","a","Matriz A","Matriz a",2);

preguntas[12]=new pregunta("¿Cómo se denotan o representan los elementos de una matriz?","A,B,C","a,b,c","1,2,3","Aa,Bb,Cc",1);

preguntas[13]=new pregunta("¿Qué tipo de matriz es la que todos los elementos son 0? Se representa por Omxn o simplemente por 0","Matriz rectangular","Matriz inferior","Matriz nula","Matriz escalonada",2);

preguntas[14]=new pregunta("Es la matriz que se obtiene al escribir los renglones de A, en orden, como columnas","Matriz inversa","Suma de matrices","Diagonal Invertida","Matriz Traspuesta",3);

preguntas[15]=new pregunta("Se dice que una matriz cuadrada A es invertible sí y sólo sí existe otra matriz del mismo orden, llamada inversa de A y representada por A^-1, tal que: A*A^-1 = A^-1*A=1 donde I es la matriz unidad","Matriz regular","Determinante","Producto matriz","Matriz invertible",0);

preguntas[16]=new pregunta("Son aquellas matrices A=(aij) tales que, para todo i, j =1","Matriz cuadrada","Matriz Simétrica","Matriz inversa","Matriz adyacente",1);

preguntas[17]=new pregunta("¿Cómo se le denomina a la matriz que tiene sólo una fila ?","Matriz columna ","Matriz inversa","Matriz renglón","Matriz traspuesta",0);

preguntas[18]=new pregunta("Es el resultado de restar la multiplicación de los elementos de la diagonal principal con la multiplicación de los elementos de la diagonal secundaria","Antisimétrica","Adyacente","Matriz gráfica","Determinante",3);

preguntas[19]=new pregunta("Si a partir de una matriz de adyacencia se obtiene otra diferente, entonces ambas son","semejantes","complementarias","simétricas","isomorfas",3);

preguntas[20]=new pregunta("¿Qué nombre reciben las matrices con los mismos datos por arriba y por abajo de la diagonal principal?","simétricas","de transición","transpuestas","identidad",0);

preguntas[21]=new pregunta("Algoritmo que se usa para determinar la inversa de una matriz y las soluciones de un sistema de ecuaciones lineales.","Recursivo","Gauss Jordan","Divide y vencerás","Repetitivo",1);

preguntas[22]=new pregunta("El número de filas y columnas que tiene una matriz se llama...","Número mn","Número matricial","Filas y columnas","Dimensión de la matriz",3);

preguntas[23]=new pregunta("Matriz en que todos los elementos fuera de la diagonal principal son cero","Matriz diagonal","Matriz traspuesta","Inversa","Matriz nula",0);

preguntas[24]=new pregunta("Es una matriz diagonal cuyos elementos de la diagonal son todos 1","Matriz diagonal","Matriz unidad","Matriz Triangular","Matriz cuadrada",1);

preguntas[25]=new pregunta("Se le conoce también como matriz escalonada","Matriz cuadrada","Matriz adyacencia","Matriz inversa","Matriz triangular",3);

