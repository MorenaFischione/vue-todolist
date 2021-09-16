/*

    Milestone:
    1. Stampare in pagina un item per ogni elemento contenuto in un array
    2. Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
    3. Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, 
       il testo digitato sarà aggiunto alla list


    dobbia creare una lista di elementi da inserire nel data   
    ogni elemento deve essere stampata in pagina in una lista--> quindi ho bisogno di identificare l'index di ciascun elemento
    aggiungo alla lista una icona x
    ho bisogno di una funzione che al click al click rimuova un elemento della lista 
    devo dare la possibilità di aggiungere elementi con un input
    devo creare un bottone che aggiunge l'elemento al click (con una funzione) deve essere ripetibile 

*/




var app = new Vue(
    {
        el: '#app',
    
        data: {
          toDoList : ["mele", "arance", "banane", "pesche", "mango", "fragole", "albicocche", "pere", "mandarini", "ananas",],


        },

        methods: {

            removeElementList: function(index){
                this.toDoList.splice(index, 1);
            },
        }
    });