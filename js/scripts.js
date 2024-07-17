

// prezzo finale
let FinalPrice= 0;

// genera bottone
const GenerateButton = document.getElementById('generatebtn');

GenerateButton.addEventListener (
    'click',
    function() {
    
        // prendo il nome che ha inserito l'utente

        const UserNameInput = document.getElementById('nameandsurname');
        const UserName = UserNameInput.value;
        console.log('Il tuo nome e cognome:', UserName);
        document.getElementById('usernamee').innerHTML = UserName;

        // prendo i km che ha inserito l'utente

        const KmInput = document.getElementById('km');
        const Km = KmInput.value;
        console.log('Chilometri che vuoi percorrere:', Km);
        const KmInNumb = parseInt(Km);
        console.log('Km in numero:', KmInNumb)


        // prendo l'età che ha inserito l'utente

        const ageInput = document.getElementById('ageuser');
        const age = ageInput.value;
        console.log('La tua età è:', age);
        const ageInNumb = parseInt(age);
        console.log('age in numero:', ageInNumb);

            
        if (isNaN(KmInNumb) || isNaN(ageInNumb)) {
            alert('Perfavore immetti questo dato sottoforma di numero');
        }
        else {  

            // prezzo base
            const BasicPrice = (0.21 * KmInNumb);

            // Arrotonda il prezzo finale a due decimali
            let FinalPriceRounded = FinalPrice.toFixed(2);

            // se l utente ha più di 18 anni si applica sconto del 20%
            if( age < 18 ) {
                FinalPrice = (BasicPrice + ' ' - (BasicPrice *( 20 / 100)));

                document.getElementById('ticketfinalprice').innerHTML = FinalPriceRounded;
                document.getElementById('tickettype').innerHTML = 'Biglietto Young';
            }


            // se l utente ha più di 65 anni si applica sconto del 40%
            else if( age > 65 ) {
                FinalPrice = (BasicPrice + ' ' - (BasicPrice *( 40 / 100)));
                document.getElementById('ticketfinalprice').innerHTML = FinalPriceRounded;
                document.getElementById('tickettype').innerHTML = 'Biglietto Standard ++';
            }

            // senza sconti
            else {
                FinalPrice= (BasicPrice * 1);
                document.getElementById('ticketfinalprice').innerHTML = FinalPriceRounded;
                document.getElementById('tickettype').innerHTML = 'Biglietto Standard';
            }

        }

    }

)
