const solveForCircle = ( ) => {
    var r = document.getElementById("varR").value;
    var d = document.getElementById("varD").value;
    var c = document.getElementById("varC").value;

// IF INPUT IS THE RADIUS:
    if (r > 0) {
        var radius = r;
        var diameter = r * 2;
        var circumf = (r * 2 * Math.PI).toFixed(2);
        var gotR = "Radius = " + r + " un." + " Diameter = " +      diameter + " un." + " Circumf. = " + circumf + " un.";
            return gotR;
    } else 
    if (d > 0) {
        var radius = d / 2;
        var diameter = d;
        var circumf = (d *  Math.PI).toFixed(2);
        var gotD = "Radius = " + radius + " un." + " Diameter = " + d + " un." + " Circumf. = " + circumf + " un.";
            return gotD;
    } else 
    if (c > 0) {
        var radius = ((c / Math.PI) / 2).toFixed(2);
        var diameter = (c / Math.PI).toFixed(2);
        var circumf = c;
        var gotC = "Radius = " + radius + " un." + " Diameter = " + diameter + " un." + " Circumf. = " + c + " un.";
            return gotC;
    } else 
        return "Please enter only one value above. The other values will be calculated for you."
}
const myCalc = () => {
    document.getElementById("demo").innerHTML = solveForCircle( );
};











    

// FROM INTERNET W3
// <p>Click the button to display the fixed number.</p>

// <button onclick="myFunction()">Try it</button>

// <p id="demo"></p>

// <script>
// function myFunction() {
//   var num = 5.56789;
//   var n = num.toFixed(2);
//   document.getElementById("demo").innerHTML = n;
// }
// </script>