// OUDE STIJL - loops

const colors = ['yellow', 'blue', 'red', 'orange'];

// while loop
let index = 0

while (index < colors.length) {
    console.log(colors[index]);
    index++;
};

// for loop
for (index = 0; index < colors.length; index++) {
    console.log(colors[index]);
};

// NIEUWE STIJL - array methods

colors.forEach(element => console.log(element));



/* VRAGEN

1.  De while loop neemt 6 regels in beslag.
    De for loop neemt 3 regels in beslag.
2.  De forEach array method neemt 1 regel in beslag.
3.  Het voordeel van de array method t.o.v. een while loop of for loop is dat je niet per ongeluk een infinite loop kunt maken.
    Het is makkelijker/sneller in gebruik, omdat je zelf de loop niet hoeft te bedenken.
    Je weet zeker dat alle elementen in de loop geprocessed worden.
    Door 'forEach' zie je in 1 oogopslag wat de method doet.
4.  Je kunt de array method niet gebruiken op een object.
*/



// Looping through the properties of an object.

const jacket = {
    color: 'blue',
    length: 'medium',
    size: 38,
    fabric: 'cotton',
    season: 'spring'
};

for (const property in jacket) {
    console.log(`The ${property} of the jacket is ${jacket[property]}.`);
};

/* Ik denk dat dit wél itereren is,
want de loop herhaalt zich totdat alle properties van het object gelogd zijn. */