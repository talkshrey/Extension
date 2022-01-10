let arr = []
document.getElementById("submit").addEventListener('click', add)
document.getElementById("create").addEventListener('click', createBookmarkFolder)

function add() {
    var item = document.getElementById("item").value
    arr.push(item)
    var ul = document.getElementById("todo")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(item))
    ul.appendChild(li)
    chrome.storage.local.set({book:Object.values(arr)}, function() {
        console.log('Storage set')
    })
    document.getElementById("item").value = " "
}

function createBookmarkFolder() {
    chrome.storage.local.get(['book'], function(result) {
        document.getElementById("url").textContent = result.book.join("\r\n")
    })
}