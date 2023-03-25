



// // CHALLENGE ONE
// // function countLetters ( string ) {
// //     const lettersArray = string.split( '' )

// //     const letterCount = {};

// //     for ( let i = 0; i < lettersArray.length; i++ ) {

// //         const letter = lettersArray[ i ];
// //         letterCount[ letter ] = ( letterCount[ letter ] || 0 ) + 1;
// //     }

// //     console.log( letterCount );

// //     return letterCount;
// // }

// // countLetters( "hello" ); // { h: 1, e: 1, l: 2, o: 1 }
// // countLetters( "aabbc" ); // { a: 2, b: 2, c: 1 }
// // countLetters( "" ); // {}

// // console.log( letterCount ); // Output: { a: 3, b: 1, c: 1, d: 1 }


// // CHALLENGE ONE

// const arr = [ 1, 2, 2, 3, 4, 4, 4 ];
// const numDuplicates = countDuplicates( arr );

// function countDuplicates ( arr ) {
//     const duplicateNumbersCount = {};
//     let count = 0;

//     for ( let i = 0; i < arr.length; i++ ) {
//         const number = arr[ i ];
//         duplicateNumbersCount[ number ] = ( duplicateNumbersCount[ number ] || 0 ) + 1;
//     }

//     for ( let number in duplicateNumbersCount ) {
//         if ( duplicateNumbersCount[ number ] > 1 ) {
//             count++;
//         }
//     }

//     console.log( count );
//     return count;
// }

// //console.log( numDuplicates ); // Output: 2

