const main = document.getElementsByTagName("main")[0];
const majorDegreePattern = "I ii iii IV V vi vii°";
const minorDegreePattern = "i ii° III iv v VI VII";


function createNoteColumns(scale)
{
    while (main.hasChildNodes())
        main.removeChild(main.firstChild);

    let currentPattern = (scale.endsWith("m")) ? minorDegreePattern : majorDegreePattern;
    let currentScale = "";

    switch(scale)
    {
        case "C":
            currentScale = "C D E F G A B";
            break;
        case "Cm":
            currentScale = "C D D# F G G# A#";
            break;
        case "C#":
            currentScale = "C# D# F F# G# A# C";
            break;
        case "C#m":
            currentScale = "C# D# E F# G# A B";
            break;
        case "D":
            currentScale = "D E F# G A B C#";
            break;
        case "Dm":
            currentScale = "D E F G A A# C";
            break;
        case "D#":
            currentScale = "D# F G G# A# C D";
            break;
        case "D#m":
            currentScale = "D# F F# G# A# B C#";
            break;
    }

    const degreeArg = currentPattern.split(" ");
    const scaleArg = currentScale.split(" ");

    for (let i = 0; i < 7; ++i)
    {
        createNoteColumn(degreeArg[i], scaleArg[i]);
    }
}


function createNoteColumn(degree, note)
{
    const noteBox = document.createElement("div");
    noteBox.classList.add("note-box");

    const h4 = document.createElement("h4");
    h4.textContent = degree;

    const h2 = document.createElement("h2");
    h2.textContent = note;

    noteBox.appendChild(h4);
    noteBox.appendChild(h2);
    main.appendChild(noteBox);
}


const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; ++i)
{
    const button = buttons[i];
    const textContent = button.textContent

    button.addEventListener("click", () =>
    {
        createNoteColumns(textContent);
    });
}