var barColors = ["orange", "green","blue","brown","red"];
var xValues = ["Java", "Python"];
var yValues = [100, 100];
new Chart("backendChart", {
    type: "doughnut",
    data: {
    labels: xValues,
    datasets: [{
        backgroundColor: barColors,
        data: yValues
    }]
    },
    options: {
    legend: {display: false}
    }
});
var xFrontendValues = ["Html", "Css", "Javascript", "JQuery", "Ajax", "Angular"];
var yFrontendValues = [100, 100, 100, 80, 80, 80];
new Chart("frontendChart", {
    type: "doughnut",
    data: {
    labels: xFrontendValues,
    datasets: [{
        backgroundColor: barColors,
        data: yFrontendValues
    }]
    },
    options: {
    legend: {display: false}
    }
});
var xCloudValues = ["Docker", "Kubernetes"];
var yCloudValues = [90, 90];
new Chart("cloudChart", {
    type: "doughnut",
    data: {
    labels: xCloudValues,
    datasets: [{
        backgroundColor: barColors,
        data: yCloudValues
    }]
    },
    options: {
    legend: {display: false}
    }
});
var xUnitTestValues = ["Junit", "Mockito"];
var yUnitTestValues = [90, 90];
new Chart("unitTestingChart", {
    type: "doughnut",
    data: {
    labels: xUnitTestValues,
    datasets: [{
        backgroundColor: barColors,
        data: yUnitTestValues
    }]
    },
    options: {
    legend: {display: false}
    }
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
    });
}