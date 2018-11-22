var t,index=0, n,p,b,a=[],cno=1;
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs'),
    filename = process.argv[2];

var lineReader = require('readline').createInterface({
    input: fs.createReadStream(filename)
});

lineReader.on('line', function (line) {
    var d = line.trim();
    if(!t){
        t = d;
    }
    if(index === 1) n = d;
    if(index === 2) p = getPair(d.split(" "));
    if(index === 3){
        b = d;
        process.stdout.write('Case #' + cno + ': ');
    }
        
    if(index > 3 && line) {
        countBuses(parseInt(line));
    }

    if(!line){
        index = 0;a=[];
        t--;cno++;
        process.stdout.write('\n');
    }
    if(!t){
        process.exit();
    }else{
        index++;
    }
});

function countBuses(line){
    var count=0;
    for(var i=0; i<n; i++){
        if(line >= parseInt(a[i][0]) && line <= parseInt(a[i][1])){
            count++;
        }
    }
    process.stdout.write(count + ' ');
}
function getPair(d){
    while(d.length){
        a.push(d.splice(0,2));
    }
    return a;
}