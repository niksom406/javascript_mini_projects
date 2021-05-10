var form = document.getElementById('addForm')
var itemList = document.getElementById('items')
var filters = document.getElementById('filter')

form.addEventListener('submit', addItem)
itemList.addEventListener('click', deleteItem)
filter.addEventListener('keyup', filterItem)

function addItem (e) {
  e.preventDefault()

  var newItem = document.getElementById('item').value

  var li = document.createElement('li')
  li.className = 'list-group-item'
  li.appendChild(document.createTextNode(newItem))

  var deletebtn = document.createElement('button')
  deletebtn.className = 'btn btn-danger btn-sm float-right delete'
  deletebtn.appendChild(document.createTextNode('X'))
  li.appendChild(deletebtn)

  itemList.appendChild(li)
}

function deleteItem (e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure you want to delete this item?')) {
      var li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}

function filterItem (e) {
  var text = e.target.value.toLowerCase()
  var item = document.getElementsByTagName('li')
  Array.from(item).forEach(function (item) {
    var itemName = item.firstChild.textContent
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  })
  console.log(item)
}
