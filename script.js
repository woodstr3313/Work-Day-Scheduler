var date = moment().format("MMMM Do YYYY");
var currentDay = $("#currentDay");
currentDay.html(date);

var divEl = $("#button");
divEl.on("click", ".saveBtn", function (event) {
    event.preventDefault();
    console.log($(this)[0].id)
    if ($(this)[0].id == "save1") {
        localStorage.setItem("#text1", $("#text1").val())
    }
    else if ($(this)[0].id == "save2") {
        localStorage.setItem("#text2", $("#text2").val())
    }
    else if ($(this)[0].id == "save3") {
        localStorage.setItem("#text3", $("#text3").val())
    }
    else if ($(this)[0].id == "save4") {
        localStorage.setItem("#text4", $("#text4").val())
    }
    else if ($(this)[0].id == "save5") {
        localStorage.setItem("#text5", $("#text5").val())
    }
    else if ($(this)[0].id == "save6") {
        localStorage.setItem("#text6", $("#text6").val())
    }
    else if ($(this)[0].id == "save7") {
        localStorage.setItem("#text7", $("#text7").val())
    }
    else if ($(this)[0].id == "save8") {
        localStorage.setItem("#text8", $("#text8").val())
    }
    else if ($(this)[0].id == "save9") {
        localStorage.setItem("#text9", $("#text9").val())
    }
    else if ($(this)[0].id == "save10") {
        localStorage.setItem("#text10", $("#text10").val())
    }
})
for(var i =(0);i<localStorage.length;i++){
    $(localStorage.key(i)).val(localStorage.getItem(localStorage.key(i)))
}
