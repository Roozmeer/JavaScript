let collection = document.getElementsByName("result");

function userEvents(currentValue, currentIndex) {
    console.log(currentValue, currentIndex);
    currentValue.addEventListener('click', function () {
        this.classList.toggle('choosen');
    })
}

//function userEvents(element, index) {
//    element.addEventListener('click', function () {
//        this.classList.toggle('choosen');
//
//        console.log(
//            "element: ", element,
//            "index: ", index,
//            "title: ", collection[index].title,
//            "data: ", collection[index].dataset["value"]
//        );
//    })
//}

collection.forEach(
    function (currentValue, currentIndex) {
        userEvents(currentValue, currentIndex);
    }
);