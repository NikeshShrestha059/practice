//event//
//mouse event//
//  <button onclick="console.log('button was clicked');alert('button was clicked');">click me </button>
//     <button ondblclick="console.log('button was clicked 2x');">click me 2 times</button>
//      <div contextmenu="console.log('right click');">right click</div>
//     <div onmouseup="console.log('scrolled');">mouse scroll</div> 
//      <div onmouseup="console.log('scrolled');">mouse scroll</div> 
//      <div onmouseover="console.log('inside a div');">box</div>
// key event//
//   <input type="text" id="inputBox" placeholder="Type something"></input>
//  document.getElementById("inputBox").addEventListener("keydown", (event) => {
//         console.log("Key pressed: " + event.key);
//     });
//     document.getElementById("inputBox").addEventListener("keypress", (event) => {
//         console.log("Key pressed: " + event.key);
//     });
//     document.getElementById("inputBox").addEventListener("keyup", (event) => {
//         console.log("Key released: " + event.key);
//     });
//form event//

/* <form id="myForm">
    <input type="text" placeholder="Enter name">
    <button type="submit">Submit</button>
    <input type="text" id="focusInput" placeholder="Click here">
    <input type="text" id="blurInput" placeholder="Click and then click away">
<select id="dropdown">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
</select>
</form>

Submit
<script>
    document.getElementById("myForm").addEventListener("submit", (event) => {
        event.preventDefault(); // Prevents actual form submission
        alert("Form Submitted!");
    });
</script>

onreset
<script>
    document.getElementById("resetForm").addEventListener("reset", () => {
        alert("Form Reset!");
    });
</script>

onchange
<script>
    document.getElementById("dropdown").addEventListener("change", (event) => {
        alert("Selected: " + event.target.value);
    });
</script>

oninput
<script>
    document.getElementById("textInput").addEventListener("input", (event) => {
        console.log("Current Value: " + event.target.value);
    });
</script>

onfocus
<script>
    document.getElementById("focusInput").addEventListener("focus", () => {
        console.log("Input field focused!");
    });
</script>

onblur
<input type="text" id="blurInput" placeholder="Click and then click away">
*/

/*//Window Events//
onload
<script>
    window.addEventListener("load", () => {
        alert("Page has fully loaded!");
    });
</script>

onscroll
<script>
    window.addEventListener("scroll", () => {
        console.log("User scrolled! Scroll position: " + window.scrollY);
    });
</script>
onunload
<script>
    window.addEventListener("unload", () => {
        console.log("User is leaving the page!");
    });
</script>
onfocus / onblur
<script>
    window.addEventListener("focus", () => {
        console.log("Window is active!");
    });

    window.addEventListener("blur", () => {
        console.log("Window lost focus!");
    });
</script>
*/
/*//Load Events//
Window Load Event
<script>
    window.addEventListener("load", () => {
        console.log("Page has fully loaded!");
    });
</script>

DOMContentLoaded Event
<script>
    document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM is fully loaded!");
    });
</script>

Image Load Event
<img id="myImage" src="example.jpg" alt="Example Image">

<script>
    document.getElementById("myImage").addEventListener("load", () => {
        console.log("Image has loaded!");
    });
</script>

Script Load Event
<script>
    let script = document.createElement("script");
    script.src = "example.js";
    script.addEventListener("load", () => {
        console.log("Script has loaded!");
    });
    document.body.appendChild(script);
</script>*/

