l = [[0, 0, 0],
     [0, 0, 0],
     [0, 0, 0]]
#--------------------------------------------
def validaciones(l):
    cont1 = 0
    cont2 = 0

    for i in range(3):
        for j in range(3):
            if l[i][j] == 1:  
                cont1 += 1
                cont2 -=1
            elif l[i][j] == 2:
                cont1 -=1
                cont2 += 1
    if cont1 == 3:
        return 1
    elif cont2 == 3:
        return 2
#--------------------------------------------
    for i in range(3):
        cont1 = 0  
        cont2 = 0
        for j in range(3):
            if l[i][j] == 1:
                cont1 += 1
            elif l[i][j] == 2:
                cont2 += 1
        if cont1 == 3:
            return 1
        elif cont2 == 3:
            return 2
#--------------------------------------------
    cont1 = 0
    cont2 = 0
    for i in range(3):
        if l[i][i] == 1:
            cont1 += 1
        elif l[i][i] == 2:
            cont2 += 1
    if cont1 == 3:
        return 1
    elif cont2 == 3:
        return 2
#--------------------------------------------    
    cont1 = 0
    cont2 = 0
    for i in range(3):
        j = 2 - i
        if l[i][j] == 1:
            cont1 += 1
        elif l[i][j] == 2:
            cont2 += 1
    if cont1 == 3:
        return 1
    elif cont2 == 3:
        return 2
    else: return 0
#--------------------------------------------
def turnos():
    fila = int(input("Ingrese fila: "))
    columna = int(input("Ingrese columna: "))
    return fila, columna
#--------------------------------------------
def tablero(l):
    for i in range(3):
        for j in range(3):
            print(l[i][j], end = "|")
        print()

#--------------------------------------------   
def main():
    band = True
    while band:
        tablero(l)
        fila, columna = turnos()
        if l[fila][columna] == 0:
            l[fila][columna] = 1
        else:
            print("Casillero ocupado")
main()