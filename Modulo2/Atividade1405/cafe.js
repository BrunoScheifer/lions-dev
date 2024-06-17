let gostaDeCafe
console.log('voce gosta de cafe')

process.stdin.once('data', function(data){
    gostaDeCafe = data.toString().trim()
    processamento(gostaDeCafe)
    process.exit()

})

function processamento(gostaDeCafe){

if (gostaDeCafe.toLowerCase() == 'sim') {
    console.log("cafe e bom mesmo")}
else {
    console.log("como vive entao")}
}

